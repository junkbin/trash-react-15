import React from 'react';
import './1.css';

export default class RoutingBasics extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Index />
        );
    }
}

let Index = (props)=>{
    return (
        <div className="full-screen make-center text-ext-2 bgfy-primary">
                HELLO INDEX!!
        </div>
    );
}

let Profile = ()=>{
    return (
        <div className="full-screen make-center text-ext-2 bgfy-secondary">
                HELLO Profile!!
        </div>
    );
}

let Gallery = (props)=>{
    return (
        <div className="full-screen make-center text-ext-2 bgfy-primary">
                HELLO Gallery!!
        </div>
    );
}
