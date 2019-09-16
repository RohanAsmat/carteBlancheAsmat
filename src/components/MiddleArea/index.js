import React from 'react';
import SearchBar from '../../components/SearchBar';
import CategoryItem from '../../components/CategoryItem';

class MiddleArea extends React.Component {
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
        width: '433px'
      }
    };

    return(
      <div style={style.main}>
        <SearchBar cartItems={this.props.searchCategories } activeCell={this.props.activeCell} callbackFromParentForSearch={this.props.searchCallback} />

        {this.props.activeCategories || this.props.categories.map(CATEGORIES => (CATEGORIES.name === this.props.activeCell ? (<CategoryItem key={'categoryItems'+CATEGORIES.name} items={CATEGORIES.item} callbackFromParent={this.props.callbackFromParent} id="1" />) : ('') ) )}
        {this.props.activeCategories === true ? ( <CategoryItem key={'categoryItemsSearch'+this.props.activeCell+this.props.activeCategories} items={this.props.searchCategories } callbackFromParent={this.props.callbackFromParent} id="2" />) : ('')}

      </div>
    )
  }
}

export default MiddleArea;
