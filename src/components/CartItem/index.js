import React from 'react';
import Button from '@material-ui/core/Button';

class CartItem extends React.Component {
  render () {
    const style = {
      mainCell: {
        marginLeft: '79.5px',
        marginRight: '96.5px',
        marginBottom: '16.5px',
        paddingBottom: '25.6px',
        borderBottom: '1px solid #e5e8ec'
      },
      itemTitle: {
        fontSize: '16px',
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#1d1d26',
        paddingBottom: '7.5px'
      },
      serving: {
        fontSize: '13px',
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#1d1d26',
        marginLeft: '124.5px'
      },
      total: {
        float: 'right',
        color: '#a2acba',
        fontSize: '13px',
        fontFamily: 'Poppins'
      },
      totalPrice: {
        fontSize: '15px',
        color: '#1d1d26',
      },
      plusButton: {
        height: '23px',
        maxWidth: '24px',
        padding: '6px',
        color: 'black',
        fontSize: '13px',
        fontFamily: 'Roboto',
        backgroundColor: '#f0f0f2'
      },
    };

    this.handleHoverPlus = () => {
      document.getElementById('plus'+this.props.name).style.backgroundColor = '#FFFFF4' ;
    };
    this.handleHoveOutPlus = () => {
      document.getElementById('plus'+this.props.name).style.backgroundColor = '#f0f0f2' ;
    }
    this.handleHoverMinus = () => {
      document.getElementById('minus'+this.props.name).style.backgroundColor = '#FFFFF4' ;
    };
    this.handleHoveOutMinus = () => {
      document.getElementById('minus'+this.props.name).style.backgroundColor = '#f0f0f2' ;
    }

    return(
      <div style={style.mainCell}>
        <div style={style.itemTitle}>
          {this.props.name}
        </div>
        <div style={style.itemContent}>
          <span style={style.quantityStepper}>
            <span id={"plus"+this.props.name} onMouseOver={this.handleHoverPlus} onMouseLeave={this.handleHoveOutPlus} style={style.plusButton}>
            +
            </span>
            <span id={"minus"+this.props.name} onMouseOver={this.handleHoverMinus} onMouseLeave={this.handleHoveOutMinus} style={style.plusButton} className={style.myButtonClass}>
            -
            </span>
          </span>
          <span style={style.serving}>{this.props.serving}</span>
          <span style={style.total}>
            <div>Total</div>
            <div style={style.totalPrice}>RS {this.props.price*this.props.quantity}</div>
          </span>
        </div>
      </div>
    )
  }
}

export default CartItem;
