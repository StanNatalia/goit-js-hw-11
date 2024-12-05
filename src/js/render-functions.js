// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// export function renderGallery(images) {
//     const gallery = document.querySelector('.list');
//     list.innerHTML = ''; 

//     if (images.length === 0) {
//         iziToast.error({
//             title: 'Error',
//             message: 'Sorry, there are no images matching your search query. Please try again!',
//         });
//         return;
//     }

//     const creatMarkUp = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
//         `<a href="${largeImageURL}" class="gallery-item">
//             <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//             <div class="info">
//                 <p>Likes: ${likes}</p>
//                 <p>Views: ${views}</p>
//                 <p>Comments: ${comments}</p>
//                 <p>Downloads: ${downloads}</p>
//             </div>
//         </a>`
//     ).join('');

//     gallery.insertAdjacentHTML('beforeend', creatMarkUp);
// }

// export function showLoader() {
//     const loader = document.querySelector('.loader');
//     loader.classList.remove('hidden'); 
// }

// export function hideLoader() {
//     const loader = document.querySelector('.loader');
//     loader.classList.add('hidden'); 
// }