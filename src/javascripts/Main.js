require('../stylesheets/style.sass');
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.js');
var Slider = require('./Slider.js');
var Stylesheet = require('stilr');

document.getElementById('ReactCss').textContent = Stylesheet.render();

ReactDOM.render(<Header />, document.getElementsByClassName('header')[0]);
ReactDOM.render(<Slider />, document.getElementsByClassName('slider')[0]);
