//// -HTML과 React의 차이점

// HTML Form

class HelloForm extends React.Component {
    constructor(props){
      super(props);
      this.state = { username: ''};
    }
    myChangeHandler = (event) => {
      this.setState({ username: event.target.value});
    }
    render(){
      return (
        <form>
          <h1>hello {this.state.username}</h1>
          <p>input name : </p>
          <input type='text' onChange={this.myChangeHandler} />
        </form>
      )
    }
  }
  
  ReactDOM.render(<HelloForm />, document.getElementById("root"));
//event.target.value 중요!! 


// -React 여러개의 input

class HelloForm extends React.Component {
    constructor(props){
      super(props);
      this.state = { username: '', phone: ''};
    }
    myChangeHandler = (event) => {
      let name = event.target.name;
      let val = event.target.value;
      let err = '';
      if( name === "username" ){
        if( name == "" || name.len() < 3 ){
          err = <strong>input your name more than 3
        }
      }
      this.setState({ [name]: val});
    }
    render(){
      return (
        <form>
          <h1>hello {this.state.username} {this.state.phone}</h1>
          <p>input name : </p>
          <input type='text' name='username' onChange={this.myChangeHandler} />
          <p>input phone</p>
          <input type='number' name='phone' onChange={this.myChangeHandler} />
        </form>
      )
    }
  }
  
  ReactDOM.render(<HelloForm />, document.getElementById("root"));

//</strong>

// 여기서 외울건 myChangeHandler() 에 있는 것.

//// - Validation 방법

class HelloForm extends React.Component {
    constructor(props){
      super(props);
      this.state = { username: '', phone: '', errMsg: ''};
    }
    myChangeHandler = (event) => {
      let name = event.target.name;
      let val = event.target.value;
      let err = '';
      if( name === "username" ){
        if( val == "" || val.length < 3 ){
          err = <strong>Please enter at least three characters</strong>;
        }
      }
      this.setState({'errMsg': err, [name]: val});
    }
    render(){
      return (
        <form>
          <h1>hello {this.state.username} {this.state.phone}</h1>
          <p>input name : </p>
          <input type='text' name='username' onChange={this.myChangeHandler} />
          <p>input phone</p>
          <input type='number' name='phone' onChange={this.myChangeHandler} />
          <p>{this.state.errMsg}</p>
        </form>
      )
    }
  }
  
  ReactDOM.render(<HelloForm />, document.getElementById("root"));