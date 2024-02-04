const arr = ['11/07/2023', 'тест', '23-11-23', 'aaaaa', '20-30-202'];

arr.filter(el => {
    return el.includes('/') || el.includes('-');
})
    .forEach(el => {
        const newEl = el.split('/').join('-').split('-');
        const firstPart = parseInt(newEl[0]);
        const secondPart = parseInt(newEl[1]);
        const thirdPart = parseInt(newEl[2]);

        if (0 < firstPart && firstPart <= 31 && 0 < secondPart && secondPart <= 12) {
            console.log(`valid date: ${el}`);
        } else {
            console.log(`invalid date: ${el}`);
        }
    });
