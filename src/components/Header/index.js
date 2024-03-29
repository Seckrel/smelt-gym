import { useState } from 'react';
import {
    AppBar, Container, Toolbar, Typography,
    Box
} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComponent from './DrawerComponent';
import Link from '../../Link'
import { makeStyles } from '@mui/styles';
import { NAV_ITEMS } from '../../constants/NAV_ITEMS';
import { camelCase } from '../../utils/utils';


const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        fontSize: theme.typography.h6.fontSize,
        letterSpacing: '0.6rem',
        '&:hover': {
            color: '#747b9b',
            letterSpacing: '0.65rem',
            lineHeight: '2rem',
        }
    },
}));

export default function Header() {
    // const NAV_ITEMS = ['Products', 'Pricing', 'Blog'];
    const [drawerState, setDrawerState] = useState(false);
    const classes = useStyles();
    const styleLogo = {
        letterSpacing: '0.9rem'
    }
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState(open);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href="/" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, ...styleLogo, color: 'black' }}
                        >
                            {process.env.LOGO}
                        </Typography>
                    </Link>

                    {/* Code for mobile nav and Logo */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <DrawerComponent
                            open={drawerState} toggleDrawer={toggleDrawer}
                            nav_items={NAV_ITEMS}
                            classesLink={classes}
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, ...styleLogo }}
                    >
                        {process.env.LOGO}
                    </Typography>

                    {/* Code for desktop nav */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row-reverse' }}>
                        {NAV_ITEMS.map((page) => (
                            <Link
                                href={camelCase(page)}
                                key={page}
                                sx={{ my: 2, display: 'block', }}
                                classes={classes}
                                underline="none"
                            >
                                {page}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}