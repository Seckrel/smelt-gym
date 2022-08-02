import { Container } from "@mui/material";
import MembershipPlan from "../src/components/MembershipPlan";

export default function Membership() {
    return (
        <Container maxWidth="xl" disableGutters sx={{ padding: "100px 0px" }}>
            <MembershipPlan />
        </Container>
    )
}