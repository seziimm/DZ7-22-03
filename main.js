const newsContainer = document.getElementById('news-container');

async function init() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    data.slice(0, 12).forEach(article => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = `https://picsum.photos/300/200?random=${Math.floor(Math.random()*100)}`;
        image.alt = article.title;

        const title = document.createElement('h2');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.body;

        card.append(image, title, description);
        newsContainer.appendChild(card);
    });
}

init();





