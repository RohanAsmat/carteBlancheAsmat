import React from 'react';
import CategoriesCellHeader from '../../components/CategoriesCellHeader';
import CategoriesCell from '../../components/CategoriesCell';


const LeftArea = props => {
  const style = {
    main:{
      borderRight: "1px solid #e5e8ec",
      minHeight: "90vh",
      width: '255.5px',
    }
  };

  return(
    <div style={style.main}>
      <CategoriesCellHeader count={props.categories.length}/>
      {props.categories.map(categories =>
        <CategoriesCell key={'categoriesCell'+categories.name}
                        name={categories.name}
                        callbackFromParent={props.callbackFromParent}
                        activeCell={props.activeCell} />)}
    </div>
  )
}

export default LeftArea;
