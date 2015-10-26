var React = require('react');
var styles = require('./StilrCSS');
var TopHeader = require('./TopHeader');
var LowerHeader = require('./LowerHeader');

module.exports = React.createClass({
  render: function() {
    return (
      <header>
        <TopHeader />
        <LowerHeader />
      </header>
    );
  }
});
