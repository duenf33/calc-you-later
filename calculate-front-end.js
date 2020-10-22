
const calculate = require('./calculate-back-end.js');


// //*************************
// let numberIndex = 0;
// let found = false
// for(let i = 0; i < process.argv.length; i++){
//     if(isNaN(element)=== false && found === false){
//         numberIndex = i;
//         found = true;
//     }
// }
// const input = process.argv.slice(numberIndex);
//*************************




const num1 = process.argv[2]
const operation = process.argv[3]
const num2 = process.argv[4]


const result = calculate(num1, num2, operation);
// console.log(result);

if(process.argv[5] !== undefined){
    const x = process.argv[2]
    const y = process.argv[5]
    const operator = process.argv[3] + ' ' + process.argv[4];

    const longerResult = calculate(x, y, operator);
} else {
    console.log(calculate(num1, num2, operation));
}