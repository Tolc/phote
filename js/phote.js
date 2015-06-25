(function(Phote, undefined) {
    var wordRegex = new RegExp('[A-Za-z\u00C0-\u017F\-]+');

    Phote.options = {
        level: 2,
        logs: false
    };

    Phote.photeIt = function(text, options) {
        Phote.options = Phote.Utils.extend(Phote.options, options);

        var words = Phote.Utils.textToArray(text);
        if (Phote.options.logs) {
            console.log('Nb of words: ' + words.length);
        }

        var photedWords = [];


        //Apply the strategies for each word
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (wordRegex.test(word)) {     //if real word, not space nor symbol
                var newWord = Phote.Strategies.executeAllStrategies(word);
                photedWords.push(newWord);
            } else {
                photedWords.push(word);
            }
        }


        if (Phote.options.logs) {
            console.log(photedWords);
        }
        return photedWords.join('');
    }
}( window.Phote = window.Phote || {}));