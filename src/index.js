const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000

/*

    dbusername = recipeapp
    dbuserpass = jHJo6hqr1Ur0DELp

*/

app.get('/',(req,res)=>{
    res.send("Server Started")
})


const uri = "mongodb+srv://recipeapp:jHJo6hqr1Ur0DELp@cluster0.mtnbd39.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    const userCollection = client.db('recipe_app').collection("users")
    const recipeCollection = client.db('recipe_app').collection("recipies")

    try{
        app.get('/users', async (req,res)=>{
            const query = {}
            const cursor = userCollection.find(query)
            const users = await cursor.toArray()
            res.send(users)
        })
    }
    finally{}
}
run().catch(console.dir);
app.listen(port,()=>{
    console.log(`The app is rumming on port ${port}`)
})