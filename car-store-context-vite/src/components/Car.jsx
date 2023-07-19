const Car = (props) => {
  const { name, price, trim, incrementCarPrice, decrementCarPrice } = props;

  return (
    <div className="cd-car-card">
      <p>Name: {name}</p>
      <p>Trim: {trim}</p>
      <p>Price: {price}</p>
      <button onClick={incrementCarPrice}>Increment price</button>
      <button onClick={decrementCarPrice}>Decrement price</button>
    </div>
  );
};

export default Car;
