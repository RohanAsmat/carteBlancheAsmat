import React from 'react';
import CartItemHeader from '../../components/CartItemHeader';
import CartItems from '../../components/CartItems';
import CartFooter from '../../components/CartFooter';


const RightArea = props => {
    const style = {
      mainCell: {
        height: '90vh',
      },
    };

    return(
      <div style={style.mainCell}>
        <CartItemHeader itemCount={props.itemCount} />
        <CartItems callbackFromParent={props.callbackFromParent}
                   cartItems={props.cartItems}/>
        <CartFooter total={props.total} />
      </div>
    )
}

export default RightArea;
