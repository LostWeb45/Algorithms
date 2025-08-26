const array = [1, 4, 7, 4, 8, 9];
let count = 0;

// Линейный поиск

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 8));
console.log("Колл-во итераций", count);
