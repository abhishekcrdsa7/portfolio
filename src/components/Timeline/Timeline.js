import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    textAlign: 'center'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  workDetail: {
    textAlign: 'justify'
  }
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
    <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Aug. 2021 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={0} className={classes.paper} variant={"outlined"}>
            <Typography variant="h6" component="h1">
              The University of Texas at Austin
            </Typography>
            <Typography className={classes.workDetail}>Currently pursuing Master's in Electrical and Computer Engineering (Software Engineering and Systems).</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Mar. 2021 - Jun. 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={0} className={classes.paper} variant={"outlined"}>
            <Typography variant="h6" component="h1">
              Amazon Web Services
            </Typography>
            <Typography className={classes.workDetail}>Worked as a Cloud Support Associate in the security domain. My job responsibilties included resolving issues of AWS customers related to the services in security domain (like Amazon Certificate Manager, Identity Access and Management, Cognito, etc).</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Jul. 2020 - Feb. 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={0} className={classes.paper} variant={"outlined"}>
            <Typography variant="h6" component="h1">
              Squareboat
            </Typography>
            <Typography className={classes.workDetail}>Worked as software engineer. Developed the backend for the websites <a href={"https://cedarwood.co.in"} target="_blank" rel="noopener noreferrer">Cedarwood</a> and <a href={"https://tconsulta.it"} target="_blank" rel="noopener noreferrer">Tconsulta</a> and integrated it with the web and mobile applications.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            May. 2020 - Jul. 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Squareboat (Internship)
            </Typography>
            <Typography className={classes.workDetail}>Developed a job portal to learn the Agile software development. The job portal passed several Quality Assurance tests. It helped to understand the principles of building production quality software. The Job Portal API is being utilized to test the frontend development skills of new Software Engineer hires.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem> */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Aug. 2016 - Sept. 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={0} className={classes.paper} variant={"outlined"}>
            <Typography variant="h6" component="h1">
              Maharaja Agrasen Institute of Technology
            </Typography>
            <Typography className={classes.workDetail}>Completed Bachelor's in Computer Science and Engineering. Explored the subjects like Software Engineering, Operating Systems, Algorithms and Data Structures, etc.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}