/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

import React from 'react';
import ReactDOM from 'react-dom';


import App from './App.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import 'animate.css/animate.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js/dist/popper';

document.title = 'Portfolio Nazam';

ReactDOM.render( < App / > , document.getElementById('root'));
