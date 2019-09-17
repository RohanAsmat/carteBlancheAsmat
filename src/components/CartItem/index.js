import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

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

    const clickMe = (sign, callBack) => (event) => {
      var tempVar = this.props.quantity

      if( Number(this.props.quantity) !== 0 && sign === '+')
        tempVar = tempVar + 1

      if( Number(this.props.quantity) !== 0 && sign === '-')
        tempVar = tempVar - 1

      if( Number(this.props.quantity) === 0 )
        tempVar = 0

      console.log("COUNTER", tempVar);
      callBack(this.props.name, tempVar)

    }

    return(
      <div style={style.mainCell}>
        <div style={style.itemTitle}>
          {this.props.name}
        </div>
        <div style={style.itemContent}>
          <span style={style.quantityStepper}>
            <span id={"plus"+this.props.name} onClick={clickMe('+', this.props.callbackFromParent)} onMouseOver={this.handleHoverPlus} onMouseLeave={this.handleHoveOutPlus} style={style.plusButton}>
              +
            </span>
            <span style={style.counterLabel}>
              {this.props.quantity}
            </span>
            <span id={"minus"+this.props.name} onClick={clickMe('-', this.props.callbackFromParent)} onMouseOver={this.handleHoverMinus} onMouseLeave={this.handleHoveOutMinus} style={style.plusButton} className={style.myButtonClass}>
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
