var React = require('react');
var styles = require('./StilrCSS');

module.exports = React.createClass({
  render: function() {
    return (
      <div className = {styles.lowerHeaderWrapper}>
        <ZoomLogo />
        <NavBars />
      </div>
    );
  }
});

var ZoomLogo = React.createClass({
  render: function() {
    return (
      <a href="">
        <div className = {styles.zoomLogo}></div>
      </a>
    );
  }
});

var NavBars = React.createClass({
  render: function() {
    return (
      <nav className = {styles.zoomLinks}>
        <ExtraLinks />
      </nav>
    );
  }
});

var ExtraLinks = React.createClass({
  render: function() {
    return (
      <ul className = {styles.horizontalNav}>
        <li className = {[styles.borderRight, styles.horizontalNavLi].join(' ')}>
          Tariffs&nbsp;&nbsp;
          <span className = "fa fa-angle-down"></span>
        </li>
        <li className = {styles.horizontalNavLi}>
          New to Zoomcar?&nbsp;&nbsp;
          <span className = "fa fa-angle-down"></span>
        </li>
      </ul>
    );
  }
});
