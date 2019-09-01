import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/Board" activeClassName="active">Board</NavLink></li>
            <li><NavLink to="/Sample" activeClassName="active">Sample</NavLink></li>
            <li><NavLink to="/Sample3" activeClassName="active">Sample3</NavLink></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar;