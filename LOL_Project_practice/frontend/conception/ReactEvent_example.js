//// HTML과 React의 차이점 .

// HTML
<button onclick="doAction()">action!</button>

// React
<button onClick={doAction}>action!</button>
// doAction 이라는 function 이 있다면


//// -기본적인 이벤트 사용
class Robot extends React.Component {
    render(){
      return (
        <button onClick={this.doAction}>Action!</button>
      )
    }
    doAction(){
      alert("ok");
    }
  }
  
  ReactDOM.render(<Robot />, document.getElementById("root"));

// -doAction  안에서 this 를 Bind 하고 싶을 때.

// ver1
doAction = () => {
    alert(this);
  }

// ver2

constructor(props) {
    super(props)
    this.doAction = this.doAction.bind(this)	// constructor 에서 bind 함.
  }
  
  doAction() {
    alert(this);
  }

//// -파라메터 전송

// 1.이벤트를 arrow function으로
class Robot extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return (
        <button onClick={() => this.doAction("run") }>Action!</button>
      )
    }
    doAction = (action)=>{
      alert(this.props.def_action + " -> " + action);
    }
  }
  
  ReactDOM.render(<Robot def_action="walk" />, document.getElementById("root"));

// 2. 이벤트에서 bind 를. 
//    위 codepen 예제에서 render 만 아래와 같이 바꾸면 됩니다.

render(){
    return (
      <button onClick={this.doAction.bind(this, "run") }>Action!</button>
    )
  }

// 주의! onClick 에서 파라메터 넘길 때 bind 를 잊지마세요~

<button onClick={this.doAction.bind(this, "run") }>Action!</button> // 버튼클릭 시 작동
 <button onClick={this.doAction(this, "run") }>Action!</button>      // 페이지 load 시 작동
// bind 키워드를 빼먹으면 페이지 load 할때 doAction 메소드가 실행됩니다.



////-------------------------------------------------------------------------////


//// -Event Object 넘기기

class Robot extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return (
        <button onClick={this.doAction.bind(this, "run") }>Action!</button>
      )
    }
    doAction = (action, lastParamIsEventObject)=>{
      alert(this.props.def_action + " -> " + action + " : " + lastParamIsEventObject.type);
    }
  }
  
  ReactDOM.render(<Robot def_action="walk" />, document.getElementById("root"));

//onClick 에서 명시적으로 event object 파라메터를 넘기지 않아도 
//마지막 파라메터로 받아서 사용할 수 있습니다.
// 명시적으로 사용한다면, 아래를 보십시오.

render(){
    return (
      <button onClick={(evnt)=>this.doAction("run", evnt) }>Action!</button>
    )
  }
