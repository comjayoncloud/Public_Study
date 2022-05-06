//// - class 로 생성시 (component)

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

//// - function 로 생성시 (component)

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

//// - state

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red", type: "SUV" };
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

//// - prop

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

ReactDOM.render(<Car color="red" />, document.getElementById("root"));

//// - 컴포넌트 안에 다른 컴포넌트 포함

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

//// - 다른 파일(.js)에 있는 컴포넌트를 포함

// HelloFile.js

import React from "react";

class Hello extends React.Component {
  render() {
    return "Hello " + this.props.name;
  }
}

export default Hello;

// app.js

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './HelloFile';	// <== 여기 추가

function App() {
  let hello_h1 = <h1>Hello World~</h1>;
  return (
    <div className="App">
      {hello_h1}
      <Hello name="bryan" />		// <== 이렇게 사용
    </div>
  );
}

export default App;

//// - state를 사용하려면 constructor에서 속성을 초기화

class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        gender: "man",
        tall: "181",
        weight: "80"
      };
    }
    render() {
      return (
        <div>
          <h2>Hello {this.props.name}!</h2>
          <p>your gender is {this.state.gender}</p>
          <p>your tall is {this.state.tall} cm</p>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Hello name="bryan"/>, document.getElementById('root'));


//// - state 수정 :  this.setState() 

class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        gender: "man",
        tall: "181",
        weight: "80"
      };
    }
    changeGender = () =>{
      if( this.state.gender == "man")
        this.setState({gender:"woman"})
      else
        this.setState({gender:"man"})
    }
    render() {
      return (
        <div>
          <h2>Hello {this.props.name}!</h2>
          <p>your gender is {this.state.gender}</p>
          <p>your tall is {this.state.tall} cm</p>
          <button type="button" onClick={this.changeGender}>Gender Change</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Hello name="bryan"/>, document.getElementById('root'));

// 화면을 보면 man으로 되어있음. 버튼을 누러서 바꾸는 코드. 중요한것은 changeGender가 바로 실행안됨

