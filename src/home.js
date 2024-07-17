export default function renderHome() {
    const main = document.querySelector('#content');
    // Button Background toggle
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('toggled');
    });
    const Btn = document.querySelector('#home');
    Btn.classList.add('toggled');
    
    main.innerHTML = '';
    main.className = ''; // Remove all existing classes
    main.classList.add('home');
    // We'll use template literals here for efficient code writing.
    main.innerHTML = `
    <p>Welcome to Sophia's Station Cafe, where elegance meets comfort in every cup. Named after the Greek word for wisdom, our cafe in Amsterdam offers a tranquil to relax with a book, unwind, or enjoy exceptional coffee and cuisine.</p>
    
    <p>With high-speed WiFi and a cozy atmosphere, it's also the perfect place to work or connect with friends. Indulge in our signature coffee blends, gourmet teas, and delectable dishes crafted from the finest ingredients. Whether for a brief respite or a productive day, Sophia's Station ensures every visit is filled with warmth and sophistication.</p>`

    return main;
}