import React from "react";
import { Grid } from '@material-ui/core';
import Cinevents from "../../assets/Cinevents.png";
import HealthNoteTracker from "../../assets/HealthNoteTracker.png";
import WhosThatEmployee from "../../assets/WhosThatEmployee.png";

export default function MyWork() {
  return (
    <Grid container spacing={2}>
      <section id="projects">
        <h3>My Work</h3>  
        <a href="https://github.com/jjsmith32199/UntitledGooseProject">
          <img src={Cinevents} className="project2" alt="CinEvents logo" />
        </a>
        <a href="https://github.com/jjsmith32199/HealthNoteTracker">
          <img src={HealthNoteTracker} className="project3" alt="Health Tracker Landing Page" />
        </a>
        <a href="https://github.com/jjsmith32199/WhosThatEmployee" />
        <img src={WhosThatEmployee} className="project4" alt="Whos That Employee console app" />
      </section>
    </Grid>
  );
}

export { MyWork };
