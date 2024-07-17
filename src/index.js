import './style.css';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
import renderAbout from './about';
import sIconPath from './imgs/sIcon.png';

document.addEventListener("DOMContentLoaded", function () {
    renderHome(); // Load the HomePage first
    
    const header = document.querySelector('#header');
    const navPanel = document.querySelector('#navPanel');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add("logoContainer");
    const sIcon = new Image();
    sIcon.src = sIconPath;
    logoContainer.appendChild(sIcon)
    header.insertBefore(logoContainer, navPanel);

    // Footer
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.innerHTML = `
        <p>I'm the Footer</p>
    `;
    document.body.appendChild(footer);


    document.querySelector('#home').addEventListener('click', renderHome);
    document.querySelector('#menu').addEventListener('click', renderMenu);
    document.querySelector('#contact').addEventListener('click', renderContact);
    document.querySelector('#about').addEventListener('click', renderAbout);
});