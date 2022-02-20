import {
    Container, Box
} from '@mui/material';
import CaptionText from './CaptionTextComponent';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function ShowCase() {
    const boxRef = useRef(null);
    const showcaseTextRef = useRef(null);
    const timeline = gsap.timeline()
    const BGIMAGEHEIGHT = {
        'lg': 850,
        "md": 720,
        "sm": 480,
        "xs": 600
    }



    useEffect(() => {
        timeline
            .from(boxRef.current, {
                scale: 0.6,
                opacity: 0,
                ease: "expo.out",
                duration: 2,
                delay: 0.2
            })
            .to(showcaseTextRef.current, {
                clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
                y: 0,
                stagger: 0.3,
                duration: 1
            }, "-=1.8")
    }, [])

    // height: {
    //     md: BGIMAGEHEIGHT.md,
    //     sm: BGIMAGEHEIGHT.sm,
    //     xs: BGIMAGEHEIGHT.xs,
    //     lg: BGIMAGEHEIGHT.lg
    // }
    return (
        <Container maxWidth="xl" disableGutters>
            <Box
                sx={{
                    backgroundImage: `url('/assets/images/workout-abs-girl-16-9.jpg')`,
                    minHeight: "800px",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: `cover`,
                    width: "100%",
                    borderRadius: '0px 0px 5px 5px',
                    height: "100vh"

                }}
                ref={boxRef}
            >
                <CaptionText showcaseTextRef={showcaseTextRef} />
            </Box>
        </Container >
    )
}