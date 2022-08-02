import ServicesList from "../src/components/ServicesList"
import { Container } from '@mui/material';


export default function ourServices() {

    return (
        <Container maxWidth="xl" disableGutters sx={{ padding: "100px 0px" }}>
            <ServicesList />
        </Container>
    )
}