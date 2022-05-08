//Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

const sumAll = function(num1, num2) {
    let totalSum = 0

    if ((num1 < 0 || num2 < 0) || 
        (typeof num1 != 'number' || typeof num2 != 'number')){
        return 'ERROR'
    }else if (num1 > num2){
        for (let i = num2 ; i <= num1 ; i++){
            //add i to the totalSum
            totalSum = totalSum + i 
        } 
        return totalSum
    } else {
        for (let i = num1 ; i <= num2 ; i++){
            //add i to the totalSum
            totalSum = totalSum + i 
        }
        return totalSum
    }
};

// Do not edit below this line
module.exports = sumAll;
