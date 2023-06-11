import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './app.css';
import { theme } from "./components/theme";

import { Layout } from "./components/Layout";
import { About } from "./components/About";
import { ContactMe } from "./components/ContactMe";
import { MyWork } from "./components/MyWork";
import { Resume } from "./components/Resume";

const App = () => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <Layout>
            <About />
            <MyWork />
            <Resume />
            <ContactMe />
        </Layout>
    </ThemeProvider>
  );
}

export default App;

