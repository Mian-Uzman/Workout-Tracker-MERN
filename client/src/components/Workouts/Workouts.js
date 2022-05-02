import React from 'react';
import Workout from './workout/Workout';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from "./styles";
import { useSelector } from 'react-redux';;


export default function Workouts({ setCurrentId, setShowForm }) {
    const workouts = useSelector((state) => state.workouts);
    const userWorkouts = workouts.filter(workout => workout.userName === JSON.parse(localStorage.getItem('profile')).result.googleId);
    const classes = useStyles();
    //console.log(workouts);
    return (
        !workouts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {userWorkouts.map((workout) => (
                    <Grid key={workout._id} item xs={12} sm={6} md={6}>
                        <Workout workout={workout} setCurrentId={setCurrentId} setShowForm={setShowForm} />
                    </Grid>
                ))}
            </Grid>

        )
    )
}
