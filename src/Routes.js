import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContextProvider from './context/MainContext';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';

const Routes = () => {
    return (
        <MainContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/profile' component={ProfilePage} />
                </Switch>
            </BrowserRouter>
        </MainContextProvider>
    );
};

export default Routes;