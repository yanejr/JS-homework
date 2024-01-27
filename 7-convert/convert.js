function convert(currency1 = null, currency2 = null, sum){
    if ((currency1 === 'usd' || currency1 === '$') && (currency2 === 'rub' || currency2 === '₽')) {
        return sum * 88.87;
    } else if ((currency1 === 'rub' || currency1 === '₽') && (currency2 === 'usd' || currency2 === '$')){
        return sum / 88.87;
    }
    else if ((currency1 === 'usd' || currency1 === '$') && (currency2 === 'eur' || currency2 === '€')) {
        return sum * 0.92;
    } else if ((currency1 === 'eur' || currency1 === '€') && (currency2 === 'usd' || currency2 === '$')){
        return sum * 1.09;
    }
    else if ((currency1 === 'eur' || currency1 === '€') && (currency2 === 'rub' || currency2 === '₽')) {
        return sum * 96.71;
    } else if ((currency1 === 'rub' || currency1 === '₽') && (currency2 === 'eur' || currency2 === '€')){
        return sum / 96.71;
    }
}
console.log(convert( 'rub','$' ,200))


