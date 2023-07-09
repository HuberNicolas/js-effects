// CANVAS INITIALISATION
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// CONSTANTES
const LENGTH = 128

    // COLORS
const RED = `rgb(255, 0, 0)`;
const BLUE = `rgb(0, 0, 255)`;
const YELLOW = `rgb(0, 255, 255)`;
const BLACK = `rgb(0, 0, 0)`;
const WHITE = `rgb(255, 255, 255)`;


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
ctx.strokeStyle = WHITE;
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

function drawCross(x, y) {
    ctx.beginPath();
    ctx.moveTo(x + 0.50 * LENGTH, y + 0.00 * LENGTH);
    ctx.lineTo(x + 0.50 * LENGTH, y + 1.00 * LENGTH);
    ctx.stroke();
    ctx.moveTo(x + 0.00 * LENGTH, y + 0.50 * LENGTH);
    ctx.lineTo(x + 1.00 * LENGTH, y + 0.50 * LENGTH);
    ctx.stroke();
}
ctx.strokeStyle = 'white';
drawCross(LENGTH, LENGTH)
