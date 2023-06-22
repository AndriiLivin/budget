import React from "react";

import { Routes } from "react-router";
import { Route, BrowserRouter, NavLink } from "react-router-dom";

import { WrapperApp, GlobalStyle } from "./stylesApp";

import About from "../About/About";
import Statistics from "../Statistics/Statistics";
import Home from "../Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      {/* // наиболее популярная форма обертки */}
      <WrapperApp>
        {/* применяем компонент с глобальными стилями */}
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* знак ? означает, что параметр :userId? не обязательный */}
          <Route exect path="/" element={<Home />} />

          <Route path="/Statistics" element={<Statistics />} />

          <Route path="/About" element={<About  />} />
        </Routes>
      </WrapperApp>
    </BrowserRouter>
  );
};

export default App;
