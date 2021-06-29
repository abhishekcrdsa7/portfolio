import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: '35px',
        cursor: 'pointer'
    }
}));

export default function SocialConnect() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:400px)');

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: matches ? '0 25% 20px 25%' : '0 38% 20px 38%'}}>
            <MailOutlineIcon className={classes.icon} onClick={() => {
                window.open("mailto:admin@abhishek-sharma.net");
            }}/>
            <InstagramIcon className={classes.icon} onClick={() => {
                window.open("https://www.instagram.com/i.abhisheksharma7/", "_blank");
            }}/>
            <LinkedInIcon className={classes.icon} onClick={() => {
                window.open("https://www.linkedin.com/in/abhishek-sharma-08ab7513a/", "_blank");
            }}/>
        </div>
    )
}