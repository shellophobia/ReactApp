var React = require('react');
var styles = require('./StilrCSS');

var DropDown = React.createClass({
  
  render: function() {
    var itemNodes = this.props.cities.map(function(item) {
      return (
        <li className = {styles.dropDownItem} key={item.CityID} onClick = {this.handleClick}>
          {item.CityName}
        </li>
      );
    });
    var className = this.props.mouseState;
    
    return (
      <ul className = {[className, styles.cityDropDownUL].join(' ')}>
        {itemNodes}
      </ul>
    );
  }
});

module.exports = DropDown;
