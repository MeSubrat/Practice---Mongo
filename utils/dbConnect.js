const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://MeSubrat:Subrat%402025@cluster0.2pxte.mongodb.net/";
const client = new MongoClient(url);
const database = "e-commerce"

async function dbConnect()
{
    const result = client.connect();
    const response = (await result).db(database);
    return response.collection('Products');
}
module.exports = dbConnect