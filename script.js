const bigContainer = document.querySelector('.big-container');

for(let i = 0; i < 16; i++) {
    const smallContainer = document.createElement('div');
    smallContainer.classList.add('small-container');
    for(let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = '6.25%';
        square.style.paddingBottom = '6.25%';
        square.style.height = '0';
        square.style.backgroundColor = 'black';
        square.style.border = 'white 1px solid';
        square.style.margin = '0';
        smallContainer.appendChild(square);
    }
    bigContainer.appendChild(smallContainer);
}
