import express from 'express';

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
router.post('/', (req, res) => {
    res.json({ msg: 'POST a single workout' })
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