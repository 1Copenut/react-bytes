import React, { useState } from "react";
import CarsContext from "./CarsContext";

const CarsProvider = (props) => {
  const cars = {
    car001: { name: "Subaru WRX", trim: "STI", price: 100 },
    car002: { name: "Toyta Camry", trim: "TRD", price: 200 },
    car003: { name: "Ford Mustang", trim: "GT", price: 300 },
  };

  const [carsState, setCarsState] = useState(cars);

  return (
    <CarsContext.Provider
      value={{
        cars: carsState,
        incrementCarPrice: (id) => {
          const cars = Object.assign({}, carsState);
          cars[id].price = cars[id].price + 1;
          setCarsState(cars);
        },
        decrementCarPrice: (id) => {
          const cars = Object.assign({}, carsState);
          cars[id].price = cars[id].price - 1;
          setCarsState(cars);
        },
      }}
    >
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
