//// props는 읽기전용!

class Hello extends React.Component {
  render() {
    return <h2>Hello {this.props.name}!</h2>;
  }
}

ReactDOM.render(<Hello name="bryan" />, document.getElementById("root"));

// this.props.name = 'ok google'; 하면 오류!

//// 파라메터로 props값 전달

const param_name = "bryan";

class Hello extends React.Component {
  render() {
    return <h2>Hello {this.props.name}!</h2>;
  }
}

ReactDOM.render(<Hello name={param_name} />, document.getElementById("root"));

////
