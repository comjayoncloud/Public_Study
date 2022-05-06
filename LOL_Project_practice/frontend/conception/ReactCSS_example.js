//// - inline styling 이용

class MyJob extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Hello Style!</h1>
      </div>
    );
  }
}

// camelCased property names 를 사용

//// - javascript object 이용

class MyJob extends React.Component {
  render() {
    const hstyle = {
      color: "black",
      backgroundColor: "blue",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={hstyle}>Hello Style!</h1>
      </div>
    );
  }
}
// style={object명} 으로 사용합니다.

//// - CSS Stylesheet 이용

// App.css 내용.  ※ 여기는 carmelCased 아님.
body {
    background-color: white;
    color: blue;
    margin: 10px;
    font-family: Arial;
    text-align: center;
  }

// js

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class MyJob extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello Style!</h1>
      </div>
    );
  }
}

// body 에 적용했기때문에 됩니다.

//// - className 에 직접 적용

// App.css

body {
    background-color: white;
    color: blue;
    margin: 10px;
    font-family: Arial;
    text-align: center;
  }

.mainBody {
    background-color: white;
    color: blue;
    margin: 10px;
    font-family: Arial;
    text-align: center;
  }

// js

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';

class MyJob extends React.Component {
  render() {
    return (
      <div>
      <h1 className={styles.mainBody}>Hello Style!</h1>
      </div>
    );
  }
}

// <h1 class="something"..  이 아니라 <h1 className="something"... 입니다.
// 페이지는 index.html이지만 css 가 import 되는것은 .js 에서 합니다.