import { Component } from "react/cjs/react.production.min";
//STATE
class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: props.start,
      };
    }
  
    //lifecycle
    componentDidMount() {
      this.addInterval = setInterval(() => this.increase(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.addInterval);
    }
  
    increase() {
      //update time tiap detik
      this.setState((state, props) => ({
        time: parseInt(state.time) + 1,
      }));
    }
  
    render() {
      return <div>{this.state.time} Detik</div>;
    }
  }


  //Event Handler

// function Clicker() {
//   function handleClick(e) {
//     alert("berhasil");
//     e.preventDefault();
//   }

//   return (
//     <div>
//       <a href="#" onClick={handleClick}>
    
//         Click this
//       </a>
//     </div>
//   );
// }


  export default Timer;