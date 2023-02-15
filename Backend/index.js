const  connectMongo= require("./db")
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors({
  origin:'http://localhost:3000',
}))
connectMongo();

// app.get('/', (req, res) => {
//   res.send('Hello Saim!')
// })

app.use(express.json())
app.use('/api/notes',require('./routes/notes'))
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const express = require("express");
// // const db = require("./database");
// const authRouter = require("./routes/auth");

// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use("/api/auth", authRouter);

// app.listen(port, () => {
//   console.log(`Server started at http://localhost:${port}`);
// });

// _______________________________________________________________________


// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// router.get('/about', (req, res) => {
//     obj={
//         name: 'Google',
//         age:19
//     }
//     res.json(obj)
// });

// const app = express();
// app.use('/', router);

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });