import React from 'react';
import Button from '@material-ui/core/Button';

class CartFooter extends React.Component {
  render () {
    const style = {
      mainCell: {
        paddingLeft: '79.5px',
        paddingTop: '40px',
        paddingRight: '96.5px',
        paddingBottom: '56px',
        bottom: '0px',
      },
      total: {
        backgroundColor: '#edeff0',
        width: '424px',
        height: '48px',
        borderRadius: '2px'
      },
      signifierText: {
        float: 'left',
        paddingLeft: '25.1px',
        paddingTop: '13px',
        color: '#1d1d26',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: 'Roboto',
      },
      totalPrice: {
        float: 'right',
        paddingRight: '18.3px',
        paddingTop: '13px',
        color: '#1d1d26',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: 'Roboto',
      },
      cartActions: {
        paddingTop: '24px',
      },
      cancelButton: {
        height: '48px',
        width: '192px',
        border: '1px solid #ef5350',
        color: '#ef5350',
        fontSize: '13px',
        fontFamily: 'Roboto',
        marginRight: '40px'
      },
      proceedButton: {
        height: '48px',
        width: '192px',
        color: '#ffffff',
        backgroundColor: '#5fc47e',
        fontSize: '13px',
        fontFamily: 'Roboto',
      }
    };

    return(
      <div style={style.mainCell}>
        <div style={style.total}>
          <span style={style.signifierText}>
            Grand Total
          </span>
          <span style={style.totalPrice}>
            RS {this.props.total}
          </span>
        </div>
        <div style={style.cartActions}>
          <Button variant="outlined" color="secondary" style={style.cancelButton}>
            Cancel
          </Button>
          <Button variant="contained" style={style.proceedButton}>
            Proceed
          </Button>
        </div>
      </div>
    )
  }
}

export default CartFooter;
