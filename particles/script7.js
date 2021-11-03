// CANVAS INITIALISATION
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// CONSTANTES
const LENGTH = 64

// VARIABLES 


// EVENT LISTENERS
window.addEventListener('resize', function() {
    initGrid()
})

// FUNCTIONS
function initGrid() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


// ANIMATION
function init() {}

function handleParticles() {}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

ctx.beginPath();
ctx.strokeStyle = `rgb(
    0,
    ${Math.floor(255 - 42.5 * 10*Math.random())},
    ${Math.floor(255 - 42.5 * 1*Math.random())})
    `;
ctx.lineWidth = 1;


function drawRect(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + LENGTH, y);
    ctx.lineTo(x + LENGTH, y + LENGTH);
    ctx.lineTo(x, y + LENGTH);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawPent(x, y) {
    ctx.beginPath();
    ctx.moveTo(x + 0.00 * LENGTH, y + 0.00 * LENGTH);
    ctx.lineTo(x + 0.50 * LENGTH, y - 0.25 * LENGTH);
    ctx.lineTo(x + 1.00 * LENGTH, y + 0.00 * LENGTH);
    ctx.lineTo(x + 1.00 * LENGTH, y + 0.50 * LENGTH);
    ctx.lineTo(x + 0.50 * LENGTH, y + 0.75 * LENGTH);
    ctx.lineTo(x + 0.00 * LENGTH, y + 0.50 * LENGTH);
    ctx.lineTo(x + 0.00 * LENGTH, y + 0.00 * LENGTH);
    ctx.stroke();
}
/*
for (let row = 1; row < 4; row++) {
    for (let col = 1; col < 3; col++) {
        drawRect(row * LENGTH, col * LENGTH)
    }
}
*/
//drawRect(100, 100);
//drawPent(100, 200);

for (let j = 1; j < 10; j++) { // j goes from top to bottom
    for (let i = 1; i < 6; i++) { // i goes form left to right
        if (j % 2) {
            ctx.strokeStyle = 'blue';
            drawPent(i * LENGTH, 0.75 * j * LENGTH)
        } else {
            ctx.strokeStyle = 'blue';
            drawPent(i * LENGTH + 0.5 * LENGTH, 0.75 * j * LENGTH)
        }
    }
}