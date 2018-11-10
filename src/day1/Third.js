import React from 'react';
import './Third.css';

class Third extends React.Component {

    constructor(props){
        super(props);

        this.state = {"counter" : 1};

        this.increment = this.increment.bind(this);
    }

    increment() {
        console.log(this.state.counter, new Date());
    }

    render() {
        return (
            <div className="full-screen make-center textify">
                <span className="span make-center">{this.state.counter}</span>
                <button className="btn" onClick={this.increment}>CLICK ME 1</button>
                <button className="btn" onClick={this.increment.bind(this)}>CLICK ME 2</button>
                <button className="btn" onClick={(e)=> {this.increment(e)}}>CLICK ME 3</button>
            </div>
        );
    }

}

export default Third;