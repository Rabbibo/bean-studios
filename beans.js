const image = document.getElementById('image');
const container = document.getElementById('container');
let speed = 2; // Initial speed (pixels per frame)

function moveImage() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;

    // Generate random horizontal and vertical directions (-1, 0, or 1)
    const directionX = Math.floor(Math.random() * 3) - 1;
    const directionY = Math.floor(Math.random() * 3) - 1;

    let currentPosX = parseInt(image.style.left) || 0;
    let currentPosY = parseInt(image.style.top) || 0;

    currentPosX += speed * directionX;
    currentPosY += speed * directionY;

    // Ensure the image stays within the bounds of the container
    currentPosX = Math.min(Math.max(currentPosX, 0), containerWidth - imageWidth);
    currentPosY = Math.min(Math.max(currentPosY, 0), containerHeight - imageHeight);

    image.style.left = currentPosX + 'px';
    image.style.top = currentPosY + 'px';

    requestAnimationFrame(moveImage);
}

// Start the animation
moveImage();

