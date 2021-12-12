import {switchToDarkMode} from './darkMode.js';
import { createNewCarousel } from './carousel.js';
import {PexelsApi} from './getRandomPhotoSvc.js';

switchToDarkMode();
window.addEventListener('load', createNewCarousel);
PexelsApi.assignImagesToSlides(3, "landscape");
