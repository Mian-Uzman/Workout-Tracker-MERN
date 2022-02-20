import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createWorkout, updateWorkout } from '../../actions/workouts';

export default function Form({ currentId, setCurrentId }) {
    const workout = useSelector((state) => currentId ? state.workouts.find((p) => p._id === currentId) : null);
    const [workoutData, setWorkoutData] = useState({
        name: '',
        reps: '',
        sets: '',
        weight: ''

    })
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (workout) {
            setWorkoutData(workout);
        }
    }, [workout])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateWorkout(currentId, workoutData));
        }
        else {
            dispatch(createWorkout(workoutData));
        }
        clear();

    }
    const clear = () => {
        setCurrentId(null);
        setWorkoutData({
            name: '',
            reps: '',
            sets: '',
            weight: ''

        })
    }

    return (
        <Paper className={classes.paper} >
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>
                    {currentId ? 'Edit' : 'Add'} Workout
                </Typography>


                <TextField
                    name='name'
                    variant='outlined'
                    label='Name'
                    fullWidth
                    value={workoutData.name}
                    onChange={(e) => setWorkoutData({ ...workoutData, name: e.target.value })} />

                <TextField

                    name='reps'
                    variant='outlined'
                    label='Reps'
                    fullWidth
                    value={workoutData.reps}
                    onChange={(e) => setWorkoutData({ ...workoutData, reps: e.target.value })} />

                <TextField
                    name='weight'
                    variant='outlined'
                    label='Weight'
                    fullWidth
                    value={workoutData.weight}
                    onChange={(e) => setWorkoutData({ ...workoutData, weight: e.target.value })} />
                <TextField
                    name='sets'
                    variant='outlined'
                    label='Sets'
                    fullWidth
                    value={workoutData.sets}
                    onChange={(e) => setWorkoutData({ ...workoutData, sets: e.target.value })} />
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth>Submit</Button>
                <Button
                    className={classes.buttonClear}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}
