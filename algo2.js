function estPalindrome (str){
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(estPalindrome("radar"));