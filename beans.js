const image = document.getElementById('image');
let direction = 1; // Initial direction (1: down, -1: up)
let speed = 2; // Initial speed (pixels per frame)

function moveImage() {
    const containerHeight = document.getElementById('container').offsetHeight;
    const imageHeight = image.offsetHeight;

    let currentPosition = parseInt(image.style.top) || 0;
    currentPosition += speed * direction;

    // Reverse direction if the image reaches the top or bottom of the container
    if (currentPosition <= 0 || currentPosition >= containerHeight - imageHeight) {
        direction *= -1;
    }

    image.style.top = currentPosition + 'px';

    requestAnimationFrame(moveImage);
}

// Start the animation
moveImage();
