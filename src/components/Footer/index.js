import {
    AppBar, Container,
    CardMedia, Grid, Box, List,
    ListItem, Divider
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import Link from '../../Link';
import { NAV_ITEMS } from '../../constants/NAV_ITEMS';
import { camelCase } from "../../utils/utils";


const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.contrastText,
        fontSize: theme.typography.h6.fontSize,
        letterSpacing: '0.6rem',
        '&:hover': {
            color: '#747b9b',
            letterSpacing: '0.65rem',
            lineHeight: '2rem',
        }
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <AppBar position="static"
            sx={{
                top: 'auto',
                bottom: 0,
                py: 2,
                height: 'auto',
            }}
            component="footer"
        >
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <CardMedia
                                sx={{ boxShadow: 2, borderRadius: '2px', border: 'none' }}
                                component="iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14133.423120749852!2d85.36593638893119!3d27.67539667488123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a13269174b9%3A0x8b9583c158c7f911!2sGatthaghar%2C%20Madhyapur%20Thimi%2044600!5e0!3m2!1sen!2snp!4v1643636359854!5m2!1sen!2snp"
                                title="Map"
                                width={"600px"}
                                height={"450px"}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box display='flex' justifyContent={'center'} alignItems={'center'} height="100%">
                            <List>
                                {NAV_ITEMS.map((page, _) => (
                                    <ListItem key={page}>
                                        <Link
                                            href={camelCase(page)}
                                            key={page}
                                            sx={{ my: 2, display: 'block', fontFamily: ['sans-serif'].join(',') }}
                                            classes={classes}
                                            underline="none"
                                        >
                                            {page}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        Copyright © 2020. All rights reserved.
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    )
}