import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI as string,)
       console.log("✅ Mongodb connected successfully");
    } catch(err) {
        console.error("❌ Mongodb connection failed:", err);
        throw err;
    }
}