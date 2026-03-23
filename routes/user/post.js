// import express from 'express';
// const postUser = express.Router();

const postUser = ('/', (req, res) => {
    const postedData = req.body;
    console.log(postedData);
    res.status(202).send(postedData);
})

export default postUser;