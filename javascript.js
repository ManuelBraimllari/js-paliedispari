const parola = prompt("Inserisci una parola");

if (isPalindrom(parola)){
    console.log('palindroma')
}else {
    console.log('non palindroma')
}

function isPalindrom(testParola){
    const invertParola = testParola.split('').reverse().join('');
    if (testParola === invertParola){
        return true
    } else {
        return false
    }

}
