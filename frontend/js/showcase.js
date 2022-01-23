import { createNewCarousel } from './carousel/carousel.js';
import { PexelsApi } from './carousel/getRandomPhotoSvc.js';

window.addEventListener('load', createNewCarousel);
PexelsApi.assignImagesToSlides(3, "landscape");
