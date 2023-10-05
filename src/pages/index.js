import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'components'
import HomePage from './HomePage'
import LandingPage from './LandingPage'
import JoiningPage from './JoiningPage'
import ArticlePage from './ArticlePage'
import './styles.css'


function Routes() {

    const protectedRoutes = {
        "/home": HomePage,
        "/join": JoiningPage,
        "/article": ArticlePage
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                {
                    Object.entries(protectedRoutes).map(([path, Component]) => (
                        <PrivateRoute path={ path }>
                            <Component />
                        </PrivateRoute>
                    ))
                }
                <Redirect to="/home"/>
            </Switch>
        </Router>
    )
}

export default Routes