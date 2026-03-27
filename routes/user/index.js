import express from 'express';
import getUser from './get.js';
import postUser from './post.js';
import multer from 'multer'
import uploadData from './upload.js';
import path from 'path'
import { checker } from '../../index.js';

const userRouter = express.Router();

import { fileURLToPath } from 'url';

// Multer Start's__________________________________________

// recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../Public/images'));
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

// Multer instance
const upload = multer({ storage: storage });

// Route for file upload
userRouter.post('/upload', upload.array('file'), (req, res) => {
  res.status(202).send(req.file);
});

// Multer End's__________________________________________


userRouter.get('/', getUser)
userRouter.post('/', postUser)
userRouter.use('/', (req, res) => {
    console.log(`User Router`);
    res.send({status: 200, message: `user request`});
})

export default userRouter