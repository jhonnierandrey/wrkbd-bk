import WorkoutModel from '../models/workoutModel.js';
import mongoose from 'mongoose';

// GET all workouts
const getWorkouts = async (req, res) => {
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts);
}

// GET a single workout
const getWorkoutById = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Workout not available' });
    }

    const workout = await WorkoutModel.findById(id);

    if (!workout) {
        return res.status(404).json({ error: 'Workout not available' });
    }

    res.status(200).json(workout);
}

// create a workout

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await WorkoutModel.create({
            title, load, reps
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Workout not available' });
    }

    const workout = await WorkoutModel.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(404).json({ error: 'Workout not available' });
    }

    res.status(200).json(workout);
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Workout not available' });
    }

    const workout = await WorkoutModel.findOneAndUpdate({ _id: id }, { ...req.body })

    if (!workout) {
        return res.status(404).json({ error: 'Workout not available' });
    }

    res.status(200).json(workout);
}

export {
    createWorkout,
    getWorkouts,
    getWorkoutById,
    deleteWorkout,
    updateWorkout
}