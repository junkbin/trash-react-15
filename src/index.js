import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import {One} from './day2'

const element = <One />;

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
