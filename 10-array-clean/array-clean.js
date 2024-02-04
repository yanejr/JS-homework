function getArray(array) {
    return array;
}

function deleteElement(array) {
    let status = false;
    for (let element of array) {
        if (element <= 0) {
            status = true;
            return status;
        }
    }
    return status;
}

function sort(fn1, fn2) {
    if (fn2 === true) {
        for( let i = 0; i < fn1.length; i++){
            if(fn1[i] < 0){
                fn1.splice(i,1)
                i--;
            }
        }
    }
    return fn1;
}

const myArray = [1, 2, 3, -1, -1000, 0];
const arrayToSort = getArray(myArray);
const sortedArray = sort(arrayToSort, deleteElement(myArray));
console.log("Результат sort:", sortedArray);
