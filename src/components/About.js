import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import myImage from '../assets/me.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  },
  content: {
    padding: '50px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  },
  image: {
    border: '5px solid #C0C0C0',
    borderRadius: '50%',
    maxWidth: '300px',
    width: '100%',
    height: 'auto',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={createTheme()}>
      <Box className={classes.root}>
        <Box className={classes.content}>
          <Typography variant="h2" gutterBottom>About Me</Typography>
          <Typography variant="body1" gutterBottom>
            Hi, my name is Justin Smith and I'm a passionate programmer based in Bloomfield, CT. I recently moved back from Atlanta, Georgia, where I discovered my interest in software development. I am always eager to learn new technologies and explore new challenges in the field. Prior to my career in tech, I earned certifications as a Personal Trainer and Nutrition Coach, and I still enjoy staying active in my free time. You can find me working out in the gym, adding to my record collection, or unwinding with my favorite video games. As a lifelong computer enthusiast, I've always been fascinated by how computer systems and software work. My recent career switch reflects my desire to delve deeper into this field and contribute to the development of innovative web solutions. Thank you for taking the time to learn a little bit about me. Please feel free to reach out if you have any questions or would like to discuss potential opportunities.
          </Typography>
          <Box className={classes.imageWrapper}>
            <img src={myImage} alt="My Image" className={classes.image} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export { About };
