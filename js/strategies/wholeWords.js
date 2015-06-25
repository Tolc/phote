(function(Phote, Strategies, undefined) {

    var interchangeableWords = [
        ['ça', 'sa', 'ca'],
        ['et', 'est'],
        ['ces', 'ses'],
        ['cette', 'cet']
    ];

    Strategies.addStrategy({
        name: 'wholeWordStrategy',
        priority: 2,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            for (var i = 0; i < interchangeableWords.length; i++) {
                var inWords = interchangeableWords[i];
                for (var j = 0; j < inWords.length; j++) {
                    var inWord = inWords[j];
                    var regex = new RegExp('^' + inWord + '$', 'i');
                    if (inWord == word || regex.test(word)) {
                        if (Phote.options.logs) {
                            console.log('replace word \'' + word + '\'!');
                        }
                        return Phote.Utils.randomFromArray(inWords);
                    }
                }
            }
            return word;
        }
    });

}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || []));