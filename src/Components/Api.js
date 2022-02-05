import "./App.css";
import React, {Component} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
// import Timer from "./Components/Timer";
// import Toggle from "./Components/Toggle";
import List from "./Components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true
    };
  }

  componentDidMount() {
    //kalau komponen sudah siap maka fungsi ini akan dijalankan
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ items: data, isLoading: false}));
  }

  render() {
    const {items, isLoading} = this.state;

    if(isLoading){
      return <p>Loading...</p>
    }


    return <div>
      <ul>
        {items.map( (item, index )=>
          <li key={index}>
            {item.name}
          </li>
          )}
      </ul>

    </div>;
  }
}

export default App;
