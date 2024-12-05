import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import pathErrorIcon from "../img/icon-error.svg";




const API_KEY = '47417637-c5af89f5f9dac842b4dab7627'; 
const BASE_URL = 'https://pixabay.com/api/';

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

    serviceGallery(query.value)
      .then(data => {
        console.log(data)
        list.innerHTML = createMarkUp(data.hits);
        lightbox.refresh();
      })
      .catch(error => {
        iziToast.show({
            title: 'Error',
            theme: 'dark',
            titleColor: 'white',
            titleSize: '16px', 
            titleLineHeight: '150%',            
            messageSize: '16px', 
            color: 'white',
            iconUrl: pathErrorIcon,
            backgroundColor: "#ef4040",
            messageColor: "white",
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: 'topRight',
            timeout: 10000
        });
      })
      .finally(() => event.target.reset())
}



function serviceGallery(query = "") {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    })

    return fetch(`${BASE_URL}?${params}`)
       .then(response => {
             if (!response.ok) {
           throw new Error('Failed to fetch images');
         }
          return response.json();
      })
}

function createMarkUp(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
        `<li class="gallery">
          <a href="${largeImageURL}" class="gallery-item">
           <img class="image" src="${webformatURL}" alt="${tags}" loading="lazy" />
             <div class="info">
                <p class="title-info">Likes: <span class="value">${likes}</span></p>
                <p class="title-info">Views: <span class="value">${views}</span></p>
                <p class="title-info">Comments: <span class="value">${comments}</span></p>
                <p class="title-info">Downloads: <span class="value">${downloads}</span></p>
             </div>
         </a>
         </li>`
    ).join("");
}








    
//     function(event) {
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


// fetchImages()
//      .then(data => {
//         console.log(data)
//         list.innerHTML = createMarkUp(data.khbjjikbikhb);
//      })
//      .catch(error => {
//         console.log(error.message)
//      })
//      .finally(() => event.target.reset)


// export function fetchImages(query) {

//     const params = new URLSearchParams({
//         key: API_KEY,
//         q: query,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true
//     })

//     return fetch(`${BASE_URL}?${params}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch images');
//             }
//             return response.json();
//         })
// }