import "./App.css";
import { useState } from "react";
import trash from "./imgs/trash.png";
import cart from "./imgs/cart.png";
import x from "./imgs/x.png";
import pen from "./imgs/pen.png";
import notebook from "./imgs/notebook.png";
import eraser from "./imgs/eraser.png";
import holder from "./imgs/holder.png";
import pencil from "./imgs/pencil.png";
import ruler from "./imgs/ruler.png";
import scissors from "./imgs/scissors.png";
import sharpener from "./imgs/sharpener.png";
import tape from "./imgs/tape.png";
import backpack from "./imgs/backpack.png";
import bag from "./imgs/bag.png";
import colors from "./imgs/colors.png";

let itemsOnDisplay = [
  { id: 0, name: "Pen", img: pen, price: 5 },
  { id: 1, name: "Notebook", img: notebook, price: 10 },
  { id: 2, name: "Pens Holder", img: holder, price: 15 },
  { id: 3, name: "Scissors", img: scissors, price: 10 },
  { id: 4, name: "Ruler", img: ruler, price: 10 },
  { id: 5, name: "Pencil", img: pencil, price: 5 },
  { id: 6, name: "Sharpener", img: sharpener, price: 5 },
  { id: 7, name: "Tape", img: tape, price: 10 },
  { id: 8, name: "Pens Bag", img: bag, price: 15 },
  { id: 9, name: "Backpack", img: backpack, price: 20 },
  { id: 10, name: "Eraser", img: eraser, price: 5 },
  { id: 11, name: "Coloring Pens", img: colors, price: 15 },
];

let cartItems = [];
let itemColor = [
  "#a0bcc2",
  "#ddbcce",
  "#c4dfaa",
  "#d7c0ae",
  "#e3bec6",
  "#d0fca5",
  "#dcb89c",
  "#ffeccb",
  "#fffab8",
  "#F6AE99",
  "#C9E4C5",
  "#c8bde1",
];
function Item({ item }) {
  return (
    <div
      className="myDiv"
      key={item.id}
      style={{ backgroundColor: itemColor[item.id] }}
    >
      <h2>Item Name: {item.name}</h2>
      <img className="itemImg" src={item.img}></img>
      <p>Price: {item.price}</p>
      <button
        className="addButton"
        onClick={() => {
          let found = false;
          if (cartItems.length == 0) {
            cartItems.push({
              id: item.id,
              name: item.name,
              price: item.price,
              img: item.img,
              amount: 1,
            });
            found = true;
          } else {
            for (let i = 0; i < cartItems.length; i++) {
              console.log("lllll");

              if (item.id == cartItems[i].id) {
                let amount = cartItems[i].amount;
                cartItems[i].amount = amount + 1;
                found = true;
                break;
              }
            }
            if (!found)
              cartItems.push({
                id: item.id,
                name: item.name,
                price: item.price,
                img: item.img,
                amount: 1,
              });
          }

          console.log(cartItems);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
function CartItem({ item ,deleteItem,setdelete }) {
  return (
    <div className="cartDiv" key={item.id}>
      <br></br>
      <p>
        Item Name: {item.name} &emsp;&emsp;Price: {item.price}{" "}
        &emsp;&emsp;Amount={item.amount}{" "}
      </p>
      <p> Total amount: {item.amount * item.price} &emsp;&emsp;   <img
          onClick={() => {
            for (let i = 0; i < cartItems.length; i++) 
            {
              if (cartItems[i].id == item.id) {
                cartItems.splice(i, 1);}
            }
            setdelete(!deleteItem);
            console.log(cartItems);
          }}
          src={trash}
          style={{ height: "28px" }}
        ></img> </p>

      <br></br>
    </div>
  );
}
function CartItems({deleteItem,setdelete}) {
  return (
    <div className="cartItems">
      { deleteItem?
      cartItems.map((item) => {
        return <CartItem item={item} deleteItem={deleteItem} setdelete={setdelete} />;
      }): cartItems.map((item) => {
        return <CartItem item={item} deleteItem={deleteItem} setdelete={setdelete} />;
      })
      }
    </div>
  );
}
function Items() {
  return (
    <div>
      <div className="items">
        {itemsOnDisplay.map((item) => {
          return <Item item={item} />;
        })}
      </div>
    </div>
  );
}
export default function MyApp() {
  const [toggle, settoggle] = useState(false);
  const [deleteItem, setdelete] = useState(false);

  return (
    <div>
      <div className="title">
        <h1>Happy Shopping </h1>
        <img
          className="cartImg"
          onClick={() => {
            settoggle(!toggle);
          }}
          src={toggle ? x : cart}
        ></img>
      </div>
      <hr></hr>
      <div className="componant">{toggle ? <CartItems deleteItem={deleteItem} setdelete={setdelete}/> : <Items />}</div>
      <hr></hr>
    </div>
  );
}
