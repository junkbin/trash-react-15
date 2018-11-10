import React from 'react';
import './Fifth.css';

class Fifth extends React.Component {

    constructor(props){
        super(props);

        const arr = [1, 2, 3, 4, 5];
        this.state = {"title" : "Koderoom 5", "dataList": arr};
    }


    render(){

        return (
            <div className="full-screen make-center textify">
                {this.state.title}
            </div>
        );
    }
}

export default Fifth;