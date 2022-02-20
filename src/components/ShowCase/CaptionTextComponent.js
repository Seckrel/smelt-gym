import { Box, Typography } from '@mui/material';

export default function CaptionText({ showcaseTextRef }) {
    return (
        <Box
            height={"100%"}
            display={'flex'}
            alignItems={"center"}
            justifyContent={'center'}
        >
            <Typography
                variant={'h2'}
                color="white"
                component={'div'}
                ref={showcaseTextRef}
                sx={{
                    clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                    transform: "translateY(3em)"
                }}
            >
                Body Under Construction<br />
                Mind On A Mission
            </Typography>
        </Box>
    )
}