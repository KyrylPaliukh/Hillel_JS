const text = document.querySelector('[data-text]');
const div = document.querySelector('[data-div]');
text.addEventListener('focus', () => {
  div.style.display = 'block';
});
text.addEventListener('blur', () => {
  div.style.display = 'none';
});
