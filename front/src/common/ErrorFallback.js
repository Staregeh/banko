import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    boxStyles: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '300px',
    },
});

const ErrorFallback = ({error, resetErrorBoundary}) => {

    const classes = useStyles();

    return (
        <Box className={classes.boxStyles}>
            <Box sx={{m: 2}}>
                { process.env.NODE_ENV === 'development'
                ?
                    <>
                        <Typography variant="h4" sx={{mb: 1}}>Error</Typography>
                        <Box>
                            <pre style={{whiteSpace: 'pre-wrap'}}>
                                {error.message}
                            </pre>
                        </Box>
                    </>
                :
                    <>
                        <Typography variant="h4" sx={{mb: 1}}>Ooops, something went wrong :(</Typography>
                        <Typography variant="h6">Site is unavailable, try later</Typography>
                    </>
                }
                <Button variant="contained" onClick={resetErrorBoundary} sx={{mt: 2}}>Try again</Button>
            </Box>
        </Box>
    )
}

export default ErrorFallback;