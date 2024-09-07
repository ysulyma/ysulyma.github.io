(function(){

const settings = {
  subdivisions: 1000,
  fn: (x) => Math.cos(x) + Math.sin(x) + 2,
  a: -2,
  b: 2
};

const container = document.getElementById('two-container');
let {height, width} = container.getBoundingClientRect();

const canvas = document.createElement('canvas');
canvas.height = height;
canvas.width = width;
container.appendChild(canvas);

const ctx = canvas.getContext('2d');
ctx.scale(width / 100, height / 100);
ctx.translate(50, 50);

drawAxes();
plotGraph();

function drawAxes() {
  ctx.lineWidth = 0.4;
  ctx.strokeStyle = '#808080';

  ctx.beginPath();
  ctx.moveTo(0, -50);
  ctx.lineTo(0, 50);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-50, 0);
  ctx.lineTo(50, 0);
  ctx.stroke();
}

function plotGraph() {
  const {a, b, fn, subdivisions} = settings;
  const frag = (b - a) / subdivisions;

  const samples = [];

  for (var i = 0; i < subdivisions; i++) {
    const x = (settings.a + i * frag);
    const y = fn(x);
    samples.push([x, y]);
  }

  ctx.beginPath();
  ctx.lineWidth = 0.3;
  ctx.strokeStyle = '#00AEFF';

  ctx.moveTo(samples[0][0] * 10, -samples[0][1] * 10);
  for (let i = 1; i < samples.length; ++i)
    ctx.lineTo(samples[i][0] * 10, -samples[i][1] * 10);
  ctx.stroke();
}

window.api2 = {
  update(o) {
    Object.assign(settings, o);

    ctx.clearRect(-50, -50, 100, 100);
    drawAxes();
    plotGraph();
  }
};

})();
