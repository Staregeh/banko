import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Divider, Link } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'

const pages = ['PrePro', 'DeLang', 'About']
const lorem = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet']

const Footer = () => {
    const theme = useTheme()

    return (
        <Box component="footer" pt={4}>
            <Box>
                <Divider
                    style={{ backgroundColor: theme.palette.primary.main }}
                />
            </Box>
            <Grid
                container
                maxWidth="xl"
                justifyContent="space-between"
                py={3}
                px={{ md: 10, xs: 4 }}
                spacing={2}
            >
                {/* Logo */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" color={theme.palette.primary.main}>
                        Logo
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Typography>
                </Grid>
                {/* Other */}
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        {/* Menu */}
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                            >
                                Menu
                            </Typography>
                            <Box>
                                {pages.map((page) => (
                                    <Link
                                        key={page}
                                        href="#"
                                        underline="hover"
                                        sx={{
                                            mt: 1,
                                            color: 'white',
                                            display: 'block',
                                        }}
                                    >
                                        {page}
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                        {/* Links */}
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                            >
                                Useful links
                            </Typography>
                            <Box>
                                {lorem.map((page) => (
                                    <Link
                                        key={page}
                                        href="#"
                                        underline="hover"
                                        sx={{
                                            mt: 1,
                                            color: 'white',
                                            display: 'block',
                                        }}
                                    >
                                        {page}
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                        {/* Contact */}
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                            >
                                Contact
                            </Typography>
                            <Box>
                                {lorem.map((page) => (
                                    <Link
                                        key={page}
                                        href="#"
                                        underline="hover"
                                        sx={{
                                            mt: 1,
                                            color: 'white',
                                            display: 'block',
                                        }}
                                    >
                                        {page}
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box p={1}>
                <Typography variant="body2" align="center">
                    © 2022 Banko. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
