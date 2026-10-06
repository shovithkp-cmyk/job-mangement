import mongoose from "mongoose";
import dns from "dns";

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connection successfully");
    } catch (error) {
        console.log("connection failed");
        console.log(error.message);
        process.exit(1);
    }
};

export default dbconnect;