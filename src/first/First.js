import React from 'react';

export class First extends React.Component {

    constructor(props){
        super(props);
        this.state = {"COUNT" : 0};
    }


    render(){
        return (
            <div>
                HELLO WORLD!!!
            </div>
        );
    }
}