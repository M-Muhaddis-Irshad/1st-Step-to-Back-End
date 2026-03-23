import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// console.log(`DB NAME = ${process.env.DB_NAME}`)
// console.log(`DB PASSWORD = ${process.env.DB_PASSWORD}`)
// console.log(`DB USER = ${process.env.DB_USER}`)

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@practice-cluster.clujnmz.mongodb.net/?appName=${process.env.DB_NAME}`;

// const url = `mongodb+srv://Muhaddis:muhaddisDatabase123@practice-cluster.clujnmz.mongodb.net/?appName=Practice-Cluster`;

mongoose.connect(url);

export default mongoose;