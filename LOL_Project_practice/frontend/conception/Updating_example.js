//// shouldComponentUpdate
// lifecycletest.js

import React from 'react';

const tag = "LifeCycleTest";
class LifeCycleTest extends React.Component {
    constructor(props) {                                        // 
        console.log(tag + ":constructor()");        
        super(props);
        this.state = {gender:"man", age:props.age, tall:180};
    }

    render(){                                                   // 
        console.log(tag + ":render()");
        return (
            <div>
                <p>My tall is {this.state.tall}cm</p>
                <p>I am a {this.state.gender}.</p>
                <p>I am {this.state.age} years old.</p>
            </div>
        )
    }

    static getDerivedStateFromProps(props, state){              // 
        console.log(tag + ":getDerivedStateFromProps()");
        return {age: state.age + 10};
    }

    componentDidMount(){                                        // 
        console.log(tag + ":componentDidMount()");
        setTimeout(()=>{                                        // 
            this.setState({age: this.state.age + 10});
        }, 1000)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

export default LifeCycleTest;

// index.js
import LifeCycleTest from "./lifecycletest";
ReactDOM.render(<LifeCycleTest age={20} />, document.getElementById('root') // 이렇게 사용




//---------------------------------------------------------------------------------------------//



//// getSnapshotBeforeUpdate
// lifecycletest.js

const tag = "LifeCycleTest";
class LifeCycleTest extends React.Component {
    constructor(props) {                                        // 
        console.log(tag + ":constructor()");        
        super(props);
        this.state = {gender:"man", age:props.age, tall:180};
    }

    render(){                                                   // 
        console.log(tag + ":render()");
        return (
            <div>
                <p>My tall is {this.state.tall}cm</p>
                <p>I am a {this.state.gender}.</p>
                <p>I am {this.state.age} years old.</p>
            </div>
        )
    }

    static getDerivedStateFromProps(props, state){              // 
        console.log(tag + ":getDerivedStateFromProps()");
        return {age: state.age + 10};
    }

    componentDidMount(){                                        // 
        console.log(tag + ":componentDidMount()");
        setTimeout(()=>{                                        // 
            this.setState({age: this.state.age + 10});
        }, 1000)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("bf_age").innerHTML = "Before age is " + prevState.age;
    }
}

export default LifeCycleTest;

// index.js
import LifeCycleTest from "./lifecycletest";
ReactDOM.render(<LifeCycleTest age={20} />, document.getElementById('root') // 이렇게 사용


//---------------------------------------------------------------------------------------------//
 
//// Unmmounting
// lifecycletest.js ver1


import React from 'react';

const tag = "LifeCycleTest";
class LifeCycleTest extends React.Component {
    constructor(props) {
        console.log(tag + ":constructor()");        
        super(props);
        this.state = {gender:"man", age:props.age, tall:180};
    }

    render(){
        console.log(tag + ":render()");
        let footer;
        if(this.state.age < 50)
            footer = <Footer />;
        return (
            <div>
                <p>My tall is {this.state.tall}cm</p>
                <p>I am a {this.state.gender}.</p>
                <p>I am {this.state.age} years old.</p>
                <span id="bf_age"></span>
                {footer}
            </div>
        )
    }

    static getDerivedStateFromProps(props, state){              // 
        console.log(tag + ":getDerivedStateFromProps()");
        return {age: state.age + 10};
    }

    componentDidMount(){                                        // 
        console.log(tag + ":componentDidMount()");
        setTimeout(()=>{                                        // 
            this.setState({age: this.state.age + 10});
        }, 1000)
    }
}

class Footer extends React.Component {
    render(){
        return <h2>hey~ footer</h2>
    }

    componentWillUnmount() {
        alert('footer will be disappeared.');
    }
}

export default LifeCycleTest;

// index.js
import LifeCycleTest from "./lifecycletest";
ReactDOM.render(<LifeCycleTest age={20} />, document.getElementById('root') // 이렇게 사용


//ver2 ver1과 비교해서 무엇이 맞는건지???

import React from 'react';

const tag = "LifeCycleTest";
class LifeCycleTest extends React.Component {
    constructor(props) {
        console.log(tag + ":constructor()");
        super(props);
        this.state = {gender:"man", age:props.age, tall:180};
    }

    render(){
        console.log(tag + ":render()");
        let footer;
        if(this.state.age < 50)
            footer = <Footer />;
        return (
            <div>
                <p>My tall is {this.state.tall}cm</p>
                <p>I am a {this.state.gender}.</p>
                <p>I am {this.state.age} years old.</p>
                <span id="bf_age"></span>
                {footer}
            </div>
        )
    }

    static getDerivedStateFromProps(props, state){
        console.log(tag + ":getDerivedStateFromProps()");
        return {age: state.age + 10};
    }

    componentDidMount(){
        console.log(tag + ":componentDidMount()");
        setTimeout(()=>{
            this.setState({age: this.state.age + 10});
        }, 1000)
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("bf_age").innerHTML = "Before age is " + prevState.age;
    }
}

class Footer extends React.Component {
    render(){
        return <h2>hey~ footer</h2>
    }

    componentWillUnmount() {
        alert('footer will be disappeared.');
    }
}

export default LifeCycleTest;