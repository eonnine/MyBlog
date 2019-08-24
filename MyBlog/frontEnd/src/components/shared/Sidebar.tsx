import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Sample">Sample</Link></li>
            <li><Link to="/Sample2">Sample2</Link></li>
            <li><Link to="/Sample3">Sample3</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar;