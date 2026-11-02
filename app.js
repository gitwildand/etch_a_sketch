const container = document.querySelector("#container");
const GRID_SIZE = 16;

for(let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
}