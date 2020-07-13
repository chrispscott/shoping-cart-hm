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
    cartSubTotal: 0 ,
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
    
    
    let soap  =this.state.item[0];
    let candy =this.state.item[1];
    let pizza =this.state.item[2];

    let cartSubTotal = (pizza.quantity * pizza.price.toFixed(2)) + (soap.quantity * soap.price.toFixed(2)) + (candy.quantity * candy.price.toFixed(2))

    let tax = cartSubTotal.toFixed(2) * this.state.tax.toFixed(2); 

    let sumTotalItem = soap.quantity + candy.quantity + pizza.quantity;

    let {quantity} = this.state.item[0];

    let total = (cartSubTotal + tax).toFixed(2);

        return (
            <div className='wrapper'>
                
                {/* <div className='product'> */}
                    <div className='firstItems'>
                        <img />
                        <img src='./assets/soap.jpg'/>
                        {soap.name}
                        {soap.price}
                        <button className='btn' onClick={() => {this.addQuantity(0)}}> add to cart </button>
                        {soap.quantity}
                        <button className='btn' onClick={() => {this.subQuantity(0)}}> remove from cart </button>
                    </div>


                    <div className='secondItems'>
                        <img src='./assets/candy1'/>
                        {candy.name}
                        {candy.price}
                        <button className='btn' onClick={() => {this.addQuantity(1)}}> add to cart </button>
                        {candy.quantity}
                        <button className='btn' onClick={() => {this.subQuantity(1)}}> remove from cart </button>
                    </div>



                    <div className='thirdItems'>
                        <img src='./assets/pizza1.jpg'/>
                        {pizza.name}
                        {pizza.price}
                        <button className='btn' onClick={() => {this.addQuantity(2)}}> add to cart </button>
                        {pizza.quantity}
                        <button className='btn' onClick={() => {this.subQuantity(2)}}> remove from cart </button>
                    </div>

                {/* <div/> */}


                <div className='checkOut'>
                <h1> Order Summary </h1>

                    <h3> Items {sumTotalItem} </h3>
                    <h3> Subtotal {cartSubTotal} </h3>
                   <h3> Estimated {tax} </h3>
                    <h3> Total {total} </h3>
                </div>





            </div>
        )
    }
}
