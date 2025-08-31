// Функция кеширования
function cashFunction(fn) {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log("Взято из кеша", cash[n]);
      return cash[n];
    }
    let result = fn(n);
    cash[n] = result;
    console.log("Посчитала функция", cash[n]);
    return result;
  };
}

function factorial(n) {
  let result = 1;
  while (n != 1) {
    result += n;
    n -= 1;
  }
  return result;
}

const cashFactorial = cashFunction(factorial);

cashFactorial(4);
cashFactorial(5);
cashFactorial(6);
cashFactorial(7);
cashFactorial(7);
cashFactorial(4);
