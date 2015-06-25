(function(Phote, Strategies, undefined) {

    var interchangeableParts = [
        ['ss', 'c', 'ç'],
        ['nn', 'n'],
        ['mm', 'm']
    ];

    Strategies.addStrategy({
        name: 'inWordStrategy',
        priority: 5,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            for (var i = 0; i < interchangeableParts.length; i++) {
                var parts = interchangeableParts[i];
                for (var j = 0; j < parts.length; j++) {
                    var part = parts[j];
                    var regex = new RegExp('(.)+' + part + '(.)+', 'i');
                    if (regex.test(word)) {
                        if (Phote.options.logs) {
                            console.log('replace part [' + part + '] of word \'' + word + '\'!');
                        }
                        return word.replace(new RegExp(part, 'i'), Phote.Utils.randomFromArray(parts));
                    }
                }
            }
            return word;
        }
    });


}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || []));