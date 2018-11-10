import React from 'react';

import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import './Six.css';

export default class Six extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <AppHeader />

                <AppHeader name="Brand B" />

                <AppHeader />
            </div>
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
                    <Col xs="3" className="make-left text-light text-primary">
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
