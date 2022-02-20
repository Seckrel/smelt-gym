import {
    Grid, CardMedia, Paper, Divider
} from '@mui/material';


export default function Services() {
    return (
        <Grid container spacing={{ xs: 0, sm: 2 }}>
            <Grid item xs={12}>
                <Paper elevation={2}>
                    <CardMedia
                        component={'img'}
                        src="/assets/images/gym-workout-space-851.jpg"
                        sx={{ borderRadius: "2px" }}
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} sx={{
                display: { xs: 'none', sm: 'block' }
            }}>
                <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper elevation={2}>
                    <CardMedia
                        component={'img'}
                        src="/assets/images/gym-equipments-1080.jpg"
                        sx={{ borderRadius: "2px" }}
                        height={'296.75px'}
                        width={'100%'}
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper elevation={2}>
                    <CardMedia
                        component={'img'}
                        src="/assets/images/gym-dumbells-1080.jpg"
                        sx={{ borderRadius: "2px" }}
                        height={'296.75px'}
                        width={'100%'}
                    />
                </Paper>
            </Grid>
        </Grid>
    )
}