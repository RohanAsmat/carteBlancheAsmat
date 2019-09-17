import React from 'react';


const CartItem = props => {
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
      counterLabel: {
        backgroundColor: '#ffffff',
        color: '#111111',
        fontSize: '10px',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '8px',
        paddingBottom: '8px'
      }
    };

    this.handleHoverPlus = () => {
      document.getElementById('plus'+props.name).style.backgroundColor = '#FFFFF4' ;
    };
    this.handleHoveOutPlus = () => {
      document.getElementById('plus'+props.name).style.backgroundColor = '#f0f0f2' ;
    }
    this.handleHoverMinus = () => {
      document.getElementById('minus'+props.name).style.backgroundColor = '#FFFFF4' ;
    };
    this.handleHoveOutMinus = () => {
      document.getElementById('minus'+props.name).style.backgroundColor = '#f0f0f2' ;
    }

    const clickMe = (sign, callBack) => (event) => {
      var tempVar = props.quantity

      if( Number(props.quantity) !== 0 && sign === '+')
        tempVar = tempVar + 1
      if( Number(props.quantity) !== 0 && sign === '-')
        tempVar = tempVar - 1
      if( Number(props.quantity) === 0 )
        tempVar = 0

      callBack(props.name, tempVar)
    }

    return(
      <div style={style.mainCell}>
        <div style={style.itemTitle}>{props.name}</div>
        <div style={style.itemContent}>
          <span style={style.quantityStepper}>
            <span id={"plus"+props.name}
                  onClick={clickMe('+', props.callbackFromParent)}
                  onMouseOver={this.handleHoverPlus}
                  onMouseLeave={this.handleHoveOutPlus}
                  style={style.plusButton}>+</span>
            <span style={style.counterLabel}>{props.quantity}</span>
            <span id={"minus"+props.name}
                  onClick={clickMe('-', props.callbackFromParent)}
                  onMouseOver={this.handleHoverMinus}
                  onMouseLeave={this.handleHoveOutMinus}
                  style={style.plusButton}
                  className={style.myButtonClass}>-</span>
          </span>
          <span style={style.serving}>{props.serving}</span>
          <span style={style.total}>
            <div>Total</div>
            <div style={style.totalPrice}>RS {props.price*props.quantity}</div>
          </span>
        </div>
      </div>
    )
}

export default CartItem;
