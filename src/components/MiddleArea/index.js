import React from 'react';
import SearchBar from '../../components/SearchBar';
import CategoryItem from '../../components/CategoryItem';


const MiddleArea = props => {
  const style = {
    main:{
      borderRight: "1px solid #e5e8ec",
      minHeight: "90vh",
      width: '433px'
    }
  };

  return(
    <div style={style.main}>
      <SearchBar cartItems={props.searchCategories }
                 activeCell={props.activeCell}
                 callbackFromParentForSearch={props.searchCallback} />

      {props.activeCategories || props.categories.map(CATEGORIES =>
        (CATEGORIES.name === props.activeCell ?
          (<CategoryItem key={'categoryItems'+CATEGORIES.name}
                         items={CATEGORIES.item}
                         callbackFromParent={props.callbackFromParent} />)
          : ('') ) )}
      {props.activeCategories === true ?
        (<CategoryItem
          key={'categoryItemsSearch'+props.activeCell+props.activeCategories}
          items={props.searchCategories }
          callbackFromParent={props.callbackFromParent} />)
        : ('')}
    </div>
  )
}

export default MiddleArea;
