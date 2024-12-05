
const API_KEY = '47417637-c5af89f5f9dac842b4dab7627'; 
const BASE_URL = 'https://pixabay.com/api/';

export function serviceGallery(query = "") {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        });
}













    
