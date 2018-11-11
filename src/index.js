import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import {HashRoutingBasics} from './day2'

const element = <HashRoutingBasics />;

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
