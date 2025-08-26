const arr = [-12, 7, 3, -5, 0, 2, 1, 9, 8, -3, 6, 4, -1, 10, 5];

// Сортировка Хуара

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
console.log(quickSort(arr));
