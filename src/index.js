import "./styles.css";
import { heading, para, content } from "./pageLoad.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

content.appendChild(heading);
content.appendChild(para);
home();

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

function clearContent() {
    const cont = document.querySelector(".container");
    if (cont) {
        cont.remove();
    }
}

homeButton.addEventListener('click', () => {
    clearContent();
    home();
});

menuButton.addEventListener('click', () => {
    clearContent();
    menu();
});

aboutButton.addEventListener('click', () => {
    clearContent();
    about();
});
