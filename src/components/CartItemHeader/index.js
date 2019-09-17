import React from 'react';
import MoreVert from '@material-ui/icons/MoreVert';


const CartItemHeader = props => {
  const style = {
    mainCell: {
      width: '593px',
      height: '47px',
      borderBottom: '1px solid #e5e8ec',
    },
    headerTitle: {
      float: 'left',
      paddingLeft: '80px',
      paddingTop: '14px',
      fontSize: '16px',
      fontFamily: 'Poppins',
      color: '#1d1d26'
    },
    headerExtra: {
      float: 'right',
      paddingTop: '17px',
      fontSize: '16px',
      fontFamily: 'Poppins',
      color: '#1d1d26',
      marginRight: '8px',
    },
    headerExtraIcon: {
      float: 'right',
      marginRight: '88px' ,
      color: '#E8E8EA',
      paddingTop: '14px'
    },
    itemCount: {
      marginLeft: '12px',
      borderRadius: '50%',
      height: '24px',
      width: '24px',
      backgroundColor: '#5fc47e',
      color: '#ffffff',
      fontWeight: 'bold',
      display: 'inline-flex',
    },
    text: {
      margin: '6px',
      marginLeft: '8px',
      marginTop: '3px'
    }
  }

  return (
    <div>
      <div style={style.mainCell}>
        <div style={style.headerTitle}>
          Cart Items
          <span style={style.itemCount}>
            <span style={style.text}>{props.itemCount}</span>
          </span>
        </div>
        <div style={style.headerExtraIcon}><MoreVert/></div>
        <div style={style.headerExtra}>Order Number: 004</div>
      </div>
    </div>
  );
};

export default CartItemHeader;
