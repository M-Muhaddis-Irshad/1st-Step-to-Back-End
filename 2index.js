// import express from "express";

// const app = express();

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

// const port = 3000

// // user = {
// //     name: "Muhaddis",
// //     age: 18,
// //     field: "Programming"
// // }

// const user = [
//     { "id": 1, "name": "Jason Miller", "email": "jason1@test.com", "role": "admin" },
//     { "id": 2, "name": "Jason Chen", "email": "jason2@test.com", "role": "user" },
//     { "id": 3, "name": "Jason Reed", "email": "jason3@test.com", "role": "editor" },
//     { "id": 4, "name": "Jason Bell", "email": "jason4@test.com", "role": "user" },
//     { "id": 5, "name": "Jason Ward", "email": "jason5@test.com", "role": "admin" },
// ];


// const showUsers = (obj) => {
//     app.get('/user', (req, res) => {
//         res.send(obj);
//         console.log(obj)
//     })
// }

// app.get('/', (req, res) => {
//     res.send("API Work's perfectly");
//     console.log("Get request work's perfectly")
// })

// app.post('/login', (req, res) => {
//     const postedData = req.body;
//     user.push(postedData);
//     res.status(202).send(user)
//     // res.status(202).send("Data Added Successfully" + user)
//     // res.send(req.body);
//     // console.log(postedData);
//     retriveObj(user)
//     showUsers(user)
// })

// app.delete('/', (req, res) => {
//     res.send("Data Deleted Successfully");
// })

// app.put('/', (req, res) => {
//     res.send("Data Updated Successfully");
// })

// const retriveObj = (object) => {
//     object.map((value, i) => {
//         // console.log(`Object recieved ${value[i]}`)
//         console.log(value)
//     })
//     // console.log(object)
// }

// app.post('/signup', (req, res) => {
//     res.status(201).send("Test Status")
//     console.log(req.body)
// })

// app.listen(port, () => {
//     console.log(`Express run on ${port}`);
// })

// EXTRA CODE FROM MAIN INDEX__________________________________________________________

// app.use('/api', (req, res) => {
//     // res.send(`middleware worked`)
//     console.log(`Testing Middleware✅`)
// })

// app.get('/', (req, res) => {
//     res.send('Data Get✅')
//     console.log('Data Get✅')
// })

// app.post('/', (req, res) => {
//     res.send('Data Get✅')
//     console.log('Data Get✅')
// })
