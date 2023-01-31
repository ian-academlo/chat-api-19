const { checkInteger } = require("./math");

// * Un string que nos indica de que va la prueba
// * funcion callback que se va a ejecutar con la prueba

// ? como escribimos una función que falle
// * le paso un string cuando no le paso valor

// ? Que debe devolver la función Booleano true / false
// ? que debe recibir la función un valor

test("Debe devolver un true cuando le pasamos el valor de 5", () => {
  // Arrange
  const value = 5;
  // Act --> necesito la función
  const result = checkInteger(value);
  // assert --> afirmar
  expect(result).toBe(true);
});

test("Debe devolver un true cuando le pasamos un 100", () => {
  // arrange
  const value = 100;
  // act
  const result = checkInteger(value);
  // assert
  expect(result).toBe(true);
});

test("Debe devolver true cuando el valor sea -3", () => {
  // arrange
  const value = -3;
  // act
  const result = checkInteger(value);
  // assert
  expect(result).toBe(true);
});

test(" debe devolver un false cuando el valor sea 5 / 3", () => {
  // fira code
  // arrange
  const value = 5 / 3;
  // act
  const result = checkInteger(value);
  // assert
  expect(result).toBe(false);
});

test("debe devolver false cuando recibe un 'javascript'", () => {
  //arrange
  const value = "javascript";
  //act
  const result = checkInteger(value);
  // assert
  expect(result).toBe(false);
});

test("debe devolver false cuando recibe un {a: 12}", () => {
  //arrange
  const value = { a: 12 };
  //act
  const result = checkInteger(value);
  // assert
  expect(result).toBe(false);
});
