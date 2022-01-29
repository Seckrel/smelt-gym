import {
    List, Box, Divider, Drawer, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';

const ListDrawer = ({ toggleDrawer, nav_items }) => {
    const width = 250
    return (
        <Box
            sx={{ width: width }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {nav_items.map((text, _) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

const DrawerComponent = ({ open, toggleDrawer, nav_items }) => {
    const anchor = 'left';
    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClose={toggleDrawer(false)}
        >)
            <ListDrawer
                toggleDrawer={toggleDrawer}
                nav_items={nav_items}
            />
        </Drawer>
    )
}

export default DrawerComponent;