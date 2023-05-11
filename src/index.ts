import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

// setting up the server
const app = express()
const port = process.env.PORT || 4000;

// basic middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({ msg: 'welcome to the app!' })
})

// listening for requests
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})