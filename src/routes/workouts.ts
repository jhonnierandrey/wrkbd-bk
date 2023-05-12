import express from 'express';
import WorkoutModel from '../models/workoutModel.js';

const router = express.Router()

// Retreive all workouts
router.get('/', (req, res) => {
    res.json({ msg: 'GET all workouts' })
})

// Retreive single workout
router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single workout' })
})

// create a new workout
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await WorkoutModel.create({
            title, load, reps
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a workout' })
})

// update a workout
router.patch('/:id', (req, res) => {
    res.json({ msg: 'UPDATE a workout' })
})

export default router;