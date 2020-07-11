import React, { Component } from 'react'
// import Items from './Items'

export default class Shopingcart extends Component {
    constructor() {
        super()
        this.state = {
           
        
        item:[
            {
            name: 'soap',
            price: 4.99,
            quantity: 0
        },
        {
            name: 'candy',
            price:  6.99,
            quantity: 0
        },
        {
            name: 'pizza',
            price: 10.99,
            quantity: 0
        }
    ],
    cartSubTotal: 0,
    tax: 0.04,
    total:0,
        }  
    }
    
   addQuantity = (index) =>{
       this.setState ( {
       quantity:this.state.item[index].quantity++
       })
   }
   subQuantity = (index) =>{
    this.setState ({
    quantity:this.state.item[index].quantity--
    })
   }
    
    render() {
    
    
    let soap =this.state.item[0];
    let candy =this.state.item[1];
    let pizza =this.state.item[2];

    let cartSubTotal = (pizza.quantity * pizza.price) + (soap.quantity * soap.price) + (candy.quantity * candy.price)

    let tax = cartSubTotal * this.state.tax; 

    let sumTotalItem = soap.quantity + candy.quantity + pizza.quantity;

    let {quantity} = this.state.item[0];


        return (
            <div className='wrapper'>
                <h1> hello </h1>
                
                <div className='firstItems'>
                {soap.name}
                {soap.price}

                <button onClick={() => {this.addQuantity(0)}}> ++ </button>

                {soap.quantity}

                <button onClick={() => {this.subQuantity(0)}}> -- </button>

                </div>
                <div className='secondItems'>
                {candy.name}
                {candy.price}
                {candy.quantity}
                </div>
                <div className='thirdItems'>
                {pizza.name}
                {pizza.price}
                {pizza.quantity}
                </div>
                

                <div className='checkOut'>

                    ({sumTotalItem} Items)
                    subtotal:{cartSubTotal}
                    Estimated:{tax}
                </div>





            </div>
        )
    }
}
