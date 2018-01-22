window.onerror = function (message, source, lineno, colno, error) {
  error.message = 'The Ting goes skrrraah!'
  return error
}
