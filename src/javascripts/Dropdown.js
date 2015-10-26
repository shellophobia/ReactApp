var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('./StilrCSS');

var DropDown = React.createClass({
  handleClick: function(e) {
    this.props.changeCityName(e.target.textContent);
  },
  render: function() {
    var filterCities = this.props.cities.filter(function(item) {
      return this.props.currentCity !== item.CityName;
    }.bind(this));
    var itemNodes = filterCities.map(function(item) {
      return (
        <DropDownItem key = {item.CityID} name = {item.CityName}/>
      );
    });
    var className = this.props.mouseState;
    
    return (
      <ul className = {[className, styles.cityDropDownUL].join(' ')} onClick = {this.handleClick}>
        {itemNodes}
      </ul>
    );
  }
});

var DropDownItem = React.createClass({
  render: function() {
    return (
      <li className = {styles.dropDownItem} key = {this.props.key} >
        {this.props.name}
      </li>
    );
  }
});

module.exports = DropDown;
