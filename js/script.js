const images = document.querySelectorAll('[data-img] img');
images.forEach((img) => {
  img.addEventListener('click', () => {
    if (img.style.width === '640px' && img.style.height === '426px') {
      img.style.width = '320px';
      img.style.height = '213px';
    } else {
      img.style.width = '640px';
      img.style.height = '426px';
    }
  });
});
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-tab');
    contents.forEach((content) => {
      content.style.display = 'none';
    });
    document.getElementById(targetId).style.display = 'block';
  });
});
