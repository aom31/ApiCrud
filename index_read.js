const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('aom get database')

})
app.listen(port, () => {
    console.log('example app listen in port' + port)
})

const { MongoClient } = require("mongodb");
const uri = "mongodb://MyUserAdmin:MyUserAdmin@localhost:27017";



app.get('/users', async(req, res) => {

    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('mydb').collection('users').find({}).toArray();
    await client.close();
    res.status(200).send(users)

})