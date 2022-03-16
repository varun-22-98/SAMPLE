const express = require('express');
const router = require('./Routes/router');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/', router)

app.listen(7000, ()=>console.log('listening on port 7000'));
