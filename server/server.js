const http = require("http");
const express = require("express");
var cors = require("cors");
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://ullltimate:keine2809@cluster0.lclqfcc.mongodb.net/mongodb?retryWrites=true&w=majority');

const start = async () => {
    try {
        await client.connect();
        console.log('database connected');
        //await client.db().createCollection('users');
        const users = client.db().collection('users');
        //await users.insertOne({
        //        name: 'Helen',
        //        email: 'helen123@gmail.com',
        //        password: '193939rt',
        //        signUp: '23.03.2023',
        //        signIn: '25.05.2023',
        //        status: 'unblock'
        //    })
        const usersArr = await users.find().toArray();
        console.log(usersArr);
    } catch (error) {
        console.log(error)
    }
}

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:8100" }));
app.use("/", function (req, res) {
  res.send("CRUD API works :-)");
})
const server = http.createServer(app);
const port = 5000;
server.listen(port);
console.debug("Server listening on port " + port);

start()