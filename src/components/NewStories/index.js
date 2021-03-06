import {
    Container, Box, Grid, Typography
} from '@mui/material';
import Stories from './StoriesComponent';
import { useStyles } from '../../muiStyles/styles';

export default function () {
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
                        New Stories
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box pt={2} pb={4} px={{ xs: 0, md: 2 }}>
                        <Stories />
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}