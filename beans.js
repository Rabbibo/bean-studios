const image = document.getElementById('image');
const container = document.getElementById('container');
let directionX = 1; // Initial horizontal direction (1: right, -1: left)
let directionY = 1; // Initial vertical direction (1: down, -1: up)
let speed = 2; // Initial speed (pixels per frame)

function moveImage() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;

    let currentPosX = parseInt(image.style.left) || 0;
    let currentPosY = parseInt(image.style.top) || 0;

    currentPosX += speed * directionX;
    currentPosY += speed * directionY;

    // Reverse horizontal direction if the image reaches the left or right edge of the container
    if (currentPosX <= 0 || currentPosX >= containerWidth - imageWidth) {
        directionX *= -1;
    }

    // Reverse vertical direction if the image reaches the top or bottom edge of the container
    if (currentPosY <= 0 || currentPosY >= containerHeight - imageHeight) {
        directionY *= -1;
    }

    image.style.left = currentPosX + 'px';
    image.style.top = currentPosY + 'px';

    requestAnimationFrame(moveImage);
}

// Start the animation
moveImage();
