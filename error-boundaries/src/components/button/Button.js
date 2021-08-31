const Button = (props) => {
  return (
    <Button type="button" onClick={methodDoesNotExist}>
      Break the world!
    </Button>
  );
};

export default Button;
