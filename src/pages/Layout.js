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
          <li>
            <Link to="todolist">Todo List</Link>
          </li>
          <li>
            <Link to="randomozlu">Random Ozlu</Link>
          </li>
          <li>
            <Link to="date">Özel Günler</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;
