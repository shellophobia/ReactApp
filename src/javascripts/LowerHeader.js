var React = require('react');
var ReactDOM = require('react-dom');
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
      <a href="javascript:void(0)">
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
  handleClick: function(liText) {
    if (liText === 'tariff') {
      this.refs.item1.hide();
      this.refs.item0.show();
    }
    else if (liText === 'newtozoom') {
      this.refs.item0.hide();
      this.refs.item1.show();
    }
    else {
      this.refs.item0.hide();
      this.refs.item1.hide();
    }
  },
  handleOutClick: function(e) {
    if ($(e.target).parents('.dropdown').length == 0) {
      this.handleClick('hideAll');
    }
  },
  componentDidMount: function() {
    document.addEventListener('click', this.handleOutClick);
  },
  componentWillUnmount: function() {
    //document.removeEventListener('click', this.handleClick(this, 'out'));
  },
  render: function() {
    var tariffChild = ['Cars And Tariffs', 'How Billing Works?'];
    var newZoomChild = ['How Zoomcar Works', 'FAQ', 'Going Outstation?'];
    return (
      <ul className = {styles.horizontalNav}>
        <li className = {[styles.borderRight, styles.horizontalNavLi, 'dropdown'].join(' ')} onClick = {this.handleClick.bind(this, 'tariff')}>
          <a href = "javascript:void(0)" className = "text-black">
            Tariffs&nbsp;&nbsp;
            <span className = "fa fa-angle-down"></span>
          </a>
          <VerticalDropdown data = {tariffChild} ref = {'item0'}/>
        </li>
        <li className = {[styles.horizontalNavLi, 'dropdown'].join(' ')} onClick = {this.handleClick.bind(this, 'newtozoom')}>
          <a href = "javascript:void(0)" className = "text-black">
            New to Zoomcar?&nbsp;&nbsp;
            <span className = "fa fa-angle-down"></span>
          </a>
          <VerticalDropdown data = {newZoomChild} ref = {'item1'}/>
        </li>
      </ul>
    );
  }
});

var VerticalDropdown = React.createClass({
  show: function() {
    this.refs.item.style.display = "block";
  },
  hide: function() {
    this.refs.item.style.display = "none";
  },
  render: function() {
    var itemNodes = this.props.data.map(function(item, i) {
      return (
        <li className = {styles.dropDownItem} key = {i}>
          {item}
        </li>
      );
    });
    return (
      <ul className = {styles.cityDropDownUL} style = {{display: 'none'}} ref = "item">
        {itemNodes}
      </ul>
    );
  }
});
