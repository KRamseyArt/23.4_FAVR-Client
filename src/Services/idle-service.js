let _timeoutId;
let _idleCallback = null;
let _notIdleEvents = [
  'mousedown',
  'mousemove',
  'keypress',
  'scroll',
  'touchstart'];
let _TIMER_IN_MS = 5 * 60 * 1000; // 5 minutes // desired_minutes * seconds_per_minute * miliseconds_per_second

const idleService = {
  setIdleCallback(idleCallback) {
    // store a callback to call when the user goes idle
    _idleCallback = idleCallback;
  },
  // called when a user interacts with the page
  resetIdleTimer(ev) {
    // remove any timeouts as the user just interacted
    clearTimeout(_timeoutId);
    // queue the callback to happen 5 minutes from now
    _timeoutId = setTimeout(_idleCallback, _TIMER_IN_MS);
  },
  registerIdleTimerResets() {
    // register the resetIdleTimer for events when a user interacts with page
    _notIdleEvents.forEach(event =>
      document.addEventListener(event, idleService.resetIdleTimer, true)
    );
  },
  unRegisterIdleResets() {
    // remove any queued callbacks and events that will queue callbacks
    clearTimeout(_timeoutId);
    _notIdleEvents.forEach(event =>
      document.removeEventListener(event, idleService.resetIdleTimer, true)  
    );
  },
}

export default idleService;