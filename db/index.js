import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// console.log(`DB NAME = ${process.env.DB_NAME}`)
// console.log(`DB PASSWORD = ${process.env.DB_PASSWORD}`)
// console.log(`DB USER = ${process.env.DB_USER}`)
const password = encodeURIComponent(process.env.DB_PASSWORD);

const url = `mongodb+srv://${process.env.DB_USER}:${password}@practice-cluster.clujnmz.mongodb.net/?appName=${process.env.DB_NAME}`;

mongoose.connect(url);

export default mongoose;