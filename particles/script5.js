// blazing particles

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const pentagonArray = [];
const pentagonGrid = [];


window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

class Pentagon {
    constructor(x, y) {
        this.x = x * 128 + 64;
        this.y = y;
        this.length = 128;
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
        ctx.lineTo(this.x + 0.50 * this.length, this.y + 0.25 * this.length)
        ctx.lineTo(this.x + 0.50 * this.length, this.y + 0.75 * this.length)
        ctx.lineTo(this.x + 0.00 * this.length, this.y + 1.00 * this.length)
        ctx.lineTo(this.x - 0.50 * this.length, this.y + 0.75 * this.length)
        ctx.lineTo(this.x - 0.50 * this.length, this.y + 0.25 * this.length)
        ctx.lineTo(this.x + 0.00 * this.length, this.y + 0.00 * this.length)

        ctx.stroke();
    }
}


function grid(length) {
    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < length; j++) {
                pentagonGrid.push(new Pentagon(i, j * 128));
            }
        } else {
            for (let j = 0; j < length; j++) {
                pentagonGrid.push(new Pentagon(i, j * 128));
            }
        }
    }
}

function init() {
    for (let i = 0; i < 10; i++) {
        pentagonArray.push(new Pentagon(i, i));
    }
    grid(6);
}


function handleParticles() {
    for (let i = 0; i < pentagonGrid.length; i++) {
        pentagonGrid[i].update();
        pentagonGrid[i].draw();
    }
}



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}


init();
animate();