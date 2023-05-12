import express from 'express';
import dotenv from 'dotenv';
import workoutRouter from './routes/workouts';

dotenv.config()

// setting up the server
const app = express()
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({ msg: 'welcome to the app!' })
})

app.use('/api/workouts', workoutRouter);

// listening for requests
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})