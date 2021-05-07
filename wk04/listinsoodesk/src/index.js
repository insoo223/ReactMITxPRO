import React from 'react'
import ReactDOM from 'react-dom'
import * as ReactBootstrap from 'react-bootstrap'
//Ref: https://stackoverflow.com/questions/39047130/react-bootstrap-importing-modules

/***(Insoo's comments) List up inventory buttons showing all items with their stock number on its button face.
Execution sequence is as followings:
1.When the web server invokes index.html at the "public" folder, it loads index.js in the "src" folder.
2.Loading index.js, ReactDOM.render is run at first and React component "ButtonInventory" is called with "stockitems" parameter being set as {menuSrc}
3.The 1st ft. of ButtonInventory is moveToCart event handler, but there's not raised any event so that is pass out.
4.The 2nd ft. is stock mapping arrow ft. which returns list of stockitems and assign them to "updatedList" variable and each element of list has onClick handler of "moveToCart". So that you can click the displayed list which fires moveToCart ft.
5.Finally, ButtonInventory's return clause gets "updatedList" variable which has the list created by stock state variable 
  By the way, why does the author uses state variable of "stock" rather than use directly "stockitems" of the parameter of ButtonInventory? It work! Confirmed by my test code!

(MIT's comments)
provide a button and use onClick={moveToCart} to move 1 item into the Shopping Cart
use React.useState to keep track of items in the Cart.
use React.useState to keep track of Stock items
list out the Cart items in another column
***/

function ButtonInventory({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;
  //Ref: https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)

  // event apple:2
  //Handling event https://reactjs.org/docs/handling-events.html
  const moveToCart = e => {
    let [name, num] = e.target.innerHTML.split(":"); // innerHTML should be format name:3
    // use newStock = stock.map to find "name" and decrease number in stock by 1
    // only if instock is >=  do we move item to Cart and update stock
    let newStock = stock.map((item, index) => {
    //The following line is for test purpose by Insoo (May 7, 2021)
    //let newStock = stockitems.map((item, index) => {
      if (item.name == name) item.instock--;
      return item;
    });
    setStock(newStock);
  };//const moveToCart event handler

  const updatedList = stock.map((item, index) => {
    return (
      <Button onClick={moveToCart} key={index}>
        {item.name}:{item.instock}
      </Button>
    );//return of arrow function stock.map((item, index))
  });//const updatedList
  

  // note that React needs to have a single Parent
  return (
    <>
      <ul style={{ listStyleType: "none" }}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
    </>
  );//return of function ButtonInventory

}//function ButtonInventory

const menuSrc = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <ButtonInventory stockitems={menuSrc} />,
  document.getElementById("root")
);
