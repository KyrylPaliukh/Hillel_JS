document.addEventListener('DOMContentLoaded', () => {
  const albumsList = document.getElementById('albums-list');
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((albums) => {
      albums.forEach((album) => {
        const albumItem = document.createElement('li');
        albumItem.textContent = album.title;
        albumItem.addEventListener('click', () => {
          fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
            .then((response) => response.json())
            .then((photos) => {
              // Создаем новую страницу для отображения изображений
              const newPage = window.open('');
              const newPageDocument = newPage.document;
              newPageDocument.write('<html><head><title>Photos</title></head><body>');
              newPageDocument.write(`<h1>Photos from ${album.title}</h1>`);
              newPageDocument.write('<ul>');
              photos.forEach((photo) => {
                newPageDocument.write(`<li><img src="${photo.url}" alt="${photo.title}"></li>`);
              });
              newPageDocument.write('</ul></body></html>');
              newPageDocument.close();
            })
            .catch((error) => console.error('Error fetching photos:', error));
        });
        albumsList.appendChild(albumItem);
      });
    })
    .catch((error) => console.error('Error fetching albums:', error));
});
