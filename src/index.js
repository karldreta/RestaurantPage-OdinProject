import './style.css';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
import renderAbout from './about';
import iconPath from './imgs/icon.png';

document.addEventListener("DOMContentLoaded", function () {
    renderHome(); // Load the HomePage first
    
    const header = document.querySelector('#header');
    const navPanel = document.querySelector('#navPanel');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add("logoContainer");
    const logoIcon = new Image();
    logoIcon.src = iconPath;
    logoContainer.appendChild(logoIcon)
    header.insertBefore(logoContainer, navPanel);

    const cafeName = document.createElement('h1')
    cafeName.classList.add('cafeName');
    cafeName.textContent = "Sophia's Station Cafe";
    header.insertBefore(cafeName, navPanel);

    // Footer
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.innerHTML = `
        <p>Welcome to our cozy cafe. Enjoy your stay!</p>
    `;
    document.body.appendChild(footer);


    document.querySelector('#home').addEventListener('click', renderHome);
    document.querySelector('#menu').addEventListener('click', renderMenu);
    document.querySelector('#contact').addEventListener('click', renderContact);
    document.querySelector('#about').addEventListener('click', renderAbout);
});