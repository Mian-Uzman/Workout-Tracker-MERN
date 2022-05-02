import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    name: String,
    reps: {
        type: Number,
        default: 0
    },
    weight: {
        type: Number,
        default: 0
    },
    sets: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostWorkout = mongoose.model('PostWorkout', postSchema);

export default PostWorkout;