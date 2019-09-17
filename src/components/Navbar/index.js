import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Notification from '@material-ui/icons/NotificationsNone';


const Navbar = props => {
  const style = {
      mainCell: {
        marginLeft: '79.5px',
        marginRight: '96.5px',
        marginBottom: '16.5px',
        paddingBottom: '25.6px',
        borderBottom: '1px solid #e5e8ec'
      },
      profileButton: {
        backgroundColor: '#5bbc79',
        color: 'white',
        fontSize: '13px',
        fontFamily: 'Poppins',
        textAlign: 'left',
        width: '159px',
        fontWeight: '500',
      }
    };

  return (
    <AppBar showMenuIconButton={false}
            title={<span><span style={{  color: '#CFD5DD'  }}>Rest</span>
                         <span style={{  color: 'black'  }}>raunt</span>
                   </span>}
            style={{backgroundColor:'white', paddingRight:'0px'}}
    >
    <Toolbar style={{backgroundColor:'#54ad70', width:'24px'}}>
      <Notification style={{color:'white'}} />
    </Toolbar>
    <Toolbar style={{backgroundColor:'#5bbc79'}}>
      <span style={style.profileButton}>
        <span style={style.profileName}>Adam Lane</span>
        <span style={style.profilePic}>
        <Avatar alt="Adam Lane" src="../../images/1.png"  />
        </span>
      </span>
    </Toolbar>
    </AppBar>

  );
};

export default Navbar;
