xconst image = document.getElementById('image');
const container = document.getElementById('container');
let directionX = getRandomDirection(); // Initial horizontal direction (random)
let directionY = getRandomDirection(); // Initial vertical direction (random)
let speed = 4; // Initial speed (pixels per frame)

function getRandomDirection() {
    // Generate a random number between -1 and 1
    return Math.random() * 4 - 1;
}

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


