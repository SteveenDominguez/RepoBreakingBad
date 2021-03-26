import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { Buscar } from '../Buscar/index';
import { ErrorPage } from '../ErrorPage';
import { Home } from '../Home'
import { SobreNosotros } from '../SobreNosotros';
import { Menu } from './Menu';

export const MainRouter = () => {
    return (
        <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/buscar" component={Buscar}/>
                    <Route exact path="/sobreNosotros" component={SobreNosotros}/>
                    <Route exact component={ErrorPage}/>
                </Switch>
            </Router>
        </div>
    )
}
