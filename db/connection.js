
const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://mt:1234@prueba-apiredsocial.fokw2z3.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    console.log("Connect the client to the server	(optional starting in v4.7)")
    await client.connect();
    console.log("Send a ping to confirm a successful connection")
    await client.db("Hola").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    console.log("Ensures that the client will close when you finish/error")
    await client.close();
  }
}

run().catch(console.dir);

