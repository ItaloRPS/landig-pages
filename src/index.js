import React from 'react';
import {createRoot} from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {GlobalStyle} from './styles/styles-global'
import {theme} from './styles/theme'
import Home from './templates/Home';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <BrowserRouter>
             <Routes>
                <Route path='*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
        <GlobalStyle/>
        </ThemeProvider>
    </React.StrictMode>
);

