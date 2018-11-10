import React from 'react';

import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Alert from 'react-bootstrap/lib/Alert'


import './Fifth.css';


class Fifth extends React.Component {

    constructor(props){
        super(props);

        const arr = [1, 2, 3, 4, 5];
        this.state = {"title" : "Koderoom 5", "dataList": arr};
    }


    render(){

        let items = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ));

        return (
            <div>
                {items}
            </div>
        );
    }
}

export default Fifth;