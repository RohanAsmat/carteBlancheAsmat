import React from 'react';
import ItemCard from '../../components/ItemCard';


const CategoryItem = props =>  {
  const style = {
    mainCell: {
      paddingLeft: '24px',
      paddingTop: '24px',
      paddingBottom: '24px'
    },
  };

  return (
    <div style={style.mainCell}>
      {props.items.map(item =>
        <ItemCard key={'itemCard'+item.name+props.id}
                  name={item.name} price={item.price}
                  quantity={item.quantity}
                  serving={item.serving}
                  callbackFromParent={props.callbackFromParent} />
      )}
    </div>
  );
};

export default CategoryItem;
