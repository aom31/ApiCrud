const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('aom come use nodemon')

})
app.listen(port, () => {
    console.log('example app listen in port' + port)
})

const { MongoClient } = require("mongodb");
const uri = "mongodb://MyUserAdmin:MyUserAdmin@localhost:27017";

app.post('/users/create', async(req, res) => {
    const user = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('users').insertOne({
        id: parseInt(user.id),
        fname: user.fname,
        lname: user.lname,
        username: user.username,
        email: user.email,
        avatar: user.avatar
    });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "User with ID = " + user.id + " is created",
        "user": user
    });

})