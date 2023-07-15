export default (numSteps = 5) => {
  let thresholds = [];

  for (let i = 0; i < numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0);
  return thresholds;
};
