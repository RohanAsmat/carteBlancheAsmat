import React from 'react';
import CartItemHeader from '../../components/CartItemHeader';
import CartItems from '../../components/CartItems';
import CartFooter from '../../components/CartFooter';

class RightArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render () {
    const style = {
      mainCell: {
        height: '90vh',
      },
    };

    return(
      <div style={style.mainCell}>
        <CartItemHeader itemCount={this.props.itemCount} />
        <CartItems cartItems={this.props.cartItems}/>
        <CartFooter total={this.props.total} />
      </div>
    )
  }
}

export default RightArea;
