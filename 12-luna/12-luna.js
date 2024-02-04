function isCardValid(card) {
    card = card.replace(/-/g, '');

    for (let i = 0; i < card.length; i += 2) {
        let doubleNumber = Number(card[i]) * 2;

        if (doubleNumber > 9) {
            doubleNumber -= 9;
        }

        card = card.replace(card[i], doubleNumber.toString());
    }

    let sum = 0;
    for (const el of card) {
        sum += Number(el);
    }
    if(sum % 10 === 0){
        return true;
    }return false;
}

console.log(isCardValid('4111-1111-1111-1111'));
