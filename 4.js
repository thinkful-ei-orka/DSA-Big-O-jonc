function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// Answer: O(n), The time complexity is dependant on the length of the input, but only runs the operation on 1 items at a time.
