import React from 'react';
import './Third.css';

class Third extends React.Component {

    constructor(props){
        super(props);

        this.state = {"counter" : 1};
    }

    render() {
        return (
            <div className="full-screen make-center textify">
                <span className="span make-center">{this.state.counter}</span>
                <button className="btn">CLICK MEE</button>
            </div>
        );
    }

}

export default Third;