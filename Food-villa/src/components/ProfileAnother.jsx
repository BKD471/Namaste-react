import React, { Component } from "react";

class ProfileAnother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 47,
      count2: 69,
    };

    console.log("1 Second Child C0nstructor called in................");
  }

  //Just because it  gets called after the componet is  placed in DOM,its a great place to invoke API's
  //Thumb rule is that, first render yr compoenent with default state data
  // make an api call after it, after you get the data from the call,
  //update the state with that data and rerender
  componentDidMount() {
    console.log(
      "3  Second Child Compoent successfully got  mounted on DOM............"
    );
  }

  render() {
    const { count, count2 } = this.state;

    console.log("2  Second Child Render called in...............");
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

export default ProfileAnother;
