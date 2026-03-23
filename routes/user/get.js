// import express from 'express';
// const getUser = express.Router();

const getUser = ('/', (req, res) => {
    res.send({status: 404, message: `request on get user`})
})

export default getUser;