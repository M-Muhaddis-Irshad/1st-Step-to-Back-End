import express from 'express';
import userRouter from './user/index.js';
import postsRouter from './posts/index.js';

const router = express.Router();

// Auth EndPoint(API)_________________________________
router.use('/user', userRouter);

// Posts EndPoint(API)_________________________________
router.use('/posts', postsRouter);

router.use('/', (req, res) => {
    console.log(`Router Request`);
    res.send({status: 200, message: `Router request`});
})

export default router