let words = ['CaRs', 'scar', 'foR', 'poTatos', 'four', 'creams', 'scream', 'racs'];

function combineAnagrams(strArr) {
    let words = sortWords(strArr);
    let match = []
    let anagram = []

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[i] === words[j]) {
                match.push(strArr[j]);
            }
        }
        anagram.push(match);
        match = [];
    }

    return removeDuplicates(anagram);
}

function removeDuplicates(data) {
    let strArr = [];
    let uniqueStr = [];
    let uniqueArr = [];

    data.forEach(element => strArr.push(element.join(', ')));

    strArr.forEach((element) => {
        if (!uniqueStr.includes(element)) {
            uniqueStr.push(element);
        }
    });

    for (let i = uniqueStr.length; i > 0; i--) {
        uniqueArr.push(uniqueStr.slice(i - 1))
        uniqueStr.pop()
    }

    console.log(uniqueArr);

}


function sortWords(strArr) {
    let sortedChars = [];

    for (let i = 0; i < strArr.length; i++) {
        sortedChars.push(strArr[i].toLowerCase().split('').sort(function (a, b) {
            return a.localeCompare(b);
        }));
    }

    var words = sortedChars;
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].join('');
    }

    return words;
}


console.log(combineAnagrams(words));