import Masonry from '@mui/lab/Masonry'
import Box from '@mui/material/Box'
import OutlinedCard from './AlgoCard'
import { useQuery } from '@apollo/client'
import { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import { withGraphQLService } from '../../../di/hoc'
import { PER_PAGE, MAX_PAGINATION_TABS } from '../../../utils/constants'
import Fade from '@mui/material/Fade'
import NoResults from './NoResults'
import Loader from '../../common/Loader'
import PropTypes from 'prop-types'
import useTheme from '@mui/material/styles/useTheme'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { usePather } from 'react-pather'

function AlgoResultSection({ graphqlService, selected, prevSelectedOptions }) {
    const pather = usePather()
    const navigate = useNavigate()
    const theme = useTheme()
    const user = useSelector((state) => state.user.value)

    const page = +(pather.query.get('page') || 1)

    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const { loading, error, data } = useQuery(
        graphqlService.queryFilteredAlgorithms(),
        {
            variables: {
                selected: {
                    page: page,
                    algosPerPage: PER_PAGE,
                    tags: selected.tags,
                    text: selected.text,
                },
            },
        }
    )

    if (loading) return <Loader boxHeight="200px" />

    if (error) {
        console.log(error)
    }

    let algorithms = data.filteredAlgorithms.algorithms
    let length = data.filteredAlgorithms.allAlgosLength / PER_PAGE
    let algos_len = data.filteredAlgorithms.algorithms.length

    if (length > MAX_PAGINATION_TABS) length = MAX_PAGINATION_TABS

    function changePage(event, value) {
        if (value === 1) navigate(pather.current)
        else navigate(`${pather.current}?page=${value}`)
    }

    return (
        <Box
            sx={{ width: '100%', height: '100%' }}
            style={{ overflow: 'hidden' }}
        >
            <Fade in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                <Masonry columns={{ xs: 2, sm: 3, md: 3, lg: 4 }} spacing={1}>
                    {algorithms && algorithms.length > 0 ? (
                        algorithms.map((item, index) =>
                            index % 2 === 0 ? (
                                <OutlinedCard
                                    key={index}
                                    algo={item}
                                    height={randomIntFromInterval(210, 230)}
                                />
                            ) : (
                                <OutlinedCard
                                    key={index}
                                    algo={item}
                                    height={randomIntFromInterval(240, 270)}
                                />
                            )
                        )
                    ) : (
                        <NoResults />
                    )}
                </Masonry>
            </Fade>
            {length > 1 && (
                <Pagination
                    page={page}
                    onChange={changePage}
                    style={{
                        marginTop: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    count={Math.ceil(length)}
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            style={{
                                color: theme.palette.primary.main,
                            }}
                            size="large"
                            variant="outlined"
                            shape="circular"
                        />
                    )}
                />
            )}
        </Box>
    )
}

AlgoResultSection.propTypes = {
    graphqlService: PropTypes.object.isRequired,
}

export default withGraphQLService()(AlgoResultSection)
