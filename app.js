const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");
const TOTAL_SIZE = 960;
const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;

function createGrid(size) {
    container.innerHTML = '';

    const squareSize = TOTAL_SIZE / size;

    for(let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.classList.add('active');
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

