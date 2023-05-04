import React from "react";
import { Grid } from '@material-ui/core';;


export default function MyWork() {
    return(
      
<Grid container spacing={2}>
    <section id="projects">
        <h3> My Work </h3>
        <a href="https://jjsmith32199.github.io/challenge1/#social-media-marketing">
          <img src="../../assets/digital-marketing-meeting.jpg" class="project1" alt="Horiseon Landing Page Image"/>
        </a>
        <a href="https://github.com/jjsmith32199/UntitledGooseProject">
          <img src="../../assets/Cinevents.png" class="project2" alt="CinEvents logo"/>
        </a>
        <a href="https://github.com/jjsmith32199/HealthNoteTracker">
          <img src="../../assets/HealthNoteTracker.png" class="project3" alt="Health Tracker Landing Page"/>
        </a>
        <a href="https://github.com/jjsmith32199/WhosThatEmployee" class/>
    </section>
    </Grid>
    )
}


export { MyWork };