import {
    Grid, Card, CardContent,
    CardActionArea, CardMedia,
    Typography, Box
} from '@mui/material';

// TODO: Add a link to the story

const CustomCards = ({ image, height, alt, title, content }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={height ? height : 'auto'}
                    image={image}
                    alt={alt}
                />
                <CardContent className={'main-bg-color'}>
                    <Typography
                        variant='h6'
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='caption'
                    >
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default function Stories() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}
                sx={{
                    height: { alignItems: "stretch" },
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}
                >
                    <CustomCards
                        image='/assets/images/salad-820-thumbnail.jpg'
                        alt={"overhead image of low crab foods"}
                        title={"10 Low Carb Foods You Should Eat"}
                        content={"Hello, I'm a card. I'm in a grid."}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={12}>
                        <CustomCards
                            image='/assets/images/teapot-820-thumbnail.jpg'
                            height='200px'
                            alt={"overhead image of low crab foods"}
                            title={"10 Low Carb Foods You Should Eat"}
                            content={"Hello, I'm a card. I'm in a grid."}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <CustomCards
                            image='/assets/images/fitness-840-thumbnail.jpg'
                            height='200px'
                            alt={"overhead image of low crab foods"}
                            title={"10 Low Carb Foods You Should Eat"}
                            content={"Hello, I'm a card. I'm in a grid."}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}