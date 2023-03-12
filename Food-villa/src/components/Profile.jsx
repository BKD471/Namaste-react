import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 47,
      count2: 69,
    };

    console.log("1 First Child Constructor called in................");
  }

  //Just because it  gets called after the componet is  placed in DOM,its a great place to invoke API's
  //Thumb rule is that, first render yr compoenent with default state data
  // make an api call after it, after you get the data from the call,
  //update the state with that data and rerender
  componentDidMount() {
    console.log(
      "3 First Child Compoent successfully got  mounted on DOM............"
    );
    this.setState({
      count: 69,
    });

    this.timer = setInterval(() => {
      console.log("I will Fuck yr SPA");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("4 Child Component did update called in......");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("5 Child Component will be unmounted ");
  }

  render() {
    const { count, count2 } = this.state;

    console.log("2 First Child Render called in...............");
    return (
      <>
        <h1>Profile Component</h1>
        <h2>I am {this.props.name} and i will rise from my ashes.</h2>
        <h2>I will be the best version of myself.</h2>
        <h2>{count}</h2>
        <h2>{count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count2: count2 + 1,
            });
          }}
        >
          Rise
        </button>
      </>
    );
  }
}

export default Profile;
