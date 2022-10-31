import '../../../styles/Home.css'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'
import { withGraphQLService } from '../../../di/hoc'
import { useQuery } from '@apollo/client'
import Chip from '@mui/material/Chip'
import Loader from '../../common/Loader'
import PropTypes from 'prop-types'
import useTheme from '@mui/material/styles/useTheme'
import Grid from '@mui/material/Grid'

function FilterSection({ graphqlService, selected, modifyOption }) {
    const theme = useTheme()

    const { loading, error, data } = useQuery(graphqlService.queryAllGroups())

    if (loading) return <Loader boxHeight="200px" />

    if (error) {
        console.log(error)
    }

    function isChecked(tagName) {
        if (!selected.tags) return false
        return selected.tags.includes(tagName.toLowerCase().replace(' ', '_'))
    }

    function getAdditionalStyle(name, color) {
        let is = isChecked(name)
        let res = {}

        if (is) {
            res['background-color'] = color
            res['color'] = 'white'
        } else {
            res['color'] = color
        }

        return res
    }

    return (
        <div>
            <Grid
                container
                rowSpacing={2}
                spacing={2}
                sx={{
                    justifyContent: 'center',
                    [theme.breakpoints.down('md')]: {
                        marginTop: '1%',
                    },
                }}
            >
                {data &&
                    data.groups &&
                    data.groups.map(
                        (item) =>
                            item.tags.length > 0 && (
                                <Grid
                                    item
                                    key={item.id}
                                    lg={12}
                                    md={12}
                                    sm={4}
                                    xs={6}
                                    sx={{ width: '100%', height: '100%' }}
                                >
                                    <Accordion
                                        defaultExpanded={true}
                                        sx={{
                                            borderRadius: '15px !important',
                                            border: '1px solid',
                                            borderColor:
                                                theme.palette.primary.main,
                                            marginBottom: '10px',
                                            height: '100%',
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                <IconButton>
                                                    <ExpandMoreIcon
                                                        style={{
                                                            color: theme.palette
                                                                .primary.main,
                                                        }}
                                                    />
                                                </IconButton>
                                            }
                                            aria-controls={`panel-${item.id}-content`}
                                            id={item.id}
                                        >
                                            <Typography>{item.name}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            sx={{ height: '100%' }}
                                        >
                                            {item.tags.map((tag) => (
                                                <Chip
                                                    key={tag.id}
                                                    label={tag.name}
                                                    size="small"
                                                    sx={{
                                                        ...getAdditionalStyle(
                                                            tag.name,
                                                            tag.color
                                                        ),
                                                        border: `1px solid ${tag.color}`,
                                                        marginRight: '7px',
                                                        marginTop: '7px',
                                                        cursor: 'pointer',
                                                        '&:hover': !isChecked(
                                                            tag.name
                                                        )
                                                            ? {
                                                                  backgroundColor: `${tag.color} !important`,
                                                                  color: 'white',
                                                              }
                                                            : {
                                                                  backgroundColor:
                                                                      'transparent !important',
                                                                  color: tag.color,
                                                              },
                                                    }}
                                                    variant="outlined"
                                                    clickable
                                                    onClick={() => {
                                                        modifyOption({
                                                            tags: tag.name,
                                                        })
                                                    }}
                                                />
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                            )
                    )}
            </Grid>
        </div>
    )
}

FilterSection.propTypes = {
    graphqlService: PropTypes.object.isRequired,
}

export default withGraphQLService()(FilterSection)
