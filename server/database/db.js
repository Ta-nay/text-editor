import mongoose from "mongoose";
const connection = async () => {
    const url = `mongodb+srv://admin:JbRJ38hZ5JW7SBdI@cluster0.gnazixi.mongodb.net/google-docs`;

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