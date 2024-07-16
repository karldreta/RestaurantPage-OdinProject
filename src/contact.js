export default function renderContact() {
    const main = document.querySelector('#content');
    main.innerHTML = '';
    main.innerHTML = `
    <h1 class="heading">Contact Us</h1>
    <p>We are always excited to hear from you! Whether you have a question about our menu, want to book a table, or simply want to say hello, feel free to reach out to us. Our team at Sophia's Station Cafe is here to ensure you have a delightful experience every time you visit.</p>
    
    <h2>You may reach us from any of these channels</h2>
    <ul class="contact-list">
        <li>Email: info@sophiasstationcafe.com</li>
        <li>Phone: +31 612345678</li>
        <li>Visit us in person at Prinsengracht, 3141 GT Amsterdam, Netherlands</li>
    </ul>
    `;

    return main;
}