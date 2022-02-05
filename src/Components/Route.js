import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Routes } from "react-router-dom";
import Toggle from "./Toggle";

const Home = () => {
  return (
    <div>
      <h1>HAlaman HOME</h1>
    </div>
  );
}

function ListView() {
  return <h1>Semua User</h1>;
}
function NoMatch() {
  return <h1>404, halaman tidak muncul</h1>;
}

class Route extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">User</Link>
            </li>
            <li>
              <Link to="/toggle">Toggle</Link>
            </li>
          </nav>
          <main>
          <Routes>
          <Route  path="/" element={<Home/>}></Route>
              <Route path="/toggle" element={<Toggle/>}>
              
              </Route>
              <Route path="/users" element={<ListView/>} />
              <Route element={<NoMatch/>} />
          </Routes>
       
          
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default Route;
