function showFullImg(e) {
    console.log(e.target);
    const img = e.target;
    const imgSrc = img.getAttribute("src");
    
    fullImgElt.src = imgSrc;
    fullImgElt.classList.add("open");
    modalElt.classList.add("open");
}

const modalElt = document.querySelector(".ptm-gallery-modal");
const fullImgElt = document.querySelector(".ptm-gallery-modal .full-img");
const imgElts = document.querySelectorAll(".ptm-gallery-wrapper .img-item");

console.log(imgElts);

for (let img of imgElts) {
    img.addEventListener("click", showFullImg);
}

modalElt.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.target);
    if (e.target.classList.contains("ptm-gallery-modal")) {
        modalElt.classList.remove("open");
        fullImgElt.classList.remove("open");
    }
})
