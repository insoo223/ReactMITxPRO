import React from 'react'
import ReactDOM from 'react-dom'
import * as ReactBootstrap from 'react-bootstrap'

// provide a button and use onClick to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// list out the Cart items in another column
function ShoppingCart({ availableItems }) {
  //$ npm install react-bootstrap bootstrap
  const { Button } = ReactBootstrap;

  // TODO: create state for stock and cart using React.useState
  const [stock, setStock] = React.useState(availableItems);
  const [cart, setCart] = React.useState([]);
  
  //onClick event handler of button
  const moveToCart = (e) => {
    // TODO: create product and numInStock variables
    // product and numInStock variables hold button face info of the same name.
    let [product, numInStock] = e.target.innerHTML.split(':');

    // TODO: Determine if numInStock is greater than 0. If not, find the product that was clicked and update its numInStock
    if (numInStock <= 0) 
      return; 
    
      let item = stock.filter((item) => item.product == product);
    
    let newStock = stock.map((item) => {
      if (item.product == product) {
        item.inStock--;
      }
      return item;
    });//stock.map()

    // TODO: Update the stock state to include the new stock
    setStock([...newStock]);

    // TODO: Update the cart state to include the updated item
    setCart([...cart, ...item]); 
    //console.log(`Cart: ${JSON.stringify(cart)}`);
  };

  // No need to update code beyond this point
  const availableItemsButtons = availableItems.map((item, index) => {
    return (
      <Button id={item.product} key={index} onClick={moveToCart}>
        {item.product}:{item.inStock}
      </Button>
    );//return of availableItems.map()
  });//const moveToCart (onClick event handler)

  // Note: React requires a single Parent element, that's why we use <>
  return (
    <>
      <ul key="stock" style={{ listStyleType: 'none' }}>
        {availableItemsButtons}
      </ul>
      <h1>Shopping Cart</h1>
      <Cart cartitems={cart}> Cart Items</Cart>
    </>
  );//return (of function ShoppingCart)
}//function ShoppingCart

function Cart({ cartitems }) {
  const { Button } = ReactBootstrap;
  
  console.log('rendering Cart');

  const availableItemsButtons = cartitems.map((item, index) => {
    return (
      <Button id={item.product} key={index}>
        {item.product}
      </Button>
    );//return of cartitems.map()
  });//const availableItemsButtons = cartitems.map()

  return (
    <ul id="cart-items" style={{ listStyleType: 'none' }} key="cart">
      {availableItemsButtons}
    </ul>
  );//return (of function Cart)
}//function Cart

const inventoryItems = [
  { product: 'Jacket', inStock: 2 },
  { product: 'Pants', inStock: 3 },
  { product: 'Scarf', inStock: 0 },
  { product: 'Pajamas', inStock: 3 },
  { product: 'Shirt', inStock: 1 },
];//const inventoryItems

ReactDOM.render(<ShoppingCart availableItems={inventoryItems} />, document.getElementById('root'));
