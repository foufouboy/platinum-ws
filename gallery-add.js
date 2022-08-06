import {imgPopup} from "./gallery.js";

const baseUrl = "https://api.imgbb.com/1/upload";
const fileInput = document.querySelector(".ptm-gallery-upload");

function createImgItem(url) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-item");

    const img = document.createElement("img");
    img.setAttribute("alt", "Image");
    img.src = url;

    imgContainer.appendChild(img);
    
    document.querySelector(".ptm-gallery-wrapper").appendChild(imgContainer);
} 
console.log(fileInput);

fileInput.addEventListener("change", () => {
    const formData = new FormData();

    formData.append("image", fileInput.files[0]);
    formData.append("key", "c53a8beabd61eac1aaf79fb357f8ff57");
    formData.append("name", "");

    console.log(fileInput.files[0]);

    const options = {
        method: "POST",
        body: formData
    };

    fetch(baseUrl, options)
        .then(response => {
            return response.json();   
        })
        .then(result => {
            let imgUrl = result.data.url;
            createImgItem(imgUrl);
            imgPopup();

        })
        .catch(error => console.log(error));
}, false);


