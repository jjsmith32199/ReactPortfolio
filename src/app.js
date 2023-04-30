import React from "react";
import './app.css';
import  About from "./components/PortfolioPages/About.js";
import  ContactMe from "./components/PortfolioPages/ContactMe.js";
import  MyWork from "./components/PortfolioPages/MyWork";
import  Resume from "./components/PortfolioPages/Resume.js";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';



const App = () => {
    return (
    <ThemeProvider theme={createTheme()}>
        <div>
        <About />
        <MyWork />
        <Resume />
        <ContactMe />
        </div>
    </ThemeProvider>
    );
}

export default App;