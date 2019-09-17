import React from 'react';
import CartItem from '../../components/CartItem';

class CartItems extends React.Component {
  render () {
    const style = {
      mainCell: {
        overflowY: 'scroll',
        height: '45vh',
        maxHeight: '45vh',
        marginTop: '40px'
      },
    };

    return(
      <div style={style.mainCell}>
        {this.props.cartItems.map(item => <CartItem key={'cartItems'+item.name} callbackFromParent={this.props.callbackFromParent} name={item.name} price={item.price} quantity={item.quantity} serving={item.serving} />)}
      </div>
    )
  }
}

export default CartItems;
