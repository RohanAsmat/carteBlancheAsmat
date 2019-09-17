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
      activeCell: 'BAR BQ',
      categories: CATEGORIES,
      cartItems: [],
      searchCategories: CATEGORIES[0].item,
      activeCategories: false,
      total: 0,
    };
  }

  leftAreaCallback = (cellNameFromChild) => {
      console.log('parent', cellNameFromChild )

      var tempSearchCategories = this.state.searchCategories

      for( var i = 0 ; i < this.state.categories.length ; i++ )
        if( cellNameFromChild === this.state.categories[i].name )
          tempSearchCategories = this.state.categories[i].item

      this.setState({activeCell: cellNameFromChild, searchCategories: tempSearchCategories, activeCategories:false})

  }

  middleAreaCallback = (cellNameFromChild, price, quantity, serving) => {
      console.log('parent', cellNameFromChild, price, quantity, serving, this.state.activeCell);
      var tempCategoriesState = this.state.categories;

      for( var i = 0 ; i < this.state.categories.length ; i++ )
        if( this.state.activeCell === this.state.categories[i].name )
          for( var j = 0 ; j < this.state.categories[i].item.length ; j++)
            if( this.state.categories[i].item[j].name === cellNameFromChild )
              tempCategoriesState[i].item[j].quantity = quantity;
              console.log("items", j);
      this.setState({categories: tempCategoriesState});

      var tempCartItems = this.state.cartItems;
      var boolItemInCart = false;
      for( var x = 0 ; x < tempCartItems.length ; x++)
        if( tempCartItems[x].name === cellNameFromChild )
        {
          boolItemInCart = true;
          tempCartItems[x].quantity = quantity
        }

      if( boolItemInCart === false )
        tempCartItems.push({'name':cellNameFromChild, 'price': price, 'quantity':quantity, 'serving':serving})

        var totalAmount = 0
        for(var i=0; i < this.state.cartItems.length; i++ )
          totalAmount = totalAmount + (this.state.cartItems[i].quantity * this.state.cartItems[i].price)

        console.log("total", this.state.cartItems);
        this.setState({total: totalAmount})


      console.log(tempCartItems);

  }
  componentDidUpdate(prevProps, prevState) {
      // only update chart if the data has changed
      if (prevState.activeCell !== this.state.activeCell) {
        var tempSearchCategories = []

        for( var i = 0 ; i < this.state.categories.length ; i++ )
          if( this.state.activeCell === this.state.categories[i].name )
            tempSearchCategories = this.state.categories[i].item

        this.setState({searchCategories: tempSearchCategories})

      }
    }

  searchCallback = (updatedList, keyss, activeCell) => {
    if( activeCell === this.state.activeCell)
    {

      if( keyss === '')
      {
        var tempSearchCategories = this.state.searchCategories

        for( var i = 0 ; i < this.state.categories.length ; i++ )
          if( activeCell === this.state.categories[i].name )
            tempSearchCategories = this.state.categories[i].item

            this.setState({activeCategories: false, searchCategories: tempSearchCategories})
      }

      if( keyss !== '')
        this.setState({activeCategories: true, searchCategories: updatedList})
    }

  }

  rightAreaCallback = (nameFromChild, quantity) => {
    var tempCategoriesState = this.state.categories;

    for( var i = 0 ; i < this.state.categories.length ; i++ )
      if( this.state.activeCell === this.state.categories[i].name )
        for( var j = 0 ; j < this.state.categories[i].item.length ; j++)
          if( this.state.categories[i].item[j].name === nameFromChild )
            tempCategoriesState[i].item[j].quantity = quantity;

    var tempCartItems = this.state.cartItems
    var totalAmount = 0
    for( var x = 0 ; x < this.state.cartItems.length ; x++)
    {
      if( this.state.cartItems[x].name === nameFromChild )
      {
        totalAmount = totalAmount + ( quantity * this.state.cartItems[x].price)
        tempCartItems[x].quantity = quantity

      }else
        totalAmount = totalAmount + (this.state.cartItems[x].quantity * this.state.cartItems[x].price)

    }

    var tempCartForRemove = tempCartItems
    for( var k = 0 ; k < tempCartItems.length ; k++ )
      if( tempCartItems[k].quantity == 0)
        tempCartForRemove.splice(k,1)

    this.setState({categories: tempCategoriesState, cartItems: tempCartForRemove, total: totalAmount});

  }


  render() {
    return(
      <div>
        <Grid container spacing={0}>
          <Grid item>
            <LeftArea callbackFromParent={this.leftAreaCallback} activeCell={this.state.activeCell}  categories={this.state.categories} />
          </Grid>
          <Grid item>
            <MiddleArea callbackFromParent={this.middleAreaCallback}  searchCallback={this.searchCallback} activeCell={this.state.activeCell} categories={this.state.categories} searchCategories={this.state.searchCategories} activeCategories={this.state.activeCategories} />
          </Grid>
          <Grid item>
            <RightArea callbackFromParent={this.rightAreaCallback} itemCount={this.state.cartItems.length} cartItems={this.state.cartItems} total={this.state.total}/>
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default Home;
