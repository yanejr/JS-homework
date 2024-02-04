const arr = [100,3934,-395,0, 3234, 3945, -9348];
function sortArr(arr){
    let newArr = arr.slice();
    for(let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < arr.length; j++){
            if(newArr[j] < newArr[j + 1]){
                let element = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = element;
            }
        }
    }
    return newArr;
}
console.log(sortArr(arr))
