import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { redirect: '/', anchor: 'home', icon: 'fa fa-home', id: 'links_01' },
];

const renderMenu = (items) => {
  return items.map(item =>
    <Link to={item.redirect} className="nav__list__item" key={item.id}>
      <i className={`nav__list__item__icon ${item.icon}`} aria-hidden="true" />
    </Link>
  )
};

const navigation = (props) => {
  return (
    <nav className="nav" role="navigation">
      <ul className="nav__list">
        { renderMenu(links) }
      </ul>
    </nav>
  );
};

export default navigation;
