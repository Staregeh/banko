import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as ArrowSVG } from '../../resources/double-up-arrow.svg'
import useTheme from '@mui/material/styles/useTheme'

function ScrollUp() {
    const theme = useTheme()

    return (
        <ScrollToTop
            smooth
            component={
                <ArrowSVG
                    width="50"
                    height="50"
                    fill={theme.palette.primary.main}
                />
            }
            style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                bottom: '7%',
                right: '7%',
            }}
        />
    )
}

export default ScrollUp
