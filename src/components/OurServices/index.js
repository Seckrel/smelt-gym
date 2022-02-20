import {
    Container, Grid, Typography,
    Box
} from '@mui/material';
import { useStyles } from '../../muiStyles/styles';
import Services from './ServicesComponent';


export default function OurServices() {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" disableGutters>
            <Grid container mt={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        component={'div'}
                        className={classes.sectionH4}
                    >
                        Our Services
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box pt={2} pb={4} px={{ xs: 0, md: 2 }}>
                        <Services />
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}