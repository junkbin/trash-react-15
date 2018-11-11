import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './1.css';

export default class RoutingBasics extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Index} />
                    <Route path="/index" component={Index} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/gallery" component={Gallery} />
                </div>
            </Router>
        );
    }
}

let Index = (props)=>{
    return (
        <div className="full-screen make-center text-ext-2 bgfy-primary">
                Indexx!!
        </div>
    );
}

let Profile = ()=>{
    return (
        <div className="full-screen make-center text-ext-2 bgfy-secondary">
                Profilee!!
        </div>
    );
}

let Gallery = (props)=>{
    return (
        <div className="full-screen make-center text-ext-2 bgfy-info">
                Galleryy!!
        </div>
    );
}
