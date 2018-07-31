import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioItemPage = (props) => (
  <div>
    Portfolio clicked is {props.match.params.id}
  </div>
)

export default PortfolioItemPage;