import React from 'react';
import AppBar from 'material-ui/AppBar';

const Navbar = props => {
  return (
    <AppBar showMenuIconButton={false}
            title={<span><span style={{  color: '#CFD5DD'  }}>Rest</span><span style={{  color: 'black'  }}>raunt</span></span>}
            style={{backgroundColor:'white'}}
    />
  );
};

export default Navbar;
