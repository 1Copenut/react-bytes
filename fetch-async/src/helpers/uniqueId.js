const uniqueId = (prefix) => {
  let num = 0;

  return function (prefix) {
    prefix = String(prefix || "");
    num = num + 1;
    return `${prefix}${num}`;
  };
};

export default uniqueId;
