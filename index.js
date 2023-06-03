// [5,2,6,1,3,8,6]

function divide(array) {
  if (array.length <= 1) {
    return array;
  }

  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half);

  return merge(divide(left), divide(right));
}

function merge(left, right) {
  let store = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      store.push(left[leftIndex]);
      leftIndex++;
    } else {
      store.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    store.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    store.push(right[rightIndex]);
    rightIndex++;
  }

  return store;
}

const element = [5, 2, 6, 1, 3, 8, 6, 5, 0];

console.log(divide(element));
