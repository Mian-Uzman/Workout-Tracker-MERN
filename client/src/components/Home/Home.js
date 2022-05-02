import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import Workouts from '../Workouts/Workouts';
import Form from '../Form/Form';
import useStyles from "./styles";
import { useDispatch } from 'react-redux';
import { getWorkouts } from "../../actions/workouts";

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWorkouts());
    }, [currentId, dispatch]);

    return (
        <>
            <Container>
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '20vh' }}
                >
                    <Grid item xs={12}>
                        {showForm ? (<Form currentId={currentId} setCurrentId={setCurrentId} />) : (<Button className={classes.buttonAdd} variant="contained" onClick={() => setShowForm(true)}>Add Workout</Button>)}
                    </Grid>

                </Grid>

            </Container >
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={2}>
                        <Grid item xs={12}>
                            <Workouts setCurrentId={setCurrentId} setShowForm={setShowForm} />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
        </>
    )
}

export default Home