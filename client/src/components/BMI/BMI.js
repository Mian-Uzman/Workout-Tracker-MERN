import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from "./styles";

const BMI = () => {
    const [bmiData, setBmiData] = useState({
        weight: '',
        height: '',
    });
    const classes = useStyles();


    return (
        <Paper className={classes.paper} >
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>
                    Calculate BMI
                </Typography>


                <TextField
                    name='weight'
                    variant='outlined'
                    label='weight'
                    fullWidth
                    value={bmiData.weight}
                    onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })} />

                <TextField

                    name='height'
                    variant='outlined'
                    label='Height'
                    fullWidth
                    value={bmiData.height}
                    onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })} />


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

export default BMI