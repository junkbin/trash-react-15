import React from 'react';

import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import './Six.css';

export default class Six extends React.Component {

    constructor(props){
        super(props);

        const postList = [1, 2, 3, 4, 5];
        this.state = {"postList" : postList};
    }

    render() {
        let allPostBox = this.state.postList.map((ielem, index)=>
            <AppArea key={index.toString()} />
        );

        return (
            <React.Fragment>
                <AppHeader />
                
                <Container fluid={true}>
                    {allPostBox}
                </Container>
            </React.Fragment>
        );
    }
}

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container fluid={true} className="mb-1">
                <Row className="top-header bg-dark">
                    <Col xs="3" className="make-left text-light text-ext-1">
                        {this.props.name}
                    </Col>
                    <Col xs="9"></Col>
                </Row>
            </Container>
        );
    }
}

AppHeader.defaultProps = {
    "name" : "Affixus"
};



class AppArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Row className="justify-content-center h-post-box mb-1">
                <Col xs="6" className="bg-light rounded text-black-50 text-ext-2 make-center">
                    {this.props.post}
                </Col>
            </Row>
        );
    }
}

AppArea.defaultProps = {
    "post" : "Hello World"
};