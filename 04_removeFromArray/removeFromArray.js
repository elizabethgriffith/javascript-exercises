const removeFromArray = function(...args) {
    const array = args[0]
    const newArray = []

    array.forEach((el) => {
        if(!args.includes(el)){
            newArray.push(el)
        }
    })

    return newArray
};


// Do not edit below this line
module.exports = removeFromArray;
