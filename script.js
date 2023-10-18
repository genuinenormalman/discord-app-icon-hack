// Copy and paste into console
//Read more in readme.md 

const imageSources = [
  '/assets/616aad56ead3e101bb42cf49d91ef4bf.webp',
  '/assets/99e79fc8aff1ebe7fd97fb5fd799a2bd.webp',
  '/assets/89c85520362bae970806619f146a3ef9.webp',
  '/assets/276eb3e425ee31ae632661fff666f71f.webp',
  '/assets/0791433e9598645764a4eb7e779133d5.webp',
  '/assets/236cfc7f9855f8aac35676e86b29a847.webp',
  '/assets/facaee136c60e329f361b4d47af304ef.webp',
  '/assets/cc449b08b06398170aadf6a6cb2cc6bf.webp',
  '/assets/8123cc31484f11af435a4e9a69a85e39.webp',
  '/assets/9cc1a2ed8e2c82bfc7112d569e4df7ad.webp',
  '/assets/e844403e5b4c079a083a6f2cc88d0907.webp',
  '/assets/56c9b064febba73b05609f5c6d1442ed.webp',
  '/assets/2c2e2d573e34059de691dff09405eb38.webp',
  '/assets/37a397ee39fe0063db4a2b3221aa8425.webp'
];

const uniqueImageSources = [...new Set(imageSources)];

const selectedImage = prompt('Choose an image (1-' + uniqueImageSources.length + '):');

if (selectedImage) {
  const selectedImageIndex = parseInt(selectedImage) - 1;

  if (selectedImageIndex >= 0 && selectedImageIndex < uniqueImageSources.length) {
    const parentDiv = document.querySelector('.childWrapper-1j_1ub');
    parentDiv.innerHTML = ''; // Clear the div
    const imgElement = document.createElement('img');
    imgElement.src = uniqueImageSources[selectedImageIndex];
    imgElement.width = 48;
    imgElement.alt = 'Значок приложения';
    imgElement.draggable = false;
    parentDiv.appendChild(imgElement);
  } else {
    alert('Invalid selection. Please choose a valid number.');
  }
} else {
  alert('No selection made.');
}
