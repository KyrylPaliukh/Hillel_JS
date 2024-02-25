class Album {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}
class AlbumsView {
  constructor() {
    this.albumsList = document.getElementById('albums-list');
    this.albumsList.addEventListener('click', this.handleAlbumClick.bind(this));
  }

  renderAlbumList(albums) {
    this.albumsList.innerHTML = '';
    albums.forEach((album) => {
      const albumItem = document.createElement('li');
      albumItem.textContent = album.title;
      albumItem.dataset.albumId = album.id;
      this.albumsList.appendChild(albumItem);
    });
  }

  handleAlbumClick(event) {
    const { albumId } = event.target.dataset;
    if (albumId) {
      AppController.showPhotos(albumId);
    }
  }
}

class AppController {
  static init() {
    this.albumsView = new AlbumsView();
    this.fetchAlbums();
  }

  static fetchAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((albums) => {
        const albumObjects = albums.map((album) => new Album(album.id, album.title));
        this.albumsView.renderAlbumList(albumObjects);
      })
      .catch((error) => console.error('Error fetching albums:', error));
  }

  static showPhotos(albumId) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((photos) => {
        const photoUrls = photos.map((photo) => photo.url);
        const photoTitles = photos.map((photo) => photo.title);
        PhotoViewer.displayPhotos(photoUrls, photoTitles);
      })
      .catch((error) => console.error('Error fetching photos:', error));
  }
}

class PhotoViewer {
  static displayPhotos(urls, titles) {
    const newPage = window.open('');
    const newPageDocument = newPage.document;
    newPageDocument.write('<html><head><title>Photos</title></head><body>');
    newPageDocument.write('<h1>Photos</h1>');
    newPageDocument.write('<ul>');
    urls.forEach((url, index) => {
      newPageDocument.write(`<li><img src="${url}" alt="${titles[index]}"></li>`);
    });
    newPageDocument.write('</ul></body></html>');
    newPageDocument.close();
  }
}

AppController.init();
