import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  const cars = {
    car001: { name: "Subaru WRX", trim: "STI", price: 100 },
    car002: { name: "Toyta Camry", trim: "TRD", price: 200 },
    car003: { name: "Ford Mustang", trim: "GT", price: 300 },
  };

  const [carsState, setCarsState] = useState(cars);

  const incrementCarPrice = (id) => {
    const cars = Object.assign({}, carsState);
    cars[id].price = cars[id].price + 1;
    setCarsState(cars);
  };

  const decrementCarPrice = (id) => {
    const cars = Object.assign({}, carsState);
    cars[id].price = cars[id].price - 1;
    setCarsState(cars);
  };

  return (
    <div>
      <header>
        <h1>Welcome to the car store</h1>
      </header>
      <main>
        <ProductList
          cars={carsState}
          incrementCarPrice={incrementCarPrice}
          decrementCarPrice={decrementCarPrice}
        />
      </main>
    </div>
  );
};

export default App;
