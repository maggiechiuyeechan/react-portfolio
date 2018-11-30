import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from './routes';
import ScrollToTop from 'react-router-scroll-top';



const AppRouter = () => (
  <Router>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </Router>
);

export default AppRouter;