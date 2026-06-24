const bigContainer = document.querySelector('.big-container');
const starterButton = document.querySelector('button');

starterButton.addEventListener('click', () => {
    let gridSize = prompt("Please enter the grid size under 100");
    gridSize = Number(gridSize);

    while (gridSize >= 100) {
        gridSize = prompt("Please enter the grid size under 100");
        gridSize = Number(gridSize);
    }

    bigContainer.replaceChildren();

    for (let i = 0; i < gridSize; i++) {
        const smallContainer = document.createElement('div');
        smallContainer.classList.add('small-container');
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            let squareSize = 100/gridSize;
            square.style.width = `${squareSize}%`;
            square.style.paddingBottom = `${squareSize}%`;
            smallContainer.appendChild(square);
        }
        bigContainer.appendChild(smallContainer);

        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = "rgb(255, 55, 89)";
            })
        })
    }
});



