const { findSourceMap } = require("module");

function firstAndLast(array) {
    return [ array.shift(), array.pop() ]
}

console.log(firstAndLast([0, 1, 2, 3, 4]))
console.log(firstAndLast([7, 14, 'Ola']))