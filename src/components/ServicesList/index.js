// import Masonry from '@mui/lab/Masonry';
import { Paper, Box } from '@mui/material';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"





const ServicesList = () => {
    return (
        <Box px={3}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry
                    gutter={5}
                >
                    {itemData.map((item, index) => (

                        <Paper
                            sx={{ width: "100%", backgroundColor: "#b6c3d0", borderRadius: "10px" }}
                            elevation={3}

                        >
                            <img src={`${item.img}`}
                                alt={`${item.title}`}
                                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                                key={index} />
                        </Paper>

                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Box>
    )
}


const itemData = [
    {
        img: '/assets/images/fitness-840-thumbnail.jpg',
        title: 'Bed',
    },
    {
        img: '/assets/images/gym-dumbells-1080.jpg',
        title: 'Books',
    },
    {
        img: '/assets/images/gym-equipments-1080.jpg',
        title: 'Sink',
    },
    {
        img: '/assets/images/gym-workout-space-851.jpg',
        title: 'Kitchen',
    },
    {
        img: '/assets/images/salad-820-thumbnail.jpg',
        title: 'Blinds',
    },
    {
        img: '/assets/images/teapot-820-thumbnail.jpg',
        title: 'Chairs',
    },
    {
        img: '/assets/images/fitness-840-thumbnail.jpg',
        title: 'Laptop',
    },
    {
        img: '/assets/images/gym-equipments-1080.jpg',
        title: 'Doors',
    },
];

export default ServicesList;