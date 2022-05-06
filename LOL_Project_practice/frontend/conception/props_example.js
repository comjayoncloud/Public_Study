//// - prop

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

ReactDOM.render(<Car color="red" />, document.getElementById("root"));

//// - props는 읽기전용!

class Hello extends React.Component {
  render() {
    return <h2>Hello {this.props.name}!</h2>;
  }
}

ReactDOM.render(<Hello name="bryan" />, document.getElementById("root"));

// this.props.name = 'ok google'; 하면 오류!

//// - 파라메터로 props값 전달

const param_name = "bryan";

class Hello extends React.Component {
  render() {
    return <h2>Hello {this.props.name}!</h2>;
  }
}

ReactDOM.render(<Hello name={param_name} />, document.getElementById("root"));

//// - object 값으로 전달

const param_name = { first: "bryan", last: "oh" }; // 이렇게 object 형식으로 바꾸면

class Hello extends React.Component {
  render() {
    return (
      <h2>
        Hello {this.props.name.first} {this.props.name.last}!
      </h2>
    ); // 이렇게 사용.
  }
}

ReactDOM.render(<Hello name={param_name} />, document.getElementById("root"));

//// - constructor 로 props 전달.

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>Hello {this.props.name}!</h2>;
  }
}

ReactDOM.render(<Hello name="bryan" />, document.getElementById("root"));
