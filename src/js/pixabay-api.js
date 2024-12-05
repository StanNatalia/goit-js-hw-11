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

    if (!query.value) {
        iziToast.show({
          theme: 'dark',
          titleColor: 'white',
          titleSize: '16px',  
          messageLineHeight: '150%',             
          messageSize: '16px', 
          color: 'white',
          iconUrl: pathErrorIcon,
          backgroundColor: "#ef4040",
          messageColor: "white",
          message: "Please enter a search query!",
          position: 'topRight',
          timeout: 10000
        });
        return;
      }

    serviceGallery(query.value)
      .then(data => {
         if (data.hits.length === 0) {
            iziToast.show({
                theme: 'dark',
                titleColor: 'white',
                titleSize: '16px', 
                messageLineHeight: '150%',             
                messageSize: '16px', 
                color: 'white',
                iconUrl: pathErrorIcon,
                backgroundColor: "#ef4040",
                messageColor: "white",
                message: "No images found. Please try a different query!",
                position: 'topRight',
                timeout: 10000
              });
              return;
         }
           list.innerHTML = createMarkUp(data.hits);
           lightbox.refresh();
       })


      .catch(error => {
        iziToast.show({
            theme: 'dark',
            titleColor: 'white',
            titleSize: '16px', 
            messageLineHeight: '150%',            
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
      .finally(() => event.target.reset());
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
           throw new Error(response.st);
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








    
