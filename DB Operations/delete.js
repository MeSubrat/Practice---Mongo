const dbConnect = require('../utils/dbConnect');



const deleteData = async ()=>{
    // console.log('Delete function called!!');
    const data = await dbConnect();
    const result = await data.deleteMany({name:'Iphone 16 pro max'})
    console.log(result);
    if(result.acknowledged){
        console.log('Record deleted successfully!!');
    }

}
deleteData();