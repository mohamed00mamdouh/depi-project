const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud_db', {
});

mongoose.connection.on("connected", () => {
    console.log("connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
    
});

module.exports=mongoose;

// const connectedToMongoDB= async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/crud_db')
//         console.log('Connected to MongoDB');
        
//     } catch (error) {
//         console.log(`MongoDB connection error:${error}`);
        
//     }
// }

// module.exports = {mongoose, connectedToMongoDB}
