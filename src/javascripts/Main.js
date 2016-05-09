require('../stylesheets/style.sass');
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Slider = require('./Slider');
var Stylesheet = require('stilr');
var GMaps = require('./GMap');

document.getElementById('ReactCss').textContent = Stylesheet.render();

ReactDOM.render(<Header />, document.querySelector('.header'));
ReactDOM.render(<Slider />, document.querySelector('.slider'));
ReactDOM.render(<GMaps />, document.querySelector('.gmap'));
