export default () => {
  let timeout;

  return function (fn) {
    let context = this;
    let args = arguments;

    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }
    timeout = window.requestAnimationFrame(function () {
      fn.apply(context, args);
    });
  };
};
