import React from 'react';
import ChevronRight from '@material-ui/icons/ChevronRight';

const CategoriesCell = props => {
  const style = {
    mainCell: {
      backgroundColor: '#f8f8f8',
      height: '47px',
      borderBottom: '1px solid #e5e8ec'
    },
    mainCellActive: {
      backgroundColor: '#5bbc79',
      height: '47px',
      borderBottom: '1px solid #e5e8ec'
    },
    categories:{
      paddingTop: '14px',
      paddingLeft: '32px',
      color: '#A2ACBA',
      fontSize: '13px',
      fontFamily: 'Poppins',
      float: 'left'
    },
    categoriesActive:{
      paddingTop: '14px',
      paddingLeft: '32px',
      color: '#ffffff',
      fontSize: '13px',
      fontFamily: 'Poppins',
      float: 'left'
    },
    icon:{
      paddingTop: '10px',
      float:'right',
      paddingRight: '23px',
      color: '#A2ACBA'
    },
    iconActive:{
      paddingTop: '10px',
      float:'right',
      paddingRight: '23px',
      color: '#ffffff'
    },
  }

  const clickMe = (parameter, callBack) => (event) => {
      callBack(parameter);

  }

  return (
    <div style={ props.activeCell === props.name ? (style.mainCellActive) : (style.mainCell) } onClick={clickMe(props.name, props.callbackFromParent)}>
      <div>
        <div style={ props.activeCell === props.name ? (style.categoriesActive) : (style.categories) }><span>{props.name}</span></div>
        <div style={ props.activeCell === props.name ? (style.iconActive) : (style.icon) }><ChevronRight /></div>
      </div>
    </div>
  );
};

export default CategoriesCell;
