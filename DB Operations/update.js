const dbConnect = require('./utils/dbConnect');

const update = async ()=>{
    const db = dbConnect();
    const result = (await db).updateMany(
        {name:'Samsung s24 FE'},
        {
            $set:{name:'Iphone 16 pro max',price:150000,brand:'Apple'}
        }
    )
    if((await result).modifiedCount){
        console.log('Data modified!!');
    }
}
update();