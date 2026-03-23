import express from 'express';
import getUser from './get.js';
import postUser from './post.js';

const userRouter = express.Router();

userRouter.get('/', getUser)
userRouter.post('/', postUser)

userRouter.use('/', (req, res) => {
    console.log(`User Router`);
    res.send({status: 200, message: `user request`});
})

export default userRouter