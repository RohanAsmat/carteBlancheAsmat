import React from 'react';
import Grid from '@material-ui/core/Grid';
import LeftArea from '../../components/LeftArea';
import RightArea from '../../components/RightArea';
import MiddleArea from '../../components/MiddleArea';
import {CATEGORIES} from '../../data/categories';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCell: CATEGORIES[0].name,
      categories: CATEGORIES,
      cartItems: [],
      searchCategories: CATEGORIES[0].item,
      activeCategories: false,
      total: 0.00,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeCell !== this.state.activeCell)
    {
      var tempSearchCategories = []
      for( var i = 0 ; i < this.state.categories.length ; i++ )
        if( this.state.activeCell === this.state.categories[i].name )
          tempSearchCategories = this.state.categories[i].item

      this.setState({searchCategories: tempSearchCategories})
    }
  }

  leftAreaCallback = (cellNameFromChild) => {
    // updating list for search categories and active cell
    var tempSearchCategories = this.state.searchCategories

    for( var i = 0 ; i < this.state.categories.length ; i++ )
      if( cellNameFromChild === this.state.categories[i].name )
        tempSearchCategories = this.state.categories[i].item

    this.setState({activeCell: cellNameFromChild,
                   searchCategories: tempSearchCategories,
                   activeCategories:false})
  }

  middleAreaCallback = (cellNameFromChild, price, quantity, serving) => {
    // updating quantity in categories and categories
    var tempCategoriesState = this.state.categories;

    for( var i = 0 ; i < this.state.categories.length ; i++ )
      if( this.state.activeCell === this.state.categories[i].name )
        for( var j = 0 ; j < this.state.categories[i].item.length ; j++)
          if( this.state.categories[i].item[j].name === cellNameFromChild )
            tempCategoriesState[i].item[j].quantity = quantity;

    this.setState({categories: tempCategoriesState});

    // updating quantity in cart items and a whole row if item not present
    var tempCartItems = this.state.cartItems;
    var boolItemInCart = false;

    for( var x = 0 ; x < tempCartItems.length ; x++)
      if( tempCartItems[x].name === cellNameFromChild )
      {
        boolItemInCart = true;
        tempCartItems[x].quantity = quantity
      }

    if( boolItemInCart === false )
      tempCartItems.push({'name':cellNameFromChild,
                          'price': price,
                          'quantity':quantity,
                          'serving':serving})

    // updating state of total amount
    var totalAmount = 0
    for( var z =0; z < this.state.cartItems.length; z++ )
      totalAmount = totalAmount
        + (this.state.cartItems[z].quantity * this.state.cartItems[z].price)

    this.setState({total: Number(totalAmount).toFixed(2)})
  }

  searchCallback = (updatedList, keyss, activeCell) => {
    if( activeCell === this.state.activeCell)
    {
      if( keyss === '')
      {
        // updating categories
        var tempSearchCategories = this.state.searchCategories
        for( var i = 0 ; i < this.state.categories.length ; i++ )
          if( activeCell === this.state.categories[i].name )
            tempSearchCategories = this.state.categories[i].item

            this.setState({activeCategories: false,
                           searchCategories: tempSearchCategories})
      }
      // resetting the categories list
      if( keyss !== '')
        this.setState({activeCategories: true, searchCategories: updatedList})
    }
  }

  rightAreaCallback = (nameFromChild, quantity) => {
    // updating quantity in categories(&categories) list and categories
    var tempCategoriesState = this.state.categories;
    for( var i = 0 ; i < this.state.categories.length ; i++ )
        for( var j = 0 ; j < this.state.categories[i].item.length ; j++)
          if( this.state.categories[i].item[j].name === nameFromChild )
            tempCategoriesState[i].item[j].quantity = quantity;

    // Case for updating quantity(in cartItems)  and total amount state
    var tempCartItems = this.state.cartItems
    var totalAmount = 0
    for( var x = 0 ; x < this.state.cartItems.length ; x++)
    {
      if( this.state.cartItems[x].name === nameFromChild )
      {
        totalAmount = totalAmount + ( quantity * this.state.cartItems[x].price)
        tempCartItems[x].quantity = quantity
      }else
        totalAmount = totalAmount
          + (this.state.cartItems[x].quantity * this.state.cartItems[x].price)
    }

    // Case for Removing from Cart Items
    var tempCartForRemove = tempCartItems
    for( var k = 0 ; k < tempCartItems.length ; k++ )
      if( tempCartItems[k].quantity === 0)
        tempCartForRemove.splice(k,1)

    this.setState({categories: tempCategoriesState, cartItems: tempCartForRemove, total: Number(totalAmount).toFixed(2)});
  }
  
  render() {
    return(
      <div>
        <Grid container spacing={0}>
          <Grid item>
            <LeftArea callbackFromParent={this.leftAreaCallback}
                      activeCell={this.state.activeCell}
                      categories={this.state.categories} />
          </Grid>
          <Grid item>
            <MiddleArea callbackFromParent={this.middleAreaCallback}
                        searchCallback={this.searchCallback}
                        activeCell={this.state.activeCell}
                        categories={this.state.categories}
                        searchCategories={this.state.searchCategories}
                        activeCategories={this.state.activeCategories} />
          </Grid>
          <Grid item>
            <RightArea callbackFromParent={this.rightAreaCallback}
                       itemCount={this.state.cartItems.length}
                      cartItems={this.state.cartItems}
                      total={this.state.total}/>
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default Home;
