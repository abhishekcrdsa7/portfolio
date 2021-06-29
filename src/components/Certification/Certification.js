import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
        textAlign: 'center'
    },
}));

export default function Certification() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:400px)');

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <Paper style={{width: matches ? '90%' : '40%'}} elevation={0} className={classes.paper} variant={"outlined"}>
                <Typography align='center' style={{height: '65px'}} variant="h6" component="h1">
                    AWS Certified Security Specialty
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    17 June 2021 - 17 June 2024
                </Typography>
                <Typography className={classes.workDetail}>
                    <img alt="aws-certified-security-specialty" src={require('../../assets/aws-certified-security-specialty.png')} />
                </Typography>
            </Paper>
            <Paper style={{width: matches ? '90%' : '40%'}} elevation={0} className={classes.paper} variant={"outlined"}>
                <Typography align='center' style={{height: '65px'}} variant="h6" component="h1">
                    AWS Certified Solutions Architect Associate
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" className={"datesBottom"}>
                    19 November 2019 - 27 May 2024
                </Typography>
                <Typography className={classes.workDetail}>
                    <img alt="aws-certified-solutions-architect-associate" src={require('../../assets/aws-certified-solutions-architect-associate.png')} />
                </Typography>
            </Paper>
        </div>
    )
}