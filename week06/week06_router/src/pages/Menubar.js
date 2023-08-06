import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Menubar;
