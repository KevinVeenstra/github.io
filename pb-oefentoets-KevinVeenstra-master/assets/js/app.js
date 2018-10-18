const imageNames = [
    'bat',
    'bug',
    'cat',
    'dog',
    'fly',
    'frog',
    'monkey',
    'mouse',
    'spider'
]

let imageToGuess = document.getElementById('random-img')
let imageGrid = document.getElementById('img-grid')

initializeGame()

/**
 * Starts off the game by randomizing the grid and the picture to choose.
 */
function initializeGame()
{
    randomizeImageGrid()
    randomizeImageToGuess()
}

/**
 * Checks if the clicked image is the same image as the one to guess. Shuffles the images if that's the case.
 * @param {event} event - The event that occurred
 */
function imageClicked(event)
{
    console.log(event)
    const clickedImage = event.target
    let message = document.getElementById('message')

    if (clickedImage.src === imageToGuess.src) {
        message.innerText = 'Goed geraden!'

        initializeGame()
    } else {
        message.innerText = 'Helaas. Probeer het nog een keer'
    }
}

/**
 * Randomizes the image grid so that every game has a different deck.
 */
function randomizeImageGrid()
{
    clearImageGrid()
    shuffleArray(imageNames)
    for (let i = 0; i < imageNames.length; i++) {
        const image = createImageElement(i);

        imageGrid.appendChild(image)
    }
}

/**
 * Randomizes the image to guess.
 */
function randomizeImageToGuess()
{
    const randomNumber = Math.floor(Math.random() * imageNames.length)
    imageToGuess.setAttribute('src', './assets/images/' + imageNames[randomNumber] + '.jpg');
}

/**
 * Clears the entire image grid
 */
function clearImageGrid()
{
    imageGrid.innerHTML = ''
}

/**
 * Durstenfeld shuffle, cpu-optimized implementation of the Fisher-Yates shuffle.
 * @param {array} array - The array to be shuffled
 */
function shuffleArray(array)
{
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
}

/**
 * Creates an image element out of the imageNames array and a given index.
 * @param {integer} index - The index of the imageNames array
 */
function createImageElement(index)
{
    let image = document.createElement('img');
    image.setAttribute('src', './assets/images/' + imageNames[index] + '.jpg');
    image.setAttribute('id', imageNames[index]);
    image.setAttribute('class', 'img--small');
    image.addEventListener('click', imageClicked)
    return image;
}