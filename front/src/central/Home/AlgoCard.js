import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'
import useTheme from '@mui/material/styles/useTheme'
import PropTypes from 'prop-types';
import { withPather } from 'react-pather';



function OutlinedCard({ pather, height, algo }) {
    const theme = useTheme()

    const navigate = useNavigate()

    function openAlgoView(id) {
        navigate(pather.reverse(pather.algoView, { id }));
    }

    function formatDescription(description) {
        if (!!description && description.length > 130) {
            let cutDescription = description.slice(0, 130)
            const lastIndexOfSpace = cutDescription.lastIndexOf(' ')

            if (
                lastIndexOfSpace === -1 ||
                lastIndexOfSpace === cutDescription.length - 1
            )
                return `${cutDescription}...`

            cutDescription = cutDescription.slice(0, lastIndexOfSpace)

            return `${cutDescription} ...`
        }

        return description
    }

    return (
        <Box>
            <Card
                variant="outlined"
                style={{
                    borderRadius: '15px',
                    borderColor: theme.palette.primary.main,
                    cursor: 'pointer',
                }}
                sx={{
                    height: '100%',
                    backgroundColor: theme.palette.background.default,
                    '&:hover': {
                        transition: 'background-color 1s',
                        backgroundColor: theme.palette.primary.main,
                    },
                }}
                onClick={() => openAlgoView(algo.id)}
            >
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>{algo.name}</div>
                            <Tooltip
                                title="likes/dislikes"
                                placement="top"
                                arrow
                            >
                                <div>
                                    {algo.likes}/{algo.dislikes}
                                </div>
                            </Tooltip>
                        </div>
                    </Typography>
                    <Typography variant="h5" component="div">
                        {algo.user.nickname}
                    </Typography>
                    <Typography
                        sx={{ mt: 1.5, mb: 1.5 }}
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography sx={{ mt: 0.5 }} color="text.secondary">
                            {algo.created_at.slice(0, 10)}
                        </Typography>
                        <Typography>
                            <Chip
                                label="Beginner"
                                variant="outlined"
                                color="success"
                                style={{ cursor: 'pointer' }}
                            />
                        </Typography>
                    </Typography>
                    <Typography variant="body2">
                        {formatDescription(algo.description)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div style={{ width: '100%' }}>
                        {algo.tags &&
                            algo.tags.map((tag, index) => (
                                <Chip
                                    key={tag.id}
                                    label={tag.name}
                                    size="small"
                                    style={{
                                        backgroundColor: tag.color,
                                        margin: '2px',
                                        cursor: 'pointer',
                                    }}
                                />
                            ))}
                    </div>
                </CardActions>
            </Card>
        </Box>
    )
}

OutlinedCard.propTypes = {
    pather: PropTypes.object.isRequired,
}

export default withPather()(OutlinedCard);