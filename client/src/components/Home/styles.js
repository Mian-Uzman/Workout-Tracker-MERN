import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 10,
        margin: '20px 0 20px  0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100px',
        backgroundColor: 'white'
    },
    heading: {
        color: 'purple',
        fontSize: '45px',
        textShadow: "4px 4px 8px #d9d9d9",

    },
    image: {
        marginLeft: '70px',
    },
    buttonAdd: {
        borderRadius: 15,
        backgroundColor: '#005761 ',
        color: 'white',
        height: '75px',
        width: '250px',
        fontSize: '20px',
        zIndex: '100'
    }
}));