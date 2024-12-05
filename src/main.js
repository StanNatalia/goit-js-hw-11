// main.js
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { serviceGallery } from './js/pixabay-api.js';
import { showErrorToast, createMarkUp } from './js/render-functions';

const form = document.querySelector('.search-input');
const list = document.querySelector('.list');

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
});

form.addEventListener("submit", handlerSearch);

function handlerSearch(event) {
    event.preventDefault();
    const { query } = event.target.elements;

    const loader = document.querySelector(".loader");
    loader.style.display = "block";

    if (!query.value) {
        showErrorToast("Please enter a search query!");
        loader.style.display = "none";
        return;
    }

    serviceGallery(query.value)
        .then(data => {
            if (data.hits.length === 0) {
                showErrorToast("No images found. Please try a different query!");
                return;
            }
            list.innerHTML = createMarkUp(data.hits);
            lightbox.refresh();
        })
        .catch(error => {
            showErrorToast("Sorry, there are no images matching your search query. Please try again!");
        })
        .finally(() => {
            loader.style.display = "none";
            event.target.reset();
        });
}


