var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var w = canvas.getAttribute('width');
var h = canvas.getAttribute('height');
var c = 6;
var rad = 3;
var n = 1;
var ang = Number(document.querySelector('input').value)/100;
var phi;
var x, y;

document.querySelector('input').addEventListener('change', function(e) {
  ctx.clearRect(0,0,w,h);
  ang = Number(e.target.value)/100;
  n = 1;
});

function draw() {
  ctx.beginPath();
  for (var i=0; i<n; i++) {
    ctx.fillStyle = 'hsl(' + (phi % 360) + ', 50%, 50%)';
    phi = n * ang * Math.PI / 180;
    r = c * Math.sqrt(n);
    x = w/2 + r * Math.cos(phi);
    y = h/2 + r * Math.sin(phi);
    ctx.arc(x, y, rad, 0, 2*Math.PI);
  }
  ctx.fill();
  n++;
  if (y > h) {
    n = 1;
    ang = Math.random() * 360;
    ctx.clearRect(0,0,w,h);
  }
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText('ang = ' + ang.toFixed(4), 0,50);
}

setInterval(draw, 10);