export default function showProgress({
  timeInterval = 10,
  progressValue = 100,
  currProgress,
  progressBarRef,
  progressValueRef,
} = {}) {
  let interval;

  function init() {
    if (currProgress >= progressValue) {
      clearInterval(interval);
    } else {
      if (
        progressBarRef.current != undefined &&
        progressValueRef.current != undefined
      ) {
        progressBarRef.current.style.width = `${++currProgress}%`;
        progressValueRef.current.innerText = `${currProgress}%`;
      }
    }
  }
  interval = setInterval(init, timeInterval);
}
