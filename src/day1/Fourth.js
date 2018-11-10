import React from 'react';
import './Fourth.css';

class Fourth extends React.Component {

    constructor(props){
        super(props);

        this.state = {"title" : "Koderoom"};
    }


    render(){
        const arr = [1, 2, 3, 4, 5];
        const elementList = arr.map((ielem, index)=>
            <div key={index.toString()}>
                {ielem}
            </div>
        );

        return (
            <div className="full-screen make-center textify">
                {elementList}
            </div>
        );
    }
}

export default Fourth;