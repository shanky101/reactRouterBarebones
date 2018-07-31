import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import PortfolioPage from '../components/portfolioPage';
import PortfolioItemPage from '../components/portfolioItemPage';
import Contact from '../components/contact';
import NotFound from '../components/notFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header />  
    <Switch>
      <Route path='/' component={Home} exact={true} />
      <Route path='/portfolio' component={PortfolioPage} exact={true}/>
      <Route path='/portfolio/:id' component={PortfolioItemPage}/>
      <Route path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;