const uploadData = (req, res) => {
    console.log(req.file)
    res.status(201).send(req.file)
}

export default uploadData