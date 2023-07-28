import Car from "./Car";
import CarsContext from "../context/CarsContext";

const Cars = () => (
  <CarsContext.Consumer>
    {(context) => (
      <div>
        <h2>Cars:</h2>
        <ul>
          {Object.keys(context.cars).map((carId) => (
            <li key={carId}>
              <Car
                id={carId}
                name={context.cars[carId].name}
                price={context.cars[carId].price}
                incrementCarPrice={() => context.incrementCarPrice(carId)}
                decrementCarPrice={() => context.decrementCarPrice(carId)}
              />
            </li>
          ))}
        </ul>
      </div>
    )}
  </CarsContext.Consumer>
);

export default Cars;
