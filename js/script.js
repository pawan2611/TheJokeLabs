fetch("./json/jokes.json")
    .then(response => response.json())
    .then(data => {
        jokeArray = data;
    })

document.getElementById('load-joke').addEventListener('click', () => {
    index = Math.floor(Math.random() * jokeArray.length);
    document.getElementById('joke-content').innerText = jokeArray[index].joke;
    document.getElementById('load-joke').innerText = 'Load More';
})