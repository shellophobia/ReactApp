require('../stylesheets/style.sass');
var React = require('react');
var ReactDOM = require('react-dom');

var MobileContainer = React.createClass({
  render: function() {
    return (
      <div className="mobile-container">
        <MobileSlide />
      </div>
    );
  }
});

var MobileSlide = React.createClass({
  render: function() {
    return (
      <img src="https://instagramstatic-a.akamaihd.net/bluebar/8090b48/images/homepage/screenshot4.jpg"/>
    )
  }
});

ReactDOM.render(<MobileContainer />, document.getElementById('reactContainer'));
