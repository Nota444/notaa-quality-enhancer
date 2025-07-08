// Get elements from HTML
const photoInput = document.querySelector('.photo-enhancer input[type="file"]');
const videoInput = document.querySelector('.video-enhancer input[type="file"]');
const photoEnhanceBtn = document.querySelector('.photo-enhancer button');
const videoEnhanceBtn = document.querySelector('.video-enhancer button');
const contactForm = document.querySelector('#contact form');
const contactNameInput = document.querySelector('#contact input[name="name"]');
const contactEmailInput = document.querySelector('#contact input[name="email"]');
const contactMessageTextarea = document.querySelector('#contact textarea[name="message"]');
// Add event listeners
photoInput.addEventListener('change', handlePhotoChange);
videoInput.addEventListener('change', handleVideoChange);
photoEnhanceBtn.addEventListener('click', enhancePhoto);
videoEnhanceBtn.addEventListener('click', enhanceVideo);
contactForm.addEventListener('submit', handleContactFormSubmit);
// Function to handle photo input change
function handlePhotoChange(event) {
  const selectedFile = event.target.files[0];
  console.log(`Selected photo file: ${selectedFile.name}`);
}
// Function to handle video input change
function handleVideoChange(event) {
  const selectedFile = event.target.files[0];
  console.log(`Selected video file: ${selectedFile.name}`);
}
// Function to enhance photo
function enhancePhoto() {
  console.log('Enhancing photo...');
  // TO DO: implement photo enhancement logic here
  alert('Photo enhanced!');
}
// Function to enhance video
function enhanceVideo() {
  console.log('Enhancing video...');
  // TO DO: implement video enhancement logic here
  alert('Video enhanced!');
}
// Function to handle contact form submission
function handleContactFormSubmit(event) {
  event.preventDefault();
  const name = contactNameInput.value;
  const email = contactEmailInput.value;
  const message = contactMessageTextarea.value;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  // TO DO: implement contact form submission logic here (e.g., send email)
  alert('Message sent!');
}