import React from "react";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import './app.css';
import { theme } from "./components/PortfolioPages/theme";

import { Layout } from "./components/Layout";
import { About } from "./components/PortfolioPages/About/About";
import { ContactMe } from "./components/PortfolioPages/Contact/ContactMe";
import { MyWork } from "./components/PortfolioPages/Works/MyWork";
import { Resume } from "./components/PortfolioPages/Resume/Resume";



const App = () => {
  return (
    <ThemeProvider theme ={createTheme(theme)}>
        <Layout>
            <About />
            <MyWork />
            <Resume />
            <ContactMe />
        </Layout>
    </ThemeProvider>
    );
}

export default App ;