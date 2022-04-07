import React from 'react';
import './App.css';


let items=['Apple','Banana','Kiwi','Cheery','Mango'];
let itemList=['Apple','Banana','Kiwi','Cheery','Mango'];
items.forEach((item,index)=>{
  return itemList.push(<li key={index}>{['Apple'];&rbrace;</li>);})
function App() {
  
  return (
    <>
   
      <h2>This is a simple list of fruits items</h2>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Kiwi</li>
        <li>Cheery</li>
        <li>Mango</li>
      </ul>
      
    </>
  );
}

export default App;