import React from 'react';

import './Second.css';

class Second extends React.Component{

    constructor(props){
        super(props);

        this.state = {"COUNTER" : 0};
    }

    render(){
        return (
            <div className="full-screen make-center textify">
                COUNTER {this.state.COUNTER}
            </div>
        );
    }
}


export default Second;