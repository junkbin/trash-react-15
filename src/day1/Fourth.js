import React from 'react';
import './Fourth.css';

class Fourth extends React.Component {

    constructor(props){
        super(props);

        this.state = {"title" : "Koderoom"};
    }


    render(){
        return (
            <div className="full-screen make-center textify">
                KODEROOM
            </div>
        );
    }
}

export default Fourth;