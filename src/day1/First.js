import React from 'react';
import './First.css'

class First extends React.Component {

    constructor(props){
        super(props);
        this.state = {"COUNT" : 0};
    }


    render(){
        return (
            <div className="full-screen make-center textify">
                HELLO REACT!!!
            </div>
        );
    }
}

export default First;