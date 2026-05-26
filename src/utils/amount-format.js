export function amountFormat(amount){
    return `$${(amount/100).toFixed(2)}`
}