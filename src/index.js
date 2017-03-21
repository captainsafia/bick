const colors = require('colors');

const isFunction = (a) => typeof a === 'function';

const logNumber = function(number) {
  let parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const STRIP_INLINE_COMMENTS = /[/][/].*$/mg;
const STRIP_WHITESPACE = /\s+/g;
const STRIP_MULTILINE_COMMENTS = /[/][*][^/*]*[*][/]/g;
const STRIP_ES6_DEFAULTS = /=[^,]+/g;

const getParameters = function(func) {
  return func.toString()
    .replace(STRIP_INLINE_COMMENTS, '')
    .replace(STRIP_WHITESPACE, '')
    .replace(STRIP_MULTILINE_COMMENTS, '')
    .split('){', 1)[0].replace(/^[^(]*[(]/, '')
    .replace(STRIP_ES6_DEFAULTS, '')
    .split(',').filter(Boolean);
}

const logFunction = function(func) {
  const parameters = getParameters(func);
  return func.name + '(' + parameters.join(', ') + ')';
};

const log = function(item) {
  switch(typeof item) {
    case "undefined":
      return console.log(colors.red('undefined'));
    case "object":
      return console.log(JSON.stringify(item, null, '\t'));
    case "boolean":
      return console.log(item)
    case "number":
      return console.log(logNumber(item));
    case "string":
      return console.log(item);
    case "function":
      if (isFunction(item))
        return console.log(logFunction(item));
      return console.log(item);
    default:
      return console.log(item);
  };
};

module.exports = { log };
