import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Routes } from "react-router-dom";
import Toggle from "./Components/Toggle";



class App extends Component {
  render() {
    return (
      <table>
        <tr>
          <Column></Column>
        </tr>
      </table>
     
    );
  }
}

class Column extends React.Component {
render(){
  return (
    <React.Fragment>
    <td>
    Data satu
    </td>
    <td>
    Data Berikutnnya
    </td>
    </React.Fragment>
  );
}
}


export default App;
