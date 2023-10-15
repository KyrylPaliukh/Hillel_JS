const NUMBER = prompt('Введіть число');
const DEGREE = prompt('Введіть ступень');
function resultDegree(number, degree) {
  if (number === null) {
    alert('Ви не вказали число');
  } else if (isNaN(number)) {
    alert('Ви не вказали число');
  } else if (degree === null) {
    alert('Ви не вказали ступінь');
  } else if (isNaN(degree)) {
    alert('Ви не вказали ступінь');
  }
  return number ** degree;
}
const result = resultDegree(NUMBER, DEGREE);
if (!isNaN(result)) {
  alert(result);
} else {
  alert('Операція неможлива');
}
