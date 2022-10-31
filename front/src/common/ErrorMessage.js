import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function ErrorMessage(props) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: props.height ? props.height : 'auto' }}
        >
            <Typography variant={props.variant}>
                {props.message} :&#40;
            </Typography>
        </Box>
    )
}

export default ErrorMessage
