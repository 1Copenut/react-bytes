const Button = ({ toggleVisible }) => {
  const handleClick = () => toggleVisible();
  return (
    <button type="button" onClick={handleClick}>
      Click to load
    </button>
  );
};

export default Button;
