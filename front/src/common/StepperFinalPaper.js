import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        display: 'flex', 
        borderRadius: '15px', 
        backgroundColor: '#3F3F3F',
    },
}));

function StepperFinalPaper({ message, handle, btnTitle }) {

    const classes = useStyles();

    return (
        <Paper square elevation={0} sx={{p: 3}} className={classes.paperStyle}>
            <Typography sx={{ mt: 0.5, mr: 1, fontSize: '18px' }}>{message}</Typography>
            <Button onClick={handle} sx={{ mr: 1, ml: 'auto' }} variant="outlined">
                {btnTitle}
            </Button>
        </Paper>
    )
}

export default StepperFinalPaper;