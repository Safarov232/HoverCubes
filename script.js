const container = document.getElementById('inner-c');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 1344;



for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');


    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);


}

// LIGHT MODE START

const btn = document.querySelector("#btn");

btn.addEventListener('click', (e) => {
        const html = document.querySelector('html');



        if (html.classList.contains('light')) {
            html.classList.toggle('light');
            html.classList.remove('light');
            e.target.innerHTML = 'LIGHT MODE';
        } else {
            html.classList.add('light');
            e.target.innerHTML = 'DARK MODE';
        }


    })
    // LIGHT MODE END

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}