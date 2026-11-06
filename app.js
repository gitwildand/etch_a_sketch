const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");
const TOTAL_SIZE = 960;
const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createGrid(size) {
    container.innerHTML = '';

    const squareSize = TOTAL_SIZE / size;

    for(let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        const squareColor = getRandomColor();

        let darkness = 0;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = squareColor;
            darkness = Math.min(darkness + 0.1, 1);
            square.style.opacity = darkness;
        });

        container.appendChild(square);
    }
}

createGrid(DEFAULT_SIZE);

resetBtn.addEventListener('click', () => {
    const input = prompt('Enter the number of squares per side for the new grid (1~100) :');

    if(input === null) return ;

    const size = Number(input);

    if(!Number.isInteger(size) || size < 1 || size > MAX_SIZE) {
        alert(`Enter an integer 1~${MAX_SIZE}`);
        return;
    }

    createGrid(size);
});

