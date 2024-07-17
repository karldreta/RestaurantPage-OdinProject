export default function renderAbout() {
    const main = document.querySelector('#content');
    main.innerHTML = '';
    main.className = ''; // Remove all existing classes
    main.classList.add('about');
    main.innerHTML = `
    <h1 class="heading">About Us</h1>

    <p>Welcome to Sophia's Station Cafe, where exceptional coffee, delicious food, and a cozy atmosphere converge. Our passion for quality is evident in every cup, crafted from the finest global coffee beans into signature blends that delight. Enjoy gourmet teas and locally sourced dishes, ensuring freshness and flavor in every bite.</p>

    <p>Beyond coffee and cuisine, Sophia's Station Cafe is a vibrant community hub where creativity thrives and connections blossom. Whether you're diving into a project, unwinding with a book, or simply seeking tranquility, our space welcomes you with warmth and hospitality.</p>

    <p>With high-speed WiFi and comfortable seating, Sophia's Station Cafe is your ideal spot for remote work or relaxation. Join us in Amsterdam and discover why we're not just another cafe; we're your still home even when away from home.</p>

    `;
    
    return main;
}