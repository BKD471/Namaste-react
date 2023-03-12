import React, { Component } from "react";
import Profile from "./Profile";
import ProfileAnother from "./ProfileAnother";
import ProfileFunctionalComponent from "./ProfileFunctionalCompoennt";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("1 Parent Constructor called in....");
  }

  componentDidMount() {
    console.log(
      "3 Parent CompoenntDIdMount got successfully mounted in DOM...."
    );
  }

  render() {
    console.log("2 Parent render called in .....");

    return (
      <>
        <h1>About Us Page</h1>
        {""}
        <p>This is Namaste React Live Course</p>
        <Profile name={"Bhaskar"} />
        <ProfileAnother name={"Sayoni"} />
        <ProfileFunctionalComponent name={"Phoenix"} />
      </>
    );
  }
}

export default About;

/*
1 Parent Constructor called in....
2 Parent render called in .....
1 First Child Constructor called in................
2 First Child Render called in...............
1 Second Child C0nstructor called in................
2  Second Child Render called in...............
3 First Child Compoent successfully got  mounted on DOM............
3  Second Child Compoent successfully got  mounted on DOM............
3 Parent CompoenntDIdMount got successfully mounted in DOM....
2 First Child Render called in...............
4 Child Component did update called in...... 
*/

// CompoentnDidmOunt is ivoked after first render
//COmpoentDidUpdate is called after every next render
//useEffetc() with [] dependency array is equal to CompoentnDidmOunt
//and  useEffetc() with not empty dependenta array is just like COmpoentDidUpdate
// So useeffect is combination of both componentDidMount and ComponentDidUpdate
//this is not exact similar but almost similar
