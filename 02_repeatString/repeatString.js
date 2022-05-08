//- You're going to want to use a loop for this one.

//- Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.


const repeatString = function(string, num) {
    let repeatedString = ""
    if ( num < 0){
        return 'ERROR'
    }
    for (let i = 0 ; i < num ; i++){
        repeatedString = repeatedString + string
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
