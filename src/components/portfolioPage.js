import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <p> This is the portfolio page </p>
    <NavLink to='/portfolio/1'> Portfolio One</NavLink>
    <NavLink to='/portfolio/2'> Portfolio Two</NavLink>
  </div>
);

export default PortfolioPage;