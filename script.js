function buttonClicked(e) {
    const menuElem = e.currentTarget.parentNode;
    const negMenuHeight = "-65px";
    if (typeof this.isDropped == "undefined" || this.isDropped === false) {
        menuElem.style.bottom = "0";
        this.isDropped = true;
    } else if (this.isDropped === true) {
        menuElem.style.bottom = negMenuHeight; 
        this.isDropped = false;
    }
}

const menuButton = document.querySelector(".ptm-btm-dropup span");

menuButton.addEventListener("click", buttonClicked);