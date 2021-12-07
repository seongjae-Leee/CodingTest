const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ').map(value => + value);
const [a, b] = inputData;
console.log(a + b);