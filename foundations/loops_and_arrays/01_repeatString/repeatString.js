const repeatString = function(time, word) {
    if(time<0) return "Error";
    let string = "";
    for (let i= 0; i<time; i++){
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
