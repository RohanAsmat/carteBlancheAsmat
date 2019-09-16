import React from 'react';
import Card from '@material-ui/core/Card';
  import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Check from '@material-ui/icons/Check';

class ItemCard extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
    };
  } ;

  render( ){

      const style = {
        mainCell: {
          float: 'left'
        },
        card: {
          width: '112px',
          height: '112px',
          marginRight: '24px',
          marginBottom: '24px'
        },
        title: {
          fontSize: '12px',
          fontFamily: 'Poppins',
          fontWeight: '500',
          color: '#1d1d26',
          minHeight: '36px'
        },
        content: {
          marginBottom: '4px',
          marginTop: '4px',
          color: '#a2acba',
          fontSize: '11px',
        },
        cardContent: {
          paddingBottom: '0px'
        },
        button: {
          fontSize: '8px',
          background: 'black',
          color: 'white',
          width: '78px',
          height: '23px',
          marginTop: '6px',
          fontWeight: 'bold'
        },
        price: {
          float: 'left'
        },
        quantity: {
          float: 'right',
          color: '#5bbc79'
        },
        icon: {
          fontSize: '8px'
        }
      };

      const clickMe = (name, price, quantity, serving, callBack) => (event) => {
          callBack(name, price, quantity, serving);
      }

    return (
      <div style={style.mainCell}>
       <Card style={style.card}>
         <CardContent style={style.cardContent}>
           <Typography style={style.title} gutterBottom={true}>
            {this.props.name}
           </Typography>
           <Typography style={style.content}>
            <span style={style.price}>RS {this.props.price}</span>
            { Number(this.props.quantity) !== 0 ? (<span style={style.quantity}><Check style={style.icon}/> {this.props.quantity}X</span>) : ('')}
           </Typography>
           <Button onClick={clickMe(this.props.name, this.props.price, Number(this.props.quantity)+1, this.props.serving, this.props.callbackFromParent)} style={style.button} size="small">ADD TO CART</Button>
         </CardContent>
       </Card>
      </div>
    );
  }

};

export default ItemCard;
