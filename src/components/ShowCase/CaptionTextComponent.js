import { Box, Typography } from '@mui/material';

export default function CaptionText() {
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
            >
                Body Under Construction<br />
                Mind On A Mission
            </Typography>
        </Box>
    )
}