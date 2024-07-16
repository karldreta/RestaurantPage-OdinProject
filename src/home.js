export default function renderHome() {
    const main = document.querySelector('#content');
    const currentHeader = document.createElement('h1');
    const paragraph = document.createElement('p');
    currentHeader.textContent = `Sophia's Station Cafe`;
    paragraph.textContent = `Welcome to Sophia's Station Cafe, where elegance meets comfort in every cup. Named after the Greek word for wisdom, our cafe in Prinsengracht, 3141 GT Amsterdam, Netherlands offers a tranquil to relax with a book, unwind, or enjoy exceptional coffee and cuisine. With high-speed WiFi and a cozy atmosphere, it's also the perfect place to work or connect with friends. Indulge in our signature coffee blends, gourmet teas, and delectable dishes crafted from the finest ingredients. Whether for a brief respite or a productive day, Sophia's Station ensures every visit is filled with warmth and sophistication.`
    
    main.appendChild(currentHeader);
    main.appendChild(paragraph);

    return main;
}