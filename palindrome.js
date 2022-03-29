function palindrome(str) {

    const modifiedStr = str.replace(/[^a-zA-Z]/mg, "").toLowerCase();
    const chars = modifiedStr.split('');
    const invertedChars = [];
    const numOfCharacters = chars.length;

    for (var i = numOfCharacters - 1; i >= 0; i--) {
        invertedChars.push(chars[i]);
    }

    const invertedStr = invertedChars.join('');

    if (modifiedStr === invertedStr) {
        return true
    } else {
        return false
    }

}

console.log(palindrome('ana'));
console.log(palindrome('maam'));
console.log(palindrome('abracadabra'));
console.log(palindrome("Madam, I'm Adam"));