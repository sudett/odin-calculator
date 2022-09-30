const input = document.querySelector('.input');

const operate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

document.querySelector('.calculator').addEventListener('submit', (e) => {
  e.preventDefault();
  const arr = input.value.split('');
  const arrIndexes = [];
  
  arr.forEach((char, idx) => {
    if(isNaN(char) && char !== '.') arrIndexes.push(idx);
  });

  let num = +arr.slice(0, arrIndexes[0]).join('');
  for (let i = 0; i < arrIndexes.length; i++) {
    num = operate(arr[arrIndexes[i]], num, +arr.slice(arrIndexes[i] + 1, arrIndexes[i + 1]).join(''));
  }

  input.value = num;
})

document.querySelector('.btns--container').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  input.value += btn.dataset.content;
})

document.querySelector('.btn--clear').addEventListener('click', () => {
  input.value = '';
})

document.querySelector('.btn--delete-container').addEventListener('click', (e) => {
  if (!e.target.closest('.btn--delete')) return;

  let val = input.value;
  input.value = val.slice(0, val.length - 1);
})