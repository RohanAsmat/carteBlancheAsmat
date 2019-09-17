import React from 'react';


const CategoriesCellHeader = props => {
  const style = {
    mainCell: {
      backgroundColor: '#edeff0',
      height: '48px',
    },
    categories:{
      paddingTop: '14px',
      paddingLeft: '32px',
      color: '#383840',
      fontSize: '15px',
      fontFamily: 'Poppins'
    },
    countStyle:{
      float:'right',
      paddingRight: '23px',
      color: '#a2acba',
      size: '12px'
    }
  }
  return (
    <div style={style.mainCell}>
      <div style={style.categories}>
        <span>Categories</span>
        <span style={style.countStyle}>({props.count})</span>
      </div>
    </div>
  );
};

export default CategoriesCellHeader;
