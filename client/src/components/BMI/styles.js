import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        margin: '10px 0px 40px 0px',
        padding: theme.spacing(2),
        borderRadius: 20,
        maxWidth: '400px'
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
        borderRadius: 20,
        marginBottom: 10,
    },
    buttonClear: {
        borderRadius: 20,
    }
}));