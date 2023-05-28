import express from 'express';
import { createWorkout, getWorkouts, getWorkoutById, deleteWorkout, updateWorkout } from '../controllers/workoutController.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router()
router.use(requireAuth);

// Retreive all workouts
router.get('/', getWorkouts);

// Retreive single workout
router.get('/:id', getWorkoutById);

// create a new workout
router.post('/', createWorkout);

// delete a workout
router.delete('/:id', deleteWorkout)

// update a workout
router.patch('/:id', updateWorkout)

export default router;