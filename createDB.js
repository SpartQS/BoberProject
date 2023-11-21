var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("Bobers");
database.dropDatabase()
database = client.db("Bobers");
const bober = database.collection("Types");
const result = await bober.insertOne({name:"ProstoBober"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()