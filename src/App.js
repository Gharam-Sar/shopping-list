import "./App.css";
import { useState } from "react";
import trash from "./imgs/trash.png";
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

let itemsOnDisplay =[{ id: 0, name: "Pen", img: pen,price :5 },{ id: 1, name: "Notebook", img: notebook,price :10 },
{ id: 2, name: "Pens Holder", img: holder,price :15 },{ id: 3, name: "Scissors", img: scissors,price :10 },
{ id: 4, name: "Ruler", img: ruler,price :10 },{ id: 5, name: "Pencil", img: pencil,price :5 },
{ id: 6, name: "Sharpener", img: sharpener,price :5 },{ id: 7, name: "Tape", img: tape,price :10 },
{ id: 8, name: "Pens Bag", img: bag,price :15 },{ id: 9, name: "Backpack", img: backpack,price :20 },
{ id: 10, name: "Eraser", img: eraser,price :5 },{ id: 11, name: "Coloring Pens", img: colors,price :15 }];

let itemColor=['#a0bcc2','#ddbcce','#c4dfaa','#d7c0ae','#e3bec6','#d0fca5','#dcb89c','#F7D59C','#fffab8','#F6AE99','#C9E4C5','#c8bde1'];
function Item({ item }) {

  return (
  
<div className="myDiv" key={item.id}   style={{ backgroundColor: itemColor[item.id] }}>
<h2>Item Name: {item.name}</h2>
          <img className="itemImg"
          src={item.img}
        ></img>
<p>Price: {item.price}</p>
<button className="addButton" >
                Add to Cart
              </button>
        </div>

  );
}

function Items({ displaytodo, filterText, toggle }) {

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
  return (
    <div>
      <div className="title">
        <h1>Happy Shopping</h1>
      </div>
      <div className="componant">
      <Items
       
      />
      </div>
      <hr></hr>

     
    </div>
  );
}
