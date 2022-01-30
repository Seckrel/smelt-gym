import {
    Container, Box, Grid, Typography
} from '@mui/material';
import Stories from './StoriesComponent';

export default function () {
    return (
        <Container maxWidth="xl" disableGutters>
            <Grid container mt={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        component={'div'}
                        sx={{
                            textDecoration: 'underline',
                            px: 2
                        }}
                    >
                        New Stories
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box py={1} px={{ xs: 0, md: 2 }}>
                        <Stories />
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}