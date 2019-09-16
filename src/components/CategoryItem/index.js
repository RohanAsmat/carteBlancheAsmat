import React from 'react';
import ItemCard from '../../components/ItemCard';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  } ;

  render() {
    const style = {
      mainCell: {
        paddingLeft: '24px',
        paddingTop: '24px',
        paddingBottom: '24px'
      },
    };


    return (
      <div style={style.mainCell}>
        {this.props.items.map(item => <ItemCard key={'itemCard'+item.name+this.props.id} name={item.name} price={item.price} quantity={item.quantity} serving={item.serving} callbackFromParent={this.props.callbackFromParent} /> )}
      </div>
    );
  }
};

export default CategoryItem;
