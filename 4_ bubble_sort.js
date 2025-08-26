const arr = [-12, 7, 3, -5, 0, 2, 1, 9, 8, -3, 6, 4, -1, 10, 5];

// Сортировка пузырьком

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(arr));
