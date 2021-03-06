/*
Inspiration From: https://codesandbox.io/s/j9qx4znj5
*/
import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.filterList = this.filterList.bind(this);
    this.state = {
      initialItems: this.props.cartItems,
      items: [],
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cartItems !== this.props.cartItems)
      this.setState({items:[], initialItems: this.props.cartItems })
  }


  filterList = (e) => {
    let updatedList = this.state.initialItems

    updatedList = updatedList.filter(item => {
      return (
        item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      )
    })
    this.setState({ items: updatedList })
    this.props.callbackFromParentForSearch(
        updatedList,
        e.target.value.toLowerCase(),
        this.props.activeCell)
}

  render(){
    const style = {
      mainCell: {
        backgroundColor: '#f8f8f8',
        height: '47px',
        borderBottom: '1px solid #e5e8ec'
      },
      input:{
        margin: '0px',
        backgroundColor: '#f8f8f8',
        width: '433px'
      }
    };

    return (
      <div style={style.mainCell}>
      <TextField
          id="filled-adornment-dense"
          variant="filled"
          margin="dense"
          InputProps={{
            startAdornment: <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>,
            disableUnderline: true,
          }}
          placeholder="Search Item"
          style={style.input}
          onChange={this.filterList}
        />
      </div>
    );
  }
};

export default SearchBar;
