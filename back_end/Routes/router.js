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