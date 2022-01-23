import { createNewCarousel } from './carousel.js';
import {PexelsApi} from './getRandomPhotoSvc.js';

window.addEventListener('load', createNewCarousel);
PexelsApi.assignImagesToSlides(3, "landscape");
