var GMaps = require('react-gmaps');

var coords = {
  lat: 13.011803989732025,
  lng: 77.55847051666933
};

module.exports = React.createClass({
  
  onMapCreated: function(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },
  
  render: function() {
    
  }
  
});
