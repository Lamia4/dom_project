const section = document.querySelector("section");
const input = document.querySelector("#inputField");
const addButton = document.querySelector("#add");
const removeButton = document.querySelector("#remove")
const favoriteButton = document.querySelector(".favorite")
let allSection;
function addFunction() {
    const createDiv = document.createElement("div");
    createDiv.classList.add("d-flex", "w-100", "justify-content-between");
    const createH5 = document.createElement("h5");
    createH5.classList.add("mb-1", "p-3");
    var task = input.value;
    createH5.innerText = task;
    const createDiv2 = document.createElement("div");
    createDiv2.classList.add("float-end", "p-2");
    const createCheckbox = document.createElement("input");
    createCheckbox.classList.add("form-check-input", "p-3");
    createCheckbox.setAttribute("type", "checkbox");
    const createFavorite = document.createElement("button");
    createFavorite.setAttribute("type", "button");
    createFavorite.classList.add("btn", "btn-outline-warning", "star", "p-2", "favoriteButton");
    createFavorite.addEventListener("click", makeFav);
    const star = document.createElement("i");
    star.classList.add("far", "fa-star");
    createFavorite.appendChild(star);
    createDiv2.appendChild(createCheckbox);
    createDiv2.appendChild(createFavorite);
    createDiv.appendChild(createH5);
    createDiv.appendChild(createDiv2);
    section.appendChild(createDiv);
    input.value = "";
    allSection = Array.from(section.children)
    console.log(allSection);
};
function removeFunction() {    
    let checkedOrNot = false;
    allSection.forEach(element => {
        if (element.querySelector("input").checked) {
            checkedOrNot = true;
            element.remove();
        }
    });
    if (!checkedOrNot) {
        alert("Please control, if the task is done and click the checkButton first")

    }
    allSection = Array.from(section.children) // yenilenme
}

// const allFavorites = Array.from(createFavorite);
function makeFav() {
    allSection.forEach(element => {
        this.classList.toggle("bg-warning");
        this.classList.toggle("active");
        this.classList.toggle("takenFavorites");
        // this.setAttribute("aria-pressed", "true")
        if(this.ariaPressed == "true") {
            this.removeAttribute("aria-pressed", "true")
        } else {
            this.setAttribute("aria-pressed", "true")
        }
    })
}
function showFavorites() {
    allSection.forEach(element => {
        if (!element.querySelector('button').classList.contains("takenFavorites")) {
           
            element.classList.toggle("d-none");
        }
    })
}
addButton.addEventListener("click", addFunction);
removeButton.addEventListener("click", removeFunction);
favoriteButton.addEventListener("click", showFavorites);