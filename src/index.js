import React from "react";
import ReactDOM from 'react-dom';
import App from './app';
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/PortfolioPages/theme";


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
