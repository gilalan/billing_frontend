
const currencyFormatter = function(number){
    const curFtr = new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
    });
    return curFtr.format(number);
}

export {
    currencyFormatter
}