import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Six} from './day1'

const element = <Six />;

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
