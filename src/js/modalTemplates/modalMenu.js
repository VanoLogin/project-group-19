const menu = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal-close-btn");
const links = document.querySelectorAll(".modal-menu-list a");
const orderBtn = document.querySelector(".modal-order-btn");

// const openBtn = document.querySelector(""); <==== icon-burger class

// openBtn.addEventListener("click", () => {
//     menu.classList.add("open");
// });

closeBtn.addEventListener("click", menuCloseFoo);

function menuCloseFoo() {
    menu.classList.remove("is-open");
}

links.forEach(link => {
    link.addEventListener("click", () => {
        menuCloseFoo();
    });
});
orderBtn.addEventListener("click", () => {
    menuCloseFoo();
});
