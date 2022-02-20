import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '20px 0 20px  0',
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: '100px',
        backgroundColor: 'white'
    },
    heading: {
        color: 'purple',
        fontSize: '45px',
        textShadow: "4px 4px 8px #d9d9d9",
        textDecoration: 'none',
    },

    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));