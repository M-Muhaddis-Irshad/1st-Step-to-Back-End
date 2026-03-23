import express from 'express';
import getPosts from './getPost.js';

const postsRouter = express.Router();

postsRouter.get('/', getPosts)

export default postsRouter;