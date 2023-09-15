import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="randomnumber">Random Number</Link>
          </li>
          <li>
            <Link to="imgchange">İmg Change</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;
