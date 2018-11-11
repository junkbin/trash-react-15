import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import {RoutingBasics} from './day2'

const element = <RoutingBasics />;

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
