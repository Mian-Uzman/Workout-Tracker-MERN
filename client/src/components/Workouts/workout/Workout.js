import React from 'react';
import useStyles from "./styles";
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from "@material-ui/core/Divider";
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import { deleteWorkout } from '../../../actions/workouts';



const Workout = ({ workout, setCurrentId, setShowForm }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const editClick = () => {
        setCurrentId(workout._id);
        setShowForm(true);
    }

    return (
        <Card className={classes.card}>
            <div className={classes.content}>
                <Typography variant="h4">{workout.name}</Typography>
                <Typography variant="body2" color="textSecondary">{moment(workout.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.details}>
                <Divider className={classes.divider} light />
            </div>

            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">Reps: {workout.reps}</Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">Weight: {workout.weight}</Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">Sets: {workout.sets} </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">Total Volume: {workout.weight * workout.reps} </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteWorkout(workout._id))}><DeleteIcon fontSize="small" /> Delete</Button>
                <Button size="small" color="primary" onClick={() => editClick()}><EditIcon fontSize="small" /> Edit</Button>
            </CardActions>
        </Card>





    )
}

export default Workout;