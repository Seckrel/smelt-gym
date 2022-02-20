import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    sectionH4: {
        textDecoration: "underline",
        paddingLeft: theme.spacing(2),
    },
    cardAspectRatio: {
        width: "100%",
        boxShadow: theme.shadows[0],
        borderRadius: 0,
        [theme.breakpoints.up('sm')]: {
            width: "90%",   
        },
        [theme.breakpoints.up('md')]: {
            width: "75%"
        }
    },
    center: {
        display: "flex",
        justifyContent: "center",
    }
}));

export { useStyles };