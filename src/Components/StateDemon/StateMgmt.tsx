import {Component} from "react";


export class StateMgmt extends Component{
    constructor(props){
        super(props);
    }
    state = {
        count: 0,
    }
    render(){
        const count = this.state.count;
        return (
            <>
                <h1>{count}</h1>
                <button onClick={() => this.setState({count: this.state.count +1})}>Plus One</button>
                <button onClick={() => this.setState({count: this.state.count -1})}>Minus One</button>
            </>
        );
    }
}

// export default StateMgmt;