import jwtDecode from 'jwt-decode';
import config from '../Config';

let _timeoutId;
const _SECOND_TIMER_IN_MS = 5 * 60 * 1000; // 10 seconds // desired_seconds * seconds_per_miliseconds

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
  parseJwt(jwt) {
    return jwtDecode(jwt);
  },
  readJwtToken() {
    return TokenService.parseJwt(TokenService.getAuthToken());
  },
  _getMsUntilExpiry(payload) {
    /*
      payload is from the JWT
      the 'exp' value is in seconds, need to convert to ms, so * 1000
      calculates the difference between now and when the JWT will expire
    */
    return (payload.exp * 100) - Date.now();
  },
  queueCallbackBeforeExpiry(callback) {
    // get the number of ms from now until the token expires
    const msUntilExpiry = TokenService._getMsUntilExpiry(
      TokenService.readJwtToken()
    );
    /*
      queue a callback that will happen 10 seconds before the token expires
      the callback is passed in as an argument so could be anything,
        in this app, the callback is for calling the refresh endpoint
    */
    // _timeoutId = setTimeout(callback, msUntilExpiry - _SECOND_TIMER_IN_MS);
  },
  clearCallbackBeforeExpiry() {
    clearTimeout(_timeoutId);
  }
}

export default TokenService;