//Utils
var randomFromArray = function(array, el) {
    if (el) {
        var item = el;
        while (item == el) {
            item = array[Math.floor(Math.random() * array.length)];
        }
        return item;
    } else {
        return array[Math.floor(Math.random() * array.length)];
    }
};





//Interchangeable whole word strategy
var interchangeableWords = [
    ['ça', 'sa', 'ca'],
    ['et', 'est'],
    ['ces', 'ses'],
    ['cette', 'cet']
];
var replaceWords = function(word) {
    for (var i = 0; i < interchangeableWords.length; i++) {
        var inWords = interchangeableWords[i];
        for (var j = 0; j < inWords.length; j++) {
            var inWord = inWords[j];
            var regex = new RegExp('^' + inWord + '$', 'i');
            if (inWord == word || regex.test(word)) {
                console.log('replace word \'' + word + '\'!');
                return randomFromArray(inWords);
            }
        }
    }
    return word;
};

//Interchangeable suffix strategy
var interchangeableSuffixes = [
    ['ait', 'aient', 'ais', 'é', 'ée', 'er', 'ez', 'és', 'ées', 'et', 'ets']
];
var replaceSuffixes = function(word) {
    for (var i = 0; i < interchangeableSuffixes.length; i++) {
        var suffixes = interchangeableSuffixes[i];
        for (var j = 0; j < suffixes.length; j++) {
            var suffix = suffixes[j];
            var regex = new RegExp(suffix + '$', 'i');
            var notRegex = new RegExp('^' + suffix + '$', 'i');
            if (regex.test(word) && !notRegex.test(word)) {
                console.log('replace suffix \'' + word + '\'!');
                return word.replace(regex, randomFromArray(suffixes));
            }
        }
    }
    return word;
};

function photeIt(text) {
    var pieces = text.trim().split(/\s+/);
    var words = [];
    for (var h = 0; h < pieces.length; h++) {
        var piece = pieces[h];
        var n = piece.search(/[^A-Za-z\u00C0-\u017F\-]+/);
        if (n > 0) {
            words.push(piece.substring(0, n));
            words.push(piece.substring(n, piece.length));
        } else {
            words.push(piece);
        }
        words.push(' ');
    }

    console.log(words);


    var photedWords = [];

    console.log('words: ' + words.length);
    var wordRegex = new RegExp('[A-Za-z\u00C0-\u017F\-]+');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (wordRegex.test(word)) {
            var newWord = replaceSuffixes(word);
            if (newWord == word) {
                newWord = replaceWords(word);
                if (newWord == word) {

                }
            }
            photedWords.push(newWord);
        } else {
            photedWords.push(word);
        }
    }

    console.log(photedWords);
    return photedWords.join('');
}