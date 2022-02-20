import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        maxWidth: 400,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        borderRadius: 20,
    },
    content: {
        textAlign: "left",
        padding: 20,
        color: 'purple',
        textShadow: "2px 2px 8px #d9d9d9",
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'purple',
    },
    divider: {
        margin: 20
    },


    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});