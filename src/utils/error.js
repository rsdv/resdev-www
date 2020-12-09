/**
 * error.js
 *
 * Global error objects
 * */

export class HTTPError extends Error {

  constructor(message, status, code) {
    super(message);

    this.status = status
    this.code = code
  }

}
