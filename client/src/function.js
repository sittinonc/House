const functions = {
  priceFormat: (num) => {
    let string = num.toString();
    if (string.length == 6) {
      const a = string.slice(0, 3);
      const b = string.slice(3, 6);
      return `${a},${b}`;
    } else if (string.length == 7) {
      const a = string.slice(0, 1);
      const b = string.slice(1, 4);
      const c = string.slice(4, 10);
      return `${a},${b},${c}`;
    } else if (string.length == 8) {
      const a = string.slice(0, 2);
      const b = string.slice(2, 5);
      const c = string.slice(5, 11);
      return `${a},${b},${c}`;
    } else if (string.length == 9) {
      const a = string.slice(0, 3);
      const b = string.slice(3, 6);
      const c = string.slice(6, 12);
      return `${a},${b},${c}`;
    } else {
      return num;
    }
  },
};

export default functions;
