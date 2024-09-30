import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(`Error cpnnection to mongoDB: ${error.message}`)
        process.exit(1)
    }
}

export default connectMongoDB;
