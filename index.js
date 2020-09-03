// Your code here
function mapToNegativize(sourceArray) {
    const newArray = [];
    sourceArray.forEach(number => {
        newArray.push(number * -1);
    })
    return newArray;
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    const newArray = [];
    sourceArray.forEach(number => {
        newArray.push(number * 2);
    })
    return newArray;
}

function mapToSquare(sourceArray) {
    const newArray = [];
    sourceArray.forEach(number => {
        newArray.push(number ** 2);
    })
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    sourceArray.forEach(number => {
        total = total + number;
    })
    return total;
}

function reduceToAllTrue(sourceArray) {
    let isTrue = true;
    sourceArray.forEach(value => {
        if (value == false) {
            isTrue = false;
        }
    })
    return isTrue;
}

function reduceToAnyTrue(sourceArray) {
    let isTrue = false;
    sourceArray.forEach(value => {
        if (value == true) {
            isTrue = true;
        }
    })
    return isTrue;
}