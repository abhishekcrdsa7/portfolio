import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        marginBottom: '16px'
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    workDetail: {
        marginTop: '16px',
        textAlign: 'justify'
    },
}));

export default function Internships() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:400px)');
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <Paper style={{width: matches ? '90%' : '40%'}} elevation={0} className={classes.paper} variant={"outlined"}>
                <Typography variant="h6" component="h1" align='center'>
                    Squareboat
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    May. 2021 - Jul. 2021
                </Typography>
                <Typography className={classes.workDetail}>Developed a Job Portal, which passed several Quality Assurance tests, to understand the principles of building production quality software. The Job Portal API is being utilized to test the frontend development skills of new Software Engineer hires.</Typography>
            </Paper>
            <Paper style={{width: matches ? '90%' : '40%'}} elevation={0} className={classes.paper} variant={"outlined"}>
                <Typography variant="h6" component="h1" align='center'>
                    PFRepo
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" className={"datesBottom"}>
                    Jun. 2019 - Aug. 2019
                </Typography>
                <Typography className={classes.workDetail}>Developed and redesigned the website (pfrepo.me) and managed its production environment on an AWS EC2 instance. Reduced the loading time of data on the website by approx. 25% by optimizing the PostgreSQL database queries</Typography>
            </Paper>
            <Paper style={{width: matches ? '90%' : '40%'}} elevation={0} className={classes.paper} variant={"outlined"}>
                <Typography variant="h6" component="h1" align='center'>
                    M.Media (SkillDosti)
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    Jun. 2018 - Oct. 2018
                </Typography>
                <Typography className={classes.workDetail}>Built several features of the website (skilldosti.com) along with integration of AWS S3 (a cloud storage) to store files. One of the features included finding all the relevant locations within a certain radius by utilizing GeoJSON (a structure of data with capabilities of dealing with Geographical coordinates).
                </Typography>
            </Paper>
        </div>
    )
}