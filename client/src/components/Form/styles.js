import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        margin: '35px 0px 75px 0px',
        padding: theme.spacing(2),
        borderRadius: 15,
        maxWidth: '400px',
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.4)",

    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        borderRadius: 15,
        marginBottom: 10,
    },
    buttonClear: {
        borderRadius: 15,
    }
}));