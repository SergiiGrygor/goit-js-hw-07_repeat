import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const imgMarkup = createGalleryItemMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgMarkup);

function createGalleryItemMarkup(gallary){
   return gallary.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="Image ${description}"
      />
    </a>
  </li>`
   }).join("")
};

galleryRef.addEventListener('click', onClickImg)
let modalWindow
function onClickImg(evt) {
  evt.preventDefault();
  const galleryItem = evt.target.closest('.gallery__item')
  if (!galleryItem) {
    return
  };

  openModalWindow(evt)
};
function openModalWindow(evt) {
  modalWindow = basicLightbox.create(`
  <img src="${evt.target.dataset.source}">`)
  modalWindow.show()
}

galleryRef.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    modalWindow.close()
  }
})







