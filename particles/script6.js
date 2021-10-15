// CANVAS INITIALISATION
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// CONSTANTES
const LENGHT = 64 // length of square


// VARIABLES 
var col, colRemainder, leftRightBorder
var row, rowRemainder, topBottomBorder

const pentagonArray = [];
const pentagonGrid = [];

const squareArray = [];
const squareGrid = [];


// EVENT LISTENERS
window.addEventListener('resize', function() {
    initGrid()
})


// FUNCTIONS
function initGrid() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    col = Math.floor(canvas.width / LENGHT)
    colRemainder = canvas.width % LENGHT
    leftRightBorder = colRemainder / 2

    row = Math.floor(canvas.height / LENGHT)
    rowRemainder = canvas.height % LENGHT
    topBottomBorder = rowRemainder / 2
    console.log(col + " columns (left to right) and " + row + " rows (top to bottom)")
}


// CLASS
class Square {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.length = LENGHT;
        this.color = [64, Math.random() * 64, Math.random() * 64];
    }

    update() {

    }

    draw() {
        ctx.beginPath();
        ctx.strokeStyle = `rgb(
            0,
            ${Math.floor(255 - 42.5 * 10*Math.random())},
            ${Math.floor(255 - 42.5 * 1*Math.random())})`;
        ctx.lineWidth = 1;

        ctx.moveTo(this.x + 0.00 * this.length, this.y + 0.00 * this.length)
        ctx.lineTo(this.x + 1.00 * this.length, this.y + 0.00 * this.length)
        ctx.lineTo(this.x + 1.00 * this.length, this.y + 1.00 * this.length)
        ctx.lineTo(this.x + 0.00 * this.length, this.y + 1.00 * this.length)
        ctx.lineTo(this.x + 0.00 * this.length, this.y + 0.00 * this.length)

        ctx.stroke();
    }
}


// ANIMATION
function init() {
    // left to right := columns
    for (let i = 0; i < col; i++) {
        // top to bottom := row
        for (let j = 0; j < row; j++) {
            // uuper left corner of square: x + borderLR/2; y + borderTB/2
            squareGrid.push(new Square(i * LENGHT + leftRightBorder, j * LENGHT + topBottomBorder))
        }
    }
}

function handleParticles() {
    for (let i = 0; i < squareGrid.length; i++) {
        squareGrid[i].update();
        squareGrid[i].draw();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

initGrid();
init();
animate();