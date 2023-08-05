import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')
const greateImgMarkup = createGalleryItemMarkup(galleryItems)


galleryRef.insertAdjacentHTML('beforeend', greateImgMarkup)

function createGalleryItemMarkup(gallery) {
        return gallery.map(({preview, original, description}) => {
           return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
               <img class="gallery__image" src="${preview}" alt="Image ${description}" />
            </a>
         </li>`
        }).join('')

}
var lightbox = new SimpleLightbox('.gallery a', {  captionsData: 'alt', captionDelay: 250, });