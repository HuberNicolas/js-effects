// blazing particles

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];


window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

let counter = 1;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = [64, Math.random() * 64, Math.random() * 64];
    }

    update(counter) {
        this.x += 1.5 * Math.cos(Math.random() * counter / 10);
        this.y += 1.5 * Math.sin(Math.random() * counter / 10);
        console.log(counter);
    }

    draw() {
        ctx.fillStyle = `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


function init() {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}


function handleParticles(counter) {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(counter);
        particlesArray[i].draw();
    }
}



function animate(counter) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles(counter);
    requestAnimationFrame(animate);
    counter++;
}

init();
animate(counter);