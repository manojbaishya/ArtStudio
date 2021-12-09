async function getRandomPhoto() {
    const response = await fetch('https://api.unsplash.com/photos/random?orientation=landscape',
        {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Client-ID n2MQhQtWjh7uliEUi5fuxQLvcFIwuNwOfQV7tsv1JJw'
            }
        }
    );
    if (response.status === 200) {
        const data = await response.json();
        return data.urls.regular;
    } else {
        return null;
    }
}

[1, 2, 3].forEach(element => {
    getRandomPhoto().then(imgUrl => {
        let slide = document.getElementById(`carousel-slide${element}`);
        slide.innerHTML = `<img src=${imgUrl} alt="Carousel slide 1">`
    })
});