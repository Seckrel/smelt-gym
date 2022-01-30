import {
    Container, Box
} from '@mui/material';
import CaptionText from './CaptionTextComponent';

export default function ShowCase() {
    const BGIMAGEHEIGHT = {
        'lg': 850,
        "md": 720,
        "sm": 480,
        "xs": 600
    }
    return (
        <Container maxWidth="xl" disableGutters>
            <Box
                sx={{
                    backgroundImage: `url('/assets/images/workout-abs-girl-16-9.jpg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: `cover`,
                    width: "100%",
                    height: {
                        md: BGIMAGEHEIGHT.md,
                        sm: BGIMAGEHEIGHT.sm,
                        xs: BGIMAGEHEIGHT.xs,
                        lg: BGIMAGEHEIGHT.lg
                    },
                }}
            >
                <CaptionText />
            </Box>
        </Container >
    )
}