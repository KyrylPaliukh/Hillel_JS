document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('[data-img]');
  const imgFolder = '../img/';
  const numberOfImg = 9;
  const randomImgIndex = Math.floor(Math.random() * numberOfImg) + 1;
  const imgPath = `${imgFolder}${randomImgIndex}.jpg`;
  img.src = imgPath;
});
