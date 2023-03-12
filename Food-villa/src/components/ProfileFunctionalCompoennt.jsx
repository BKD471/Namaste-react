import React, { Component, useEffect } from "react";

const ProfileFunctionalComponent = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("I am gonna end yr life");
    }, 1900);

    //this funct is called when we are unmounting this component
    //just like compoenntDidUnMout
    return () => {
      console.log("useEffect return");
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Profile Component</h1>
      <h2>I am {props.name} and i will rise from my ashes.</h2>
      <h2>I will be the best version of myself.</h2>
    </>
  );
};

export default ProfileFunctionalComponent;
