const bigContainer = document.querySelector('.big-container');

for(let i = 0; i < 16; i++) {
    const smallContainer = document.createElement('div');
    smallContainer.classList.add('small-container');
    for(let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        smallContainer.appendChild(square);
    }
    bigContainer.appendChild(smallContainer);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = "rgb(255, 55, 89)";
    })
})

