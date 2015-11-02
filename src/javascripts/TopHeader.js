var React = require('react');
var styles = require('./StilrCSS');
var DropDown = require('./Dropdown');

module.exports = React.createClass({
  render: function() {
    return (
      <div className = {styles.topHeader}>
        <TopHeaderWrapper />
      </div>
    );
  }
});

var TopHeaderWrapper = React.createClass({
  render: function() {
    return (
      <div className = {styles.topHeaderWrapper}>
        <LeftHeaderPart />
        <RightHeaderPart />
      </div>
    );
  }
})

var LeftHeaderPart = React.createClass({
  render: function() {
    return (
      <div className = {styles.leftHeaderPart}>
        <CityDropDown url="/city.json"/>
      </div>
    );
  }
});

var RightHeaderPart = React.createClass({
  render: function() {
    return (
      <div className = {styles.rightHeaderPart}>
        <MobileIcons />
        <DealShack />
        <ZoomCommute />
        <Offers />
        <Notifications />
        <UserStatus />
      </div>
    );
  }
});

var CityDropDown = React.createClass({
  getInitialState: function() {
    return {
      cityHash : [],
      currentCity : '',
      mouseState : 'hide'
    };
  },
  fetchCityList: function() {
    $.ajax({
      url: this.props.url,
      type: 'GET',
      dataType: 'JSON'
    }).done(function(response) {
      if (this.isMounted()) {
        this.setState({cityHash: response.cities});
        this.setState({currentCity: response.cities[0].CityName})
      }
    }.bind(this));
  },
  changeCityName: function(cityName) {
    this.setState({currentCity: cityName});
  },
  handleMouseOver: function() {
    this.setState({mouseState: 'show'});
  },
  handleMouseOut: function() {
    this.setState({mouseState: 'hide'});
  },
  componentDidMount: function() {
    this.fetchCityList();
  },
  render: function() {
    var currentCity = 'Loading..';
    var cities = [];
    return (
      <div className = {styles.cityDropDown} onMouseOver = {this.handleMouseOver} onMouseOut = {this.handleMouseOut}>
        <div className = {styles.selectedCity}>
          <span className = {styles.selectedCityName}>{this.state.currentCity}</span>
          <span className = "fa fa-angle-down down-arrow"></span>
        </div>
        <DropDown cities = {this.state.cityHash} currentCity = {this.state.currentCity} mouseState = {this.state.mouseState} changeCityName = {this.changeCityName}/>
      </div>
    );
  }
});

var MobileIcons = React.createClass({
  render: function() {
    return (
      <div className = {[styles.rightHeaderElement, styles.mobileIcons].join(' ')}>
        <a href = "javascript:void(0)" className = "fa fa-apple a-icon" />
        <a href = "javascript:void(0)" className = "fa fa-android a-icon" />
      </div>
    );
  }
});

var DealShack = React.createClass({
  render: function() {
    return (
      <div className = {[styles.rightHeaderElement, styles.dealShack].join(' ')}>
        <a href = "javascript:void(0)">
          <span className = {styles.dealShackIcon}></span>
          <span> Deal Shack </span>
        </a>
      </div>
    );
  }
});

var ZoomCommute = React.createClass({
  render: function() {
    return (
      <div className = {styles.rightHeaderElement}>
        <a href="javascript:void(0)" className = {styles.zoomCommute}>Zoom Commute</a>
      </div>
    );
  }
});

var Offers = React.createClass({
  render: function() {
    return (
      <div className = {[styles.rightHeaderElement, styles.offers].join(' ')}>
      <a href = "javascript:void(0)">
        <span className = {styles.offersIcon}></span>
        <span> Offers </span>
      </a>
      </div>
    );
  }
});

var Notifications = React.createClass({
  getInitialState: function() {
    return {clicked: false}
  },
  handleClick: function(e) {
    e.preventDefault();
    this.setState({clicked: !this.state.clicked});
  },
  render: function() {
    return (
      <div className = {styles.notifications} onClick = {this.handleClick}>
        <a href="javascript:void(0)" className = "bell-icon fa fa-bell dropdown" />
        <NotificationDropdown clicked = {this.state.clicked}/>
      </div>
    );
  }
});

var NotificationDropdown = React.createClass({
  render: function() {
    var className = '';
    if (this.props.clicked) {
      className = 'show';
    }
    else {
      className = 'hide';
    }
    return (
      <ul className = {[className, styles.cityDropDownUL, styles.notificationDropDownUL].join(' ')}>
        <li className = {styles.dropDownItem}>You have no notifications. Cheers :)</li>
      </ul>
    );
  }
});

var UserStatus = React.createClass({
  render: function() {
    return (
      <div className = {styles.userStatus}>
        <a href="javascript:void(0)">Signup | </a>
        <a href="javascript:void(0)">Login</a>
      </div>
    );
  }
});
