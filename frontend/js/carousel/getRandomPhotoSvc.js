import { config } from './config.js';
export { UnsplashApi, PixabayApi, PexelsApi };
class UnsplashApi {
    static async getRandomPhotos(count, orientation) {
        const endpoint = `https://api.unsplash.com/photos/random?count=${count}&orientation=${orientation}&sig=${Math.ceil(100 * Math.random())}`;
        const header = {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Client-ID ${config.UnsplashApiKey}`
            }
        }
        const response = await fetch(endpoint, header);
        if (!response.ok) {
            throw new Error(`Photo Service Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    static async assignImagesToSlides() {
        const pictures = await UnsplashApi.getRandomPhotos(3, "landscape");
        for (let idx = 0; idx < pictures.length; idx++) {
            let slide = document.getElementById(`carousel-slide${idx + 1}`);
            slide.innerHTML = `<img src=${pictures[idx].urls.regular} alt="Carousel slide ${idx + 1}">`;
        }
    }
}
class PixabayApi {
    static async getRandomPhotos(count, query, orientation) {
        const endpoint = `https://pixabay.com/api/?key=${config.PixabayApiKey}&q=${encodeURIComponent(query)}&orientation=${orientation}&image_type=photo&page=1&per_page=${count}`;
        const header = {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const response = await fetch(endpoint, header);
        if (!response.ok) {
            throw new Error(`Photo Service Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    static async assignImagesToSlides(count) {
        const pictures = await PixabayApi.getRandomPhotos(count, "architecture", "horizontal");
        for (let idx = 0; idx < count; idx++) {
            let slide = document.getElementById(`carousel-slide${idx + 1}`);
            slide.innerHTML = `<img src=${picturimport { config } from './config.js';
            export { UnsplashApi, PixabayApi, PexelsApi };
            class UnsplashApi {
                static async getRandomPhotos(count, orientation) {
                    const endpoint = `https://api.unsplash.com/photos/random?count=${count}&orientation=${orientation}&sig=${Math.ceil(100 * Math.random())}`;
                    const header = {
                        method: 'GET',
                        headers:
                        {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': `Client-ID ${config.UnsplashApiKey}`
                        }
                    }
                    const response = await fetch(endpoint, header);
                    if (!response.ok) {
                        throw new Error(`Photo Service Error: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                }
                static async assignImagesToSlides() {
                    const pictures = await UnsplashApi.getRandomPhotos(3, "landscape");
                    for (let idx = 0; idx < pictures.length; idx++) {
                        let slide = document.getElementById(`carousel-slide${idx + 1}`);
                        slide.innerHTML = `<img src=${pictures[idx].urls.regular} alt="Carousel slide ${idx + 1}">`;
                    }
                }
            }
            class PixabayApi {
                static async getRandomPhotos(count, query, orientation) {
                    const endpoint = `https://pixabay.com/api/?key=${config.PixabayApiKey}&q=${encodeURIComponent(query)}&orientation=${orientation}&image_type=photo&page=1&per_page=${count}`;
                    const header = {
                        method: 'GET',
                        headers:
                        {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    }
                    const response = await fetch(endpoint, header);
                    if (!response.ok) {
                        throw new Error(`Photo Service Error: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                }
                static async assignImagesToSlides(count) {
                    const pictures = await PixabayApi.getRandomPhotos(count, "architecture", "horizontal");
                    for (let idx = 0; idx < count; idx++) {
                        let slide = document.getElementById(`carousel-slide${idx + 1}`);
                        slide.innerHTML = `<img src=${pictures.hits[idx].previewURL.replace("_150", "_640")} alt="Carousel slide ${idx + 1}">`;
                    }
                }
            }
            class PexelsApi {
                static async getRandomPhotos(count, query, orientation) {
                    const endpoint = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=${orientation}&size=small&page=1&per_page=${count}`;
                    const header = {
                        method: 'GET',
                        headers:
                        {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': config.PexelsApiKey
                        }
                    }
                    const response = await fetch(endpoint, header);
                    if (!response.ok) {
                        throw new Error(`Photo Service Error: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                }
                static async assignImagesToSlides(count, query) {
                    const pictures = await PexelsApi.getRandomPhotos(count, query, "landscape");
                    for (let idx = 0; idx < count; idx++) {
                        let slide = document.getElementById(`carousel-slide${idx + 1}`);
                        slide.innerHTML = `<img src=${pictures.photos[idx].src.medium} alt="Carousel slide ${idx + 1}">`;
                    }
                }
            } es.hits[idx].previewURL.replace("_150", "_640")
        } alt = "Carousel slide ${idx + 1}" > `;
        }
    }
}
class PexelsApi {
    static async getRandomPhotos(count, query, orientation) {
        const endpoint = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=${orientation}&size=small&page=1&per_page=${count}`;
        const header = {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': config.PexelsApiKey
            }
        }
        const response = await fetch(endpoint, header);
        if (!response.ok) {
            throw new Error(`Photo Service Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    static async assignImagesToSlides(count, query) {
        const pictures = await PexelsApi.getRandomPhotos(count, query, "landscape");
        for (let idx = 0; idx < count; idx++) {
            let slide = document.getElementById(`carousel-slide${idx + 1}`);
            slide.innerHTML = `<img src=${pictures.photos[idx].src.medium} alt="Carousel slide ${idx + 1}">`;
        }
    }
}