import  mongoose  from "mongoose";



const Connection=async()=>{

try{
    const URL='mongodb://harry:harry@cluster0-shard-00-00.udpy8.mongodb.net:27017,cluster0-shard-00-01.udpy8.mongodb.net:27017,cluster0-shard-00-02.udpy8.mongodb.net:27017/BLOG-WEBSITE?ssl=true&replicaSet=atlas-p83kzp-shard-0&authSource=admin&retryWrites=true&w=majority' ;
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
    console.log('Database connected successfully');

}

catch(error){
    console.log("error while connecting to database",error)  ;
}






}


export default Connection ;