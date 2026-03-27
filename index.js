import express from 'express';
import router from './routes/index.js';
import mongoose from './db/index.js';

const app = express();
const port = process.env.Port;

// For read the Data which is come from Frontend__________
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware___________________________
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


export const checker = 'Checker'