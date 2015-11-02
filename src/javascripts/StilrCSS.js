var StyleSheet = require('stilr');
var hover = ':hover';

module.exports = StyleSheet.create({
  topHeader: {
    background: '#2c333d',
    height: '30px',
    fontSize: '13px',
    width: '100%',
    color: '#fff'
  },
  
  topHeaderWrapper: {
    width: '960px',
    margin: '0 auto'
  },
  
  leftHeaderPart: {
    float: 'left'
  },
  
  rightHeaderPart: {
    float: 'right',
    marginTop: '2px'
  },
  
  rightHeaderElement: {
    float: 'left',
    paddingLeft: '10px',
    paddingRight: '10px' 
  },
  
  cityDropDown: {
    display: 'inline-block',
    width: '160px',
    position: 'relative'
  },
  
  selectedCity: {
    background: '#666',
    borderRadius: '2px',
    padding: '5px',
    height: '20px'
  },
  
  selectedCityName: {
    paddingLeft: '15px'
  },
  
  mobileIcons: {
    paddingTop: '2px'
  },
  
  dealShack: {
    paddingTop: '4px',
    paddingBottom: '7px'
  },
  
  dealShackIcon: {
    background: 'url(http://assets.zoomcar.com/assets/icons_sprite_web2-432754eafa7da3f22de4444322a8bf5a.png)',
    width: '20px',
    height: '16px',
    marginRight: '5px',
    backgroundPosition: '-28px 0',
    display: 'block',
    float: 'left'
  },
  
  zoomCommute: {
    borderTop: '2px dotted',
    borderBottom: '2px dotted',
    borderColor: '#6abd19',
    marginTop: '2px',
    display: 'block'
  },
  
  offersIcon: {
    background: 'url(http://assets.zoomcar.com/assets/icons_sprite_web2-432754eafa7da3f22de4444322a8bf5a.png)',
    width: '20px',
    height: '16px',
    display: 'block',
    backgroundPosition: '-206px 0',
    float: 'left',
    marginRight: '5px'
  },
  
  offers: {
    paddingTop: '4px',
    paddingBottom: '7px'
  },
  
  notifications: {
    paddingTop: '4px',
    paddingBottom: '7px',
    paddingRight: '10px',
    float: 'left',
    position: 'relative'
  },
  
  userStatus: {
    float: 'left',
    paddingTop: '4px'
  },
  
  lowerHeaderWrapper: {
    width: '960px',
    margin: '0 auto',
    padding: '15px 0px'
  },
  
  zoomLogo: {
    background: 'url(http://assets.zoomcar.com/assets/logo_color-c9a0b6257df4bd93ba579bcd92abed04.png) no-repeat',
    width: '160px',
    height: '48px',
    float: 'left',
    backgroundSize: '100%'
  },
  
  zoomLinks: {
    float: 'right'
  },
  
  horizontalNav: {
    marginTop: '10px',
    listStyle: 'none'
  },
  
  horizontalNavLi: {
    float: 'left',
    padding: '0px 10px',
    position: 'relative'
  },
  
  borderRight: {
    borderRight: '1px solid #ccc'
  },
  
  cityDropDownUL: {
    position: 'absolute',
    left: '0',
    minWidth: '158px',
    fontSize: '14px',
    background: '#fff',
    borderRadius: '2px',
    border: '1px solid #ccc'
  },
  
  dropDownItem: {
    background: '#fff',
    color: '#222',
    [hover]: {
      background: '#4a4a4a',
      color: '#fff'
    },
    padding: '5px 20px',
    borderBottom: '1px solid #ccc',
    cursor: 'pointer'
  },
  
  notificationDropDownUL: {
    top: '28px',
    fontSize: '11px',
    zIndex: '10'
  }
  
});
