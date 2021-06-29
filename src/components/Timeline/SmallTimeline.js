import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        margin: '0 0 16px 0'
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    workDetail: {
        marginTop: '16px',
        textAlign: 'justify'
    },
}));

export default function SmallTimeline() {
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={0} className={classes.paper} variant={"outlined"}>
                <Typography variant="h6" component="h1" align='center'>
                    The University of Texas at Austin
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    Aug. 2021 - Present
                </Typography>
                <Typography className={classes.workDetail}>Currently pursuing Master's in Electrical and Computer Engineering (Software Engineering and Systems).</Typography>
            </Paper>
            <Paper elevation={0} className={classes.paper} variant={"outlined"}>
                <Typography variant="h6" component="h1" align='center'>
                    Amazon Web Services
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" className={"datesBottom"}>
                    Mar. 2021 - Jun. 2021
                </Typography>
                <Typography className={classes.workDetail}>Worked as a Cloud Support Associate in the security domain. My job responsibilties included resolving issues of AWS customers related to the services in security domain (like Amazon Certificate Manager, Identity Access and Management, Cognito, etc).</Typography>
            </Paper>
            <Paper elevation={0} className={classes.paper} variant={"outlined"}>
                <Typography variant="h6" component="h1" align='center'>
                    Squareboat
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    Jul. 2020 - Feb. 2021
                </Typography>
                <Typography className={classes.workDetail}>Worked as software engineer. Developed the backend for the websites <a href={"https://cedarwood.co.in"} target="_blank" rel="noopener noreferrer">Cedarwood</a> and <a href={"https://tconsulta.it"} target="_blank" rel="noopener noreferrer">Tconsulta</a> and integrated it with the web and mobile applications.</Typography>
            </Paper>
            <Paper elevation={0} className={classes.paper} variant={"outlined"}>
                <Typography variant="h6" component="h1" align='center'>
                    Maharaja Agrasen Institute of Technology
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    Aug. 2016 - Sept. 2020
                </Typography>
                <Typography className={classes.workDetail}>Completed Bachelor's in Computer Science and Engineering. Explored the subjects like Software Engineering, Operating Systems, Algorithms and Data Structures, etc.</Typography>
            </Paper>
        </div>
    )
}