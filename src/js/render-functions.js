
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import pathErrorIcon from "../img/icon-error.svg";

export function showErrorToast(message) {
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
        message,
        position: 'topRight',
        timeout: 2000
    });
}

export function createMarkUp(arr) {
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


