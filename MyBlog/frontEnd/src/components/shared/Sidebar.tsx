import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/Board/0" activeClassName="active">Board</NavLink></li>
            <li><NavLink to="/Sample" activeClassName="active">Sample</NavLink></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar;