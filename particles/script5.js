// blazing particles

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const linesArray = [];


window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

class Pentagon {
    constructor(x, y) {
        this.x = x * 150;
        this.y = y;
        this.length = 100;
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




function init() {
    for (let i = 0; i < 10; i++) {
        linesArray.push(new Pentagon(i, i));
    }
}


function handleParticles() {
    for (let i = 0; i < linesArray.length; i++) {
        linesArray[i].update();
        linesArray[i].draw();
    }
}



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}


init();
animate();