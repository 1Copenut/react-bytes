import { useState } from "react";
import CarsProvider from "./context/CarsProvider";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  return (
    <CarsProvider>
      <div>
        <header>
          <h1>Welcome to the car store</h1>
        </header>
        <main>
          <ProductList />
        </main>
      </div>
    </CarsProvider>
  );
};

export default App;
