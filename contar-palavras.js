function countWords(str) {
    let words = str.replace(/[^a-z A-Z]/mg, "").toLowerCase().split(' ');
    console.log(strFrequency(words));
}


function strFrequency(stringArr) {
    return stringArr.reduce(function (count, word) {
        count[word] = (count[word] || 0) + 1;

        return count;
    }, {});

}

countWords("Doo bee doo bee doo");