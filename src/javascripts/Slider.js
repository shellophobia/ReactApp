var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className = "mobile-container">
        <MobileSlide />
      </div>
    );
  }
});

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var MobileSlide = React.createClass({
  mixins: [SetIntervalMixin],
  
  getInitialState: function() {
    return {imgIndex : 1, url: 'https://instagramstatic-a.akamaihd.net/bluebar/8090b48/images/homepage/screenshot'};
  },
  
  componentDidMount: function() {
    this.setInterval(this.changeImg,2000);
  },
  
  changeImg: function() {
    this.setState({imgIndex: this.state.imgIndex + 1});
    if (this.state.imgIndex == 5) {
      this.setState({imgIndex: 1});
    }
  },
  
  render: function() {
    var divImage = {
      backgroundImage: "url(" + this.state.url + this.state.imgIndex + ".jpg)"
    };
    return (
      <div className="mobile-img" style = {divImage}></div>
    )
  }
});
