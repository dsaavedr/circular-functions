var r = 200,
    delta = 0.025,
    angle = 0,
    graphOffset = 20;

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

function init() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    canvas.setAttribute("width", WIDTH);
    canvas.setAttribute("height", HEIGHT);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.translate(WIDTH / 4, HEIGHT / 2);

    ani();
}

function ani() {
    ctx.fillRect(-WIDTH / 4, -HEIGHT / 2, WIDTH, HEIGHT);

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.closePath();

    var v = Vector.fromAngle(angle);
    v.setMag(r);

    ctx.save();
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -r);
    ctx.lineTo(0, r);
    ctx.moveTo(-r, 0);
    ctx.lineTo(r, 0);
    ctx.moveTo(0, v.y);
    ctx.lineTo(v.x, 0);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    ctx.lineWidth = 1;
    ctx.translate(WIDTH / 4, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(graphOffset + 2 * r, 0);
    ctx.moveTo(graphOffset, -r);
    ctx.lineTo(graphOffset, r);
    ctx.stroke();
    ctx.restore();

    point(0, v.y, "red", 8);
    point(v.x, 0, "red", 8);
    point(v.x, v.y, "lightblue", 10);

    angle += delta;

    requestAnimationFrame(ani);
}

init();
