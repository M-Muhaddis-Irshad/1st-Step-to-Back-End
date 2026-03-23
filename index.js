import express from 'express';
import router from './routes/index.js';
import mongoose from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' })

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router)

mongoose.connection.on('open', () => {
    console.log('MongoDB Connect Succesfully✅')
})

mongoose.connection.on('error', err => {
    console.log(`MongooDB Connection Error: ${err}`)
})

app.listen(port, () => {
    console.log(`Local host run on ${port}`)
})