import buildThresholds from "../utils/thresholds";

export default () => {
  const animationItems = document.getElementsByClassName("animate");
  const animationItemsArray = Array.from(animationItems);

  function createObservers() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholds(5),
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.4) {
          entry.target.classList.add("fade");
        }
      });
    }, options);

    for (const item of animationItemsArray) {
      observer.observe(item);
    }
  }

  createObservers();
};
