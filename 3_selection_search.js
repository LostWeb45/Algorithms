const arr = [-12, 7, 3, -5, 0, 2, 1, 9, 8, -3, 6, 4, -1, 10, 5];
let count = 0;

// Сортировка выбором

function selectionSearch(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSearch(arr));
