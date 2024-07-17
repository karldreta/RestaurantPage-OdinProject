export default function renderMenu() {
    const main = document.querySelector('#content');
    main.innerHTML = '';
    main.className = '';
    main.classList.add('menu');
    main.innerHTML = `
    <h1 class="heading">Our Menu</h1>
    <p class="menu-description">Explore our delicious offerings at Sophia's Station Cafe:</p>
    <ul>
        <li class="menu-category"><strong>Coffee:</strong> Enjoy our signature blends made from the finest coffee beans.
            <ul>
                <li class="menu-item">Espresso</li>
                <li class="menu-item">Cappuccino</li>
                <li class="menu-item">Latte</li>
                <li class="menu-item">Americano</li>
            </ul>
        </li>
        <li class="menu-category"><strong>Tea:</strong> Delight in a selection of gourmet teas, perfect for any tea lover.
            <ul>
                <li class="menu-item">Earl Grey</li>
                <li class="menu-item">Chamomile</li>
                <li class="menu-item">Green Tea</li>
                <li class="menu-item">Hibiscus</li>
                <li class="menu-item">Peppermint</li>
            </ul>
        </li>
        <li class="menu-category"><strong>Breakfast:</strong> Start your day right with our hearty breakfast options.
            <ul>
                <li class="menu-item">Classic Pancakes</li>
                <li class="menu-item">Eggs Benedict</li>
                <li class="menu-item">Avocado Toast</li>
                <li class="menu-item">Belgian Waffles</li>
                <li class="menu-item">French Toast</li>
                <li class="menu-item">Vegetarian Omelette</li>
                <li class="menu-item">Full English Breakfast</li>
            </ul>
        </li>
        <li class="menu-category"><strong>Lunch:</strong> Indulge in delicious lunches made from locally sourced ingredients.
            <ul>
                <li class="menu-item">Caprese Salad</li>
                <li class="menu-item">Chicken Panini</li>
                <li class="menu-item">Quinoa Bowl</li>
                <li class="menu-item">Vegetarian Wrap</li>
                <li class="menu-item">Grilled Salmon</li>
                <li class="menu-item">Pasta Primavera</li>
                <li class="menu-item">Beef Burger</li>
            </ul>
        </li>
        <li class="menu-category"><strong>Desserts:</strong> Treat yourself to our delectable desserts, crafted with care.
            <ul>
                <li class="menu-item">Chocolate Brownie</li>
                <li class="menu-item">New York Cheesecake</li>
                <li class="menu-item">Tiramisu</li>
                <li class="menu-item">Apple Pie</li>
                <li class="menu-item">Crème Brûlée</li>
                <li class="menu-item">Lemon Tart</li>
                <li class="menu-item">Red Velvet Cake</li>
            </ul>
        </li>
    </ul>
`;
    return main;
}