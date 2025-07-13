const dbConnect = require('./utils/dbConnect')
// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('Products');
//     let response = await collection.find({}).toArray();
//     console.log('Database response: ',response);
// }
// getData();

//Get data using async-await method [Modern Method]
// async function dbConnect()
// {
//     const result = client.connect(); 
//     const response = (await result).db(database);
//     return response.collection('Products');
// }

//Get data using .then method
// dbConnect().then((response)=>{
//     console.log(response.find().toArray().then((data)=>{
//         console.log(data); 
//     }));
// })
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();