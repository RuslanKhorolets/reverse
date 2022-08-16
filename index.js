// returns new array
function reverse(array) {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

// in place with while loop
function reverseInPlace(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let temp = null;

  while (leftIndex < rightIndex) {
    temp = array[rightIndex];

    array[rightIndex] = array[leftIndex];
    array[leftIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return array;
}

module.exports = function () {
  // as a polyfill with for loop
  // time complexity O(n)
  // space complexity O(1)

  Array.prototype.myReverse = function () {
    if (
      !Array.isArray(this) &&
      !(
        typeof this === "object" &&
        this.hasOwnProperty("length") && // check if it's array-like object
        typeof this.length === "number"
      )
    ) {
      throw new TypeError(
        "myReverse should be called on Array or array-like object"
      );
    }

    let temp = null;
    for (let i = 0; i < this.length; i++) {
      if (i >= this.length - i - 1) {
        break;
      }
      temp = this[i];
      this[i] = this[this.length - i - 1];
      this[this.length - i - 1] = temp;
    }
    return this;
  };
};
