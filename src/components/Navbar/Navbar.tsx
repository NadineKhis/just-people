import React from "react";
// import {Link } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Just People
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <p>Try your best</p>
            {/*    <a className="nav-link active" aria-current="page" href="/">MainScreen</a>*/}
          </li>
          {/*  <li className="nav-item">*/}
          {/*    <a className="nav-link" href="/about">About</a>*/}
          {/*  </li>*/}
        </ul>
      </div>
    </div>
  </nav>
);
