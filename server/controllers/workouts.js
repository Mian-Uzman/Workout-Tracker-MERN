import mongoose from "mongoose";
import PostWorkout from "../models/postWorkout.js";


export const getWorkouts = async (req, res) => {
    try {

        const postWorkouts = await PostWorkout.find();
        res.status(200).json(postWorkouts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createWorkout = async (req, res) => {

    const workout = req.body;
    console.log(workout)
    const newWorkout = await PostWorkout(workout);
    console.log(newWorkout)
    try {
        await newWorkout.save();
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateWorkout = async (req, res) => {
    const { id: _id } = req.params;
    const workout = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedWorkout = await PostWorkout.findByIdAndUpdate(_id, { ...workout, _id }, { new: true });
    res.json(updatedWorkout);
}


export const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostWorkout.findByIdAndRemove(id);

    res.json({ message: 'Post Deleted successfully' })
}