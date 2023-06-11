import React from "react";
import { Grid } from '@material-ui/core';
import cinevents from '../assets/Cinevents.png';
import healthNoteTracker from '../assets/HealthNoteTracker.png';
import whosThatEmployee from '../assets/WhosThatEmployee.png';
import bandWagon from '../assets/bandwagon.png';

const styles = {
  root: {
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  },
  projectImage: {
    width: '100%',
    maxWidth: '400px',
    border: '5px solid ',
    borderRadius: '4px',
    margin: '10px',
    marginBottom: '40px',
    transition: 'transform 0.3s ease-in-out',
  },
  hoverEffect: {
    transform: 'scale(1.1)',
  }
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  flexDirection: 'column',
  alignItems: 'center',
};

const h3Style = {
  color: '#333',
  textAlign: 'center',
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px'
};

export default function MyWork() {
  return (
    <Grid 
      container 
      spacing={2}
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}
    >
      <section id="projects">
        <h3 style={h3Style}>My Work</h3>  
        <Grid container style={containerStyle}>
          <Grid item>
            <a href="https://github.com/jjsmith32199/UntitledGooseProject">
              <img src={cinevents} style={styles.projectImage} alt="CinEvents logo"
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://github.com/jjsmith32199/HealthNoteTracker">
              <img src={healthNoteTracker} style={styles.projectImage} alt="Health Tracker Landing Page"
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://github.com/jjsmith32199/WhosThatEmployee">
              <img src={whosThatEmployee} style={styles.projectImage} alt="Whos That Employee console app"
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://github.com/jjsmith32199/Bandwagon">
              <img src={bandWagon} style={styles.projectImage} alt="Bandwagon landing page"
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </a>
          </Grid>
        </Grid>
      </section>
    </Grid>
  );
}

export { MyWork };

