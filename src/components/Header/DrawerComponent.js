import {
    List, Box, Drawer, ListItem, ListItemText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from '../../Link'



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#c0c2ca59",
    },
    paper: {
        backgroundColor: theme.palette.primary.main
    },
}));

const ListDrawer = ({ toggleDrawer, nav_items, classes }) => {
    const width = 250
    return (
        <Box
            sx={{ width: width }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List sx={{ marginTop: 2 }}>
                {nav_items.map((text, _) => (
                    <ListItem key={text}>
                        <ListItemText
                        >
                            <Link
                                href={text}
                                classes={classes}
                                sx={{ my: 2, display: 'block', }}
                                underline="none"
                            >
                                {text}
                            </Link>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

const DrawerComponent = ({ open, toggleDrawer, nav_items, classesLink }) => {
    const classes = useStyles();
    const anchor = 'left';
    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClose={toggleDrawer(false)}
            classes={classes}
            BackdropProps={{
                sx: { filter: 'blur(2px)' }
            }}
        >
            <ListDrawer
                toggleDrawer={toggleDrawer}
                nav_items={nav_items}
                classes={classesLink}
            />
        </Drawer >
    )
}

export default DrawerComponent;