import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Link, useLocation } from 'react-router-dom'
import useTheme from '@mui/material/styles/useTheme'
import { useNavigate } from 'react-router-dom'
import { default as getHeaderTabs } from '../../utils/HeaderTabs'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { margin } from '@mui/system'
import { v4 as uuidv4 } from 'uuid'
import CustomizedMenus from './CustomizedMenu'

const drawerWidth = 240

const Header = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const location = useLocation()

    const jwt = useSelector((state) => state.jwt.value)

    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [headerTabs, setHeaderTabs] = useState(getHeaderTabs(jwt))

    useEffect(() => {
        setHeaderTabs(getHeaderTabs(jwt))
    }, [jwt])

    const path = location.pathname

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    function getPageName(page) {
        if (typeof page === 'string') return page
        else if (typeof page === 'object') {
            if (page.name) {
                return page.name
            }
        }
    }

    // TODO: rebuild work with paths via names instead of exact routes
    function getPagePath(page) {
        if (typeof page === 'string') return `/${page.trim().toLowerCase()}`
        else if (typeof page === 'object') {
            if (page.route) {
                return `/${page.route.trim().toLowerCase()}`
            }
        }
    }

    function goTo(page) {
        navigate(getPagePath(page))
    }

    const complexTabs = headerTabs.filter(
        (i) => i.hasOwnProperty('menuItems') && i?.menuItems.length > 0
    )
    const simpleTabs = headerTabs.filter((i) => !i.hasOwnProperty('menuItems'))

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            textDecoration: 'None',
                            fontWeight: 'bold',
                            paddingLeft: '5px',
                            paddingRight: '5px',
                            color: theme.palette.primary.main,
                            fontSize: '40px',
                        }}
                    >
                        Banko
                    </Link>
                </div>
            </Typography>
            <Divider />
            <List>
                {simpleTabs.map((page, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            onClick={() => goTo(page)}
                            key={index}
                        >
                            <ListItemText primary={getPageName(page)} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {complexTabs.map((page) =>
                    page?.menuItems.map((menuItem, i) => (
                        <ListItem key={uuidv4()} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    goTo(menuItem)
                                }}
                                key={i}
                                sx={{ textAlign: 'center' }}
                            >
                                <ListItemText primary={menuItem?.name} />
                            </ListItemButton>
                        </ListItem>
                    ))
                )}
            </List>
        </Box>
    )

    const container = window.document.body

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                component="nav"
                style={{
                    borderBottom: '1px solid',
                    borderColor: theme.palette.primary.main,
                }}
            >
                <Toolbar style={{ minHeight: '100%' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container spacing={2}>
                        <Grid item md={4} sm={5}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: {
                                        xs: 'none',
                                        sm: 'flex',
                                        md: 'flex',
                                    },
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 'auto',
                                    height: 'auto',
                                }}
                            >
                                <div
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'left',
                                        paddingTop: '5px',
                                        marginLeft: '12%',
                                    }}
                                >
                                    <Link
                                        to="/"
                                        style={{
                                            textDecoration: 'None',
                                            fontWeight: 'bold',
                                            paddingLeft: '5px',
                                            paddingRight: '5px',
                                            color: theme.palette.primary.main,
                                        }}
                                    >
                                        <img
                                            style={{
                                                width: '75%',
                                                height: 'auto',
                                            }}
                                            src="/images/Banko.png"
                                            alt="Logo"
                                        />
                                    </Link>
                                </div>
                            </Typography>
                        </Grid>
                        <Grid item md={8} sm={7}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: {
                                        xs: 'none',
                                        sm: 'flex',
                                        md: 'flex',
                                    },
                                    justifyContent: 'flex-end',
                                }}
                            >
                                {headerTabs.map((page, index) =>
                                    page.hasOwnProperty('menuItems') &&
                                    page?.menuItems.length > 0 ? (
                                        <CustomizedMenus
                                            page={page}
                                            key={index}
                                            goTo={goTo}
                                        />
                                    ) : (
                                        <Box
                                            key={index}
                                            onClick={() => goTo(page)}
                                            sx={{
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                paddingLeft: '15px',
                                                paddingRight: '15px',
                                                color: 'white',
                                                cursor: 'pointer',
                                                ...(path === getPagePath(page)
                                                    ? {
                                                          backgroundColor:
                                                              theme.palette
                                                                  .primary.main,
                                                      }
                                                    : {}),
                                                '&:hover': {
                                                    backgroundColor:
                                                        theme.palette.primary
                                                            .main,
                                                },
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: 'white',
                                                    fontSize: '19px',
                                                }}
                                            >
                                                {getPageName(page)}
                                            </span>
                                        </Box>
                                    )
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}

export default Header
