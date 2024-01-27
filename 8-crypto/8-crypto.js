
function passwordСipher(password){
    const pass = password.split('');
        const firstPart = pass.splice(0,3);
        const secondPart = pass.splice(0,3);
        const thirdPart = pass.splice(0,3);
        const fourthPart = pass.splice(0,3);
        firstPart.reverse();
        thirdPart.reverse();
        const firstElement = secondPart.shift();
        secondPart.push(firstElement);
        const secondElement = fourthPart.shift();
        secondPart.push(secondElement);
        const resultString = firstPart.join('-') + secondPart.join('-') + thirdPart.join('-') + fourthPart.join('-');
        console.log(resultString)
        return resultString;
}

function checkPass(resultString,pass2){
    let pass = resultString.split('-');
    pass = pass.join('');
    pass = pass.split('');
    const firstPartCheck = pass.splice(0,3);
    const secondPartCheck = pass.splice(0,3);
    const thirdPartCheck = pass.splice(0,3);
    const fourthPartCheck = pass.splice(0,3);
    firstPartCheck.reverse();
    thirdPartCheck.reverse();
    const firstElementCheck = secondPartCheck.pop();
    secondPartCheck.unshift(firstElementCheck);
    const secondElementCheck = fourthPartCheck.pop();
    secondPartCheck.unshift(secondElementCheck);
    const resultCheckString = firstPartCheck.join('') + secondPartCheck.join('') + thirdPartCheck.join('') + fourthPartCheck.join('');
    console.log(resultCheckString);
    console.log(`Второй пароль: ${pass2}`)
    if (pass2 === resultCheckString){
        console.log(true);
    } else console.log(false)
}


const resultString = passwordСipher('pikachu2903');
checkPass(resultString, 'pikachu2903');


