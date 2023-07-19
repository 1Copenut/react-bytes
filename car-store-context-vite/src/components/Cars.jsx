import Car from "./Car";

const Cars = (props) => {
  const { cars, incrementCarPrice, decrementCarPrice } = props;
  const carIds = Object.keys(cars);

  return (
    <ul>
      {carIds.map((carId) => {
        return (
          <Car
            key={carId}
            name={cars[carId].name}
            price={cars[carId].price}
            trim={cars[carId].trim}
            incrementCarPrice={() => incrementCarPrice(carId)}
            decrementCarPrice={() => decrementCarPrice(carId)}
          />
        );
      })}
    </ul>
  );
};

export default Cars;
