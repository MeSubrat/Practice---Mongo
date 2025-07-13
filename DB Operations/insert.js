const dbConnect = require('../utils/dbConnect');


const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertOne(
        {name:'Samsung s24 FE',brand:'Samsung',price:'30000'}
    )
    if(result.acknowledged){
        console.log('Data inserted');
    }

}
insert();