import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import GlobalStyle from './styles/global';
import Routes from './routes';


const App: React.FC = () => (
    <>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    <GlobalStyle />
    </>
);


export default hot (App);
