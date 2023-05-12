import express from 'express';
import { createWorkout, getWorkouts, getWorkoutById } from '../controllers/workoutController.js';

const router = express.Router()

// Retreive all workouts
router.get('/', getWorkouts);

// Retreive single workout
router.get('/:id', getWorkoutById);

// create a new workout
router.post('/', createWorkout);

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a workout' })
})

// update a workout
router.patch('/:id', (req, res) => {
    res.json({ msg: 'UPDATE a workout' })
})

export default router;