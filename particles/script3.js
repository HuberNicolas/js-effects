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

class Line {
    constructor() {
        this.x = Math.random() * canvas.height;
        this.y = Math.random() * canvas.height;
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
        ctx.lineWidth = 10;
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y - this.length);
        ctx.stroke();
    }
}




function init() {
    for (let i = 0; i < 50; i++) {
        linesArray.push(new Line());
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