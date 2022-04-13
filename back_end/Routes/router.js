const express = require('express');
const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require('dotenv');

dotenv.config()

const router = express.Router()

const uri = process.env.URI

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = await client.db("OCC");
    const collection = await db.collection("EmployeeDetails")
    const demandcollection = await db.collection("DemandDetails")
    const supplycollection = await db.collection("SupplyDetails")
    const supplyCollection = await db.collection("SUPPLY_FORMS")

  router.post('/addSupply', async (req, res) => {
    var data = req.body.data
    await supplyCollection.insertOne(data)
    // console.log(data)
    res.send(data)
  })
  router.get('/getSupply', async (req, res) => {
    const data = await supplyCollection.find({}).toArray();
    res.send(data)
  })
  
  router.delete('/deleteSupply',async (req,res) => {
    const dataId = req.body.id
    const data = await supplyCollection.deleteOne({ _id:new ObjectId(dataId)})
    res.status(200).json({ msg: `The ${data} is deleted` });
  })

  router.put('/updateSupply', async (req, res,) => {
    const dataId = ObjectId(req.body.data.id)
    // console.log(typeof dataId)
    const newData = req.body.data
    await supplyCollection.updateOne({ _id:new ObjectId(dataId)},{ $set: newData });
    res.status(200);
  })
    
    router.get('/getdemand', async (req, res) => {
      const data = await demandcollection.find({}).toArray();
      res.send(data)
  })
  router.get('/getsupply', async (req, res) => {
    const data = await supplycollection.find({}).toArray();
    res.send(data)
})

  router.post('/insertdata', async (req, res) => {
    var data = req.body.data
    await collection.insertOne(data)
    console.log(data)
    res.send(data)
  })
  router.post('/adddemand', async (req, res) => {
    var data = req.body.data 
    await demandcollection.insertOne(data)
    console.log(data)
    res.send(data)
  })
  router.post('/addsupply', async (req, res) => {
    var data = req.body.data 
    await supplycollection.insertOne(data)
    console.log(data)
    res.send(data)
  })


  router.put('/updatedata', async (req, res) => {
    var empId = req.body.data.EmpId;
    var newData = req.body.data
    await collection.replaceOne({EmpId: empId}, newData)
    res.send(await collection.findOne({EmpId: empId}));

  })
    
    router.get('/getdata', async (req, res) => {
      const data = await collection.find({}).toArray();
      res.send(data)
  })

  router.post('/insertdata', async (req, res) => {
    var data = req.body.data
    await collection.insertOne(data)
    console.log(data)
    res.send(data)
  })

  router.put('/updatedata', async (req, res) => {
    var empId = req.body.data.EmpId;
    var newData = req.body.data
    await collection.replaceOne({EmpId: empId}, newData)
    res.send(await collection.findOne({EmpId: empId}));

  })

  }catch (err) {
      console.error(err)
  }
}
run()



module.exports = router