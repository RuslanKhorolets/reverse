const reverse = require("../index");
reverse();

test("Method exists", () => {
  expect(typeof Array.prototype.myReverse).toBe("function");
});

test("It returns reversed array for array with odd length", () => {
  const array = [1, 2, 3, 4, 5];
  array.myReverse();
  expect(array).toEqual([1, 2, 3, 4, 5].reverse());
});

test("It returns reversed array for array with even length", () => {
  const array = [1, 2, 3, 4, 5, 6];
  array.myReverse();
  expect(array).toEqual([1, 2, 3, 4, 5, 6].reverse());
});

test("It works properly with one element in array", () => {
  const array = [1];
  array.myReverse();
  expect(array).toEqual([1]);
});

test("It works properly with an empty array", () => {
  const array = [];
  array.myReverse();
  expect(array).toEqual([]);
});

test("It works properly with empty fields", () => {
  const array = [1, 2, 3, 4, , , 5, , 6];
  const _length = array.length;
  array.myReverse();
  expect(array).toEqual([6, , 5, , , 4, 3, 2, 1]);
  expect(array.length).toBe(_length);
});

test("It should reverce array-like object", () => {
  const arrayLike = { 0: "I", 1: "hate", 2: "JS", length: 3 };
  Array.prototype.myReverse.call(arrayLike);
  expect(arrayLike).toEqual(
    Array.prototype.myReverse.call({ 0: "I", 1: "hate", 2: "JS", length: 3 })
  );
});

test("It should throw an error if it calls on Number", () => {
  const t = () => Array.prototype.myReverse.call(1);
  expect(t).toThrow(TypeError);
});

test("It should throw an error if it calls on not array-like object", () => {
  const notArrayLikeObject = { hi: "there" };
  const t = () => Array.prototype.myReverse.call(notArrayLikeObject);
  expect(t).toThrow(TypeError);
});
