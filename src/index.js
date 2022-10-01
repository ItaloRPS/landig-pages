import React from 'react';
import {createRoot} from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import {GlobalStyle} from './styles/styles-global'
import {theme} from './styles/theme'
import Home from './templates/Home'; './templates/Home';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle/>
        </ThemeProvider>
    </React.StrictMode>
);

