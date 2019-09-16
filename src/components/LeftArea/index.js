import React from 'react';
import CategoriesCellHeader from '../../components/CategoriesCellHeader';
import CategoriesCell from '../../components/CategoriesCell';

class LeftArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render () {
    const style = {
      main:{
        borderRight: "1px solid #e5e8ec",
        minHeight: "90vh",
        width: '255.5px',
      }
    };

    return(
      <div style={style.main}>
        <CategoriesCellHeader count={this.props.categories.length}/>
        {this.props.categories.map(categories => <CategoriesCell key={'categoriesCell'+categories.name} name={categories.name} callbackFromParent={this.props.callbackFromParent} activeCell={this.props.activeCell} />)}
      </div>
    )
  }
}

export default LeftArea;
