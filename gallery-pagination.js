// Could be done better with OOP but will do the job
// Too much global variables
// Side note : best practice for pagination is to do it server-side.


let current_page = 1;
const records_per_page = 2;
const btn_next = document.getElementById("next");
const btn_prev = document.getElementById("previous");

const objJson = [
    { adName: "AdName 1"},
    { adName: "AdName 2"},
    { adName: "AdName 3"},
    { adName: "AdName 4"},
    { adName: "AdName 5"},
    { adName: "AdName 6"},
    { adName: "AdName 7"},
    { adName: "AdName 8"},
    { adName: "AdName 9"},
    { adName: "AdName 10"},
    { adName: "AdName 11"}
];

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    const listing_table = document.getElementById("listingTable");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (let i = (page-1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
        listing_table.innerHTML += objJson[i].adName + "<br>";
    }

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

window.addEventListener("load", changePage(1));

btn_next.addEventListener("click", nextPage);
btn_prev.addEventListener("click", prevPage);

