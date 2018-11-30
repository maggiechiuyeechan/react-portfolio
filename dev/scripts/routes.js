import React from 'react';
import noMatch from './pages/noMatch';

import {AnimatedSwitch } from 'react-router-transition';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './pages/homePage';
import Resume from './pages/Resume';
// import ProjectList from './pages/ProjectList';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import ProjectDetail from './component/ProjectDetail';


import { Route, Switch, Redirect } from 'react-router-dom';



export const Routes = () => {
    return(
        <div>
           <NavBar /> 

           
        <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="route-wrapper" >
            {/* <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                > */}
                  {/* <Switch location={location}> */}
                    <Route exact path="/"><Redirect to="/Home" /></Route>
                    <Route exact path="/Resume" component={Resume} />
                    <Route exact path="/Home" component={Home} />
                    <Route path="/Projects/:projectId" component={ProjectDetail} />
                    <Route component = {noMatch} />
                {/* </Switch> */}
            </AnimatedSwitch>
                  {/* </CSSTransition>
              </TransitionGroup> */}
            <Footer />

        </div>
    );
};