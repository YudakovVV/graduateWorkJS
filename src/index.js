import modalHandler from "./modules/modalHandler"
//import modalHandlers from "./modules/modalHandlers"

import menu from "./modules/menu"
import forms from "./modules/forms"
import sendForm from "./modules/sendForm"
import slider from "./modules/slider"
import scrollUp from "./modules/scrollUp"
import accordeon from "./modules/accordeon"
import carousel from "./modules/carusel"

//modalHandler('.mobile-menu .callback-btn', 'block')
modalHandler('.header .callback-btn', 'block')
modalHandler('.modal-close', 'none')
modalHandler('.quest-section .button-services', 'block')
modalHandler('.services-carousel .element', 'block')
menu()
forms()
sendForm()
slider()
scrollUp()
accordeon()
carousel()
