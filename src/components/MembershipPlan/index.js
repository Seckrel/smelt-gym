import {
    TableContainer, Table,
    TableHead, TableRow, TableCell, TableBody,
    Typography, Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((_) => ({
    tableCell: {
        border: 'none',
    }
}));

const CustomTickCell = ({ tick, subtText }) => {
    const classes = useStyles();
    return (
        <TableCell align='center' className={classes.tableCell}>
            <Typography
                variant='h2'
                component={'div'}
                sx={{
                    color: "#5889c4",
                    fontSize: { xs: "1.2rem", lg: "3rem" }
                }}
            >
                {tick}
            </Typography>
            {subtText && <Typography
                variant='overline'
                component={'div'}
                sx={{
                    color: "#6c87a8",
                    fontSize: { xs: "0.5rem", lg: "1rem" },
                }}
            >
                ({subtText})
            </Typography>}
        </TableCell>
    )
}

const CustomTableBorder = () => {
    const classes = useStyles();
    return (
        <TableCell rowSpan={3} className={classes.tableCell}
            sx={{
                background: "url('./assets/svg/table-border.svg') no-repeat center",
                width: "20px",
                backgroundSize: "contain",
            }}
        />
    )
}

const CustomTableHead = ({ text, align }) => {
    const classes = useStyles();
    return (
        <TableCell align={align ? align : 'center'} className={classes.tableCell}>
            <Typography
                variant='h5'
                component={'div'}
                sx={{
                    fontFamily: "Cookie, cursive, Roboto",
                    letterSpacing: "3px",
                    fontSize: { xs: "1rem", lg: "1.5rem" },
                }}
            >{text}
            </Typography>
        </TableCell>
    )
}


const MembershipPlan = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <TableContainer component={'div'}>
                    <Table sx={{ minWidth: 700, border: "none" }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={10} className={classes.tableCell}>
                                    <Typography
                                        variant='h4'
                                        component={'div'}
                                        sx={{ textDecoration: 'underline' }}
                                    >
                                        Membership Plans
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.tableCell} />
                                <CustomTableHead text="24/7 Gym Access" />
                                <TableCell className={classes.tableCell} />
                                <CustomTableHead text="Spa" />
                                <TableCell className={classes.tableCell} />
                                <CustomTableHead text="Nutritionist" />
                                <TableCell className={classes.tableCell} />
                                <CustomTableHead text="Gymnastics" />
                                <TableCell className={classes.tableCell} />
                                <CustomTableHead text="Personal Trainer" />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <CustomTableHead text="Basic" align={'right'} />
                                <CustomTickCell tick={'X'} />
                                <CustomTableBorder />
                                <CustomTickCell tick='X' subtText={'Only on Thurshday'} />
                                <CustomTableBorder />
                                <CustomTickCell />
                                <CustomTableBorder />
                                <CustomTickCell />
                                <CustomTableBorder />
                                <CustomTickCell />
                            </TableRow>
                            <TableRow>
                                <CustomTableHead text="Gold" align={'right'} />
                                <CustomTickCell tick={'X'} />
                                <CustomTickCell tick={'X'} />
                                <CustomTickCell tick={'X'} />
                                <CustomTickCell />
                                <CustomTickCell />
                            </TableRow>
                            <TableRow>
                                <CustomTableHead text="Platinum" align={'right'} />
                                <CustomTickCell tick={'X'} />
                                <CustomTickCell tick={'X'} />
                                <CustomTickCell tick={'X'} />
                                <CustomTickCell tick={'X'} />
                                <CustomTickCell tick={'X'} />
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>

    )
}

export default MembershipPlan;