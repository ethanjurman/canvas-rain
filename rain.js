function init() {
  window.requestAnimationFrame(draw);
}

const buildRainDrop = () => {
  const distance = Math.floor((Math.random() * 10));
  return {
    x: Math.floor((Math.random() * 420)),
    y: Math.floor((Math.random() * 300)) - 50,
    len: distance + 5,
    speed: distance + 5,
  }
}

const rainDrops = Array.apply(null, Array(600)).map(buildRainDrop);

const updateRainDrop = (drop, index) => {
  const y = drop.y > 300 ? -50 : drop.y + drop.speed;
  rainDrops[index] = {...drop, y};
}

function drawRain(ctx, rainDrop) {
  const {x, y, len} = rainDrop;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + len);
  ctx.strokeStyle="#FFFFFF";
  ctx.stroke();
}

function draw() {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < rainDrops.length; i++) {
    const rainDrop = rainDrops[i];
    drawRain(ctx, rainDrop);
    updateRainDrop(rainDrop, i);
  }

  window.requestAnimationFrame(draw);
}

init();