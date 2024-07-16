import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
import renderAbout from './about';

document.querySelector('#home').addEventListener('click', renderHome);
document.querySelector('#menu').addEventListener('click', renderMenu);
document.querySelector('#contact').addEventListener('click', renderContact);
document.querySelector('#about').addEventListener('click', renderAbout);