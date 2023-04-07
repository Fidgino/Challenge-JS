function cipher(string, cipherNumber) {
    string = string.toLowerCase();
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];
    let newArray = []
    let newString = string.split('');
    console.log(newString);
    for(let i = 0; i < newString.length; i++){
        for(let e = 0; e < alphabet.length; e++){
            if(newString[i] === alphabet[e]){
                newArray.push(alphabet[e+cipherNumber]);
            }
        }
    }
    return newArray.join('')
}
console.log(cipher('Bonjour je suis Jules', 0));