/**Web API 相关 */

/**
 * 全屏
 * @param {*} element
 */
export const fullScreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
};

/**
 * 退出全屏
 * @param {*} element
 */
export const exitFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozExitFullScreen) {
    document.mozExitFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

/**
 * 检查当前是否全屏
 * @param {*} element
 */
export const checkFullScreen = () => {
  let isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
  if (isFull === undefined) isFull = false;
  console.log(isFull)
  return isFull;
}