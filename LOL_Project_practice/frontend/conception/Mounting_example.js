// lifecycletest.js

import React from 'react';

const tag = "LifeCycleTest";
class LifeCycleTest extends React.Component {
    constructor(props) {                                        // 1번
        console.log(tag + ":constructor()");        
        super(props);
        this.state = {gender:"man", age:props.age, tall:180};
    }

    render(){                                                   // 3번 , 7번
        console.log(tag + ":render()");
        return (
            <div>
                <p>My tall is {this.state.tall}cm</p>
                <p>I am a {this.state.gender}.</p>
                <p>I am {this.state.age} years old.</p>
            </div>
        )
    }

    static getDerivedStateFromProps(props, state){              // 2번 , 6번(render 실행하러 가다가 발견해서 실행)
        console.log(tag + ":getDerivedStateFromProps()");
        return {age: state.age + 10};
    }

    componentDidMount(){                                        // 4번
        console.log(tag + ":componentDidMount()");
        setTimeout(()=>{                                        // 5번
            this.setState({age: this.state.age + 10});
        }, 1000)
    }
}

export default LifeCycleTest;

// index.js
import LifeCycleTest from "./lifecycletest";
ReactDOM.render(<LifeCycleTest age={20} />, document.getElementById('root') // 이렇게 사용

