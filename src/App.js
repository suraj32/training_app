import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./Greet";
import ProductList from "./components/ProductList";

function App() {
  // console.log(productList);
  return (
    <div className="App">
      <ProductList />
      {/* <Greet name={"Suraj"} surname={"Rajput"} /> */}
      {/* {productList.map((product) => <h5>{product.name}</h5>)} */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
