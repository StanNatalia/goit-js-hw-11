// import { fetchImages } from './js/pixabay-api.js';
// import { renderGallery, showLoader, hideLoader } from './js/render-functions.js';

// const searchForm = document.querySelector('.search-form');
// const list = document.querySelector('.list');

// searchForm.addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const query = event.target.elements.query.value.trim();

//     if (!query) {
//         iziToast.warning({
//             title: 'Warning',
//             message: 'Please enter a search term.',
//         });
//         return;
//     }

//     showLoader(); 

//     fetchImages(query)
//         .then(images => {
//             renderGallery(images);
//         })
//         .finally(() => {
//             hideLoader(); 
//         });
// });