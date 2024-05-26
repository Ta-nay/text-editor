import mongoose from "mongoose";
import 'dotenv/config';
const connection = async () => {
    const url = process.env.URL;

    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    }
    catch(err){
        console.log("Error in connecting to the database");
    }
}
export default connection;