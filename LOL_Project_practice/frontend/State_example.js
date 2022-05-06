// class 로 생성시

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

// function 로 생성시

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

// state

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red", type: "SUV" };
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

// prop

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

ReactDOM.render(<Car color="red" />, document.getElementById("root"));

// 컴포넌트 안에 다른 컴포넌트 포함

class Hello extends React.Component {
  render() {
    return <h2>Hello {this.props.name}</h2>;
  }
}

class World extends React.Component {
  render() {
    return <Hello name="bryan" />;
  }
}

ReactDOM.render(<World />, document.getElementById("root"));

// 다른 파일(.js)에 있는 컴포넌트를 포함

// HelloFile.js

import React from "react";

class Hello extends React.Component {
  render() {
    return "Hello " + this.props.name;
  }
}

export default Hello;
