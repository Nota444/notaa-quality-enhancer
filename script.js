// Get elements from HTML
const photoInput = document.querySelector('.photo-enhancer input[type="file"]');
const videoInput = document.querySelector('.video-enhancer input[type="file"]');
const photoEnhanceBtn = document.querySelector('.photo-enhancer button');
const videoEnhanceBtn = document.querySelector('.video-enhancer button');
const contactForm = document.querySelector('#contact form');
// Add event listeners
photoInput.addEventListener('change', handlePhotoChange);
videoInput.addEventListener('change', handleVideoChange);
photoEnhanceBtn.onclick = enhancePhoto;
videoEnhanceBtn.onclick = enhanceVideo;
contactForm.addEventListener('submit', handleContactFormSubmit);
// Function to handle photo input change
function handlePhotoChange(event) {
  const selectedFile = event.target.files[0];
  console