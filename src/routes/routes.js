import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from '.components/App';
import Layout from './components/Layout/Layout'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout exact path='/' component={App} />
            </Switch>
        </BrowserRouter>
    )
}
