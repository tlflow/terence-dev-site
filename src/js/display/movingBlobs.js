export default () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let time = 0;

  const color = function (x, y, r, g, b) {
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(x, y, 10, 10);
  };

  const R = function (x, y, time) {
    return Math.floor(52 + 64 * Math.cos((x * x - y * y) / 300 + time));
  };

  const G = function (x, y, time) {
    return Math.floor(
      192 +
        64 *
          Math.sin(
            (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
          )
    );
  };

  const B = function (x, y, time) {
    return Math.floor(
      232 +
        64 *
          Math.sin(
            5 * Math.sin(time / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
    );
  };

  const startAnimation = function () {
    for (let x = 0; x <= 30; x++) {
      for (let y = 0; y <= 30; y++) {
        color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
      }
    }
    time = time + 0.008;
    window.requestAnimationFrame(startAnimation);
  };

  startAnimation();
}
