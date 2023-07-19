import Cars from "./Cars";

const ProductList = (props) => {
  const { cars, incrementCarPrice, decrementCarPrice } = props;
  return (
    <div className="cd-product-list">
      <Cars
        cars={cars}
        incrementCarPrice={incrementCarPrice}
        decrementCarPrice={decrementCarPrice}
      />
    </div>
  );
};

export default ProductList;
