import "./App.css";
import { Component } from "react/cjs/react.production.min";
// import Timer from "./Components/Timer";
// import Toggle from "./Components/Toggle";
import List from "./Components/List";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  

    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });

    // console.log(this.state.todoItem);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.todoItem}
            onChange={this.handleChange}
          ></input>
          <button>Add</button>
        </form>

        <List items={this.state.items}></List>
      </div>
    );
  }
}

export default Todo;
