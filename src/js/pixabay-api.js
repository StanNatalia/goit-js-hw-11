// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";


// Ваш ключ API:47417637-c5af89f5f9dac842b4dab7627



const API_KEY = '47417637-c5af89f5f9dac842b4dab7627'; 
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .then(data => data.hits)
        .catch(error => {
            console.error(error);
        });
}