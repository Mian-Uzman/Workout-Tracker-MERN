import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '75px',
        backgroundColor: '#003542',
        background: 'linear-gradient(45deg,#005761 30%,#00a5b8 90%)',

    },
    heading: {
        color: 'white',
        fontSize: '35px',
        textDecoration: 'none',
        cursor: 'pointer',
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
        color: 'white',

    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },

}));