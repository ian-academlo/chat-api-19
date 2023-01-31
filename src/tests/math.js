const checkInteger = (value) => {
  if (typeof value === "number") {
    return value % 1 === 0;
  }
  return false;
};

const sum = (a, b) => {};

module.exports = {
  checkInteger,
  sum,
};

// Hacer los tests para la suma de dos numeros
// que los datos que reciban sean numeros

// 5 + "5" = "55"
