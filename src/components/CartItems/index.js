import React from 'react';
import CartItem from '../../components/CartItem';


const CartItems = props => {
  const style = {
    mainCell: {
      overflowY: 'scroll',
      height: '45vh',
      maxHeight: '45vh',
      marginTop: '40px'
    },
    emptyCart: {
      marginLeft: '79.5px',
      marginRight: '96.5px',
      marginBottom: '16.5px',
      paddingBottom: '25.6px',
      color: '#a2acba',
    }
  };

  return(
    <div style={style.mainCell}>
      {props.cartItems.length !== 0 ?
        (props.cartItems.map(item =>
          <CartItem
            key={'cartItems'+item.name}
            callbackFromParent={props.callbackFromParent}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            serving={item.serving} />)) :
        (<span style={style.emptyCart}>Cart is Empty</span>) }
    </div>
  )
}

export default CartItems;
