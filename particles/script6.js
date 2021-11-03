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

    row = Math.floor(canvas.height / LENGHT) * (1 / 0.75)
    rowRemainder = canvas.height % LENGHT
    topBottomBorder = rowRemainder / 2
    console.log(col + " columns (left to right) and " + row + " rows (top to bottom)")
}


// CLASS
class Pentagon {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.length = LENGHT;
        this.color = [64, Math.random() * 64, Math.random() * 64];
    }

    update() {

    }

    draw() {
        ctx.strokeStyle = 'green'
        ctx.lineWidth = 1

        ctx.moveTo(this.x + 0.00 * this.length, this.y + 0.00 * this.length)
        ctx.lineTo(this.x + 0.50 * this.length, this.y - 0.25 * this.length)
        ctx.lineTo(this.x + 1.00 * this.length, this.y + 0.00 * this.length)
        ctx.lineTo(this.x + 1.00 * this.length, this.y + 0.50 * this.length)
        ctx.lineTo(this.x + 0.50 * this.length, this.y + 0.75 * this.length)
        ctx.lineTo(this.x + 0.00 * this.length, this.y + 0.50 * this.length)
        ctx.lineTo(this.x + 0.00 * this.length, this.y + 0.00 * this.length)

        ctx.stroke();
    }
}


// ANIMATION
function init() {
    /*
    // left to right := columns
    for (let i = 0; i < col; i++) {
        // top to bottom := row
        for (let j = 0; j < row; j++) {
            // uuper left corner of square: x + borderLR/2; y + borderTB/2
            squareGrid.push(new Square(i * LENGHT + leftRightBorder, j * LENGHT + topBottomBorder))
        }
    }
    */
    /*
     for (let i = 0; i < col; i++) {
         for (let j = 0; j < row; j++) {
             if (!(j % 2)) {
                 pentagonArray.push(new Pentagon(i * LENGHT + leftRightBorder, j * LENGHT + topBottomBorder))
             } else {
                 pentagonArray.push(new Pentagon(i * LENGHT + 2 * leftRightBorder, j * LENGHT + topBottomBorder))
             }

         }

     }
     */

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (j % 2) {
                pentagonArray.push(new Pentagon(i * LENGHT + leftRightBorder + 0.5 * LENGHT, 0.75 * j * LENGHT + topBottomBorder))
            } else {
                pentagonArray.push(new Pentagon(i * LENGHT + leftRightBorder, 0.75 * j * LENGHT + topBottomBorder))
            }

        }

    }

}

function handleParticles() {
    for (let i = 0; i < pentagonArray.length; i++) {
        pentagonArray[i].update();
        pentagonArray[i].draw();
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