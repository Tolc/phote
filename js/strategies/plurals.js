(function(Phote, Strategies, undefined) {

    var pluralEndsReplace = [
        {
            from: 'x',
            to: ['x', 's', '']
        },
        {
            from: 's',
            to: ['s', '']
        }
    ];

    Strategies.addStrategy({
        name: 'pluralStrategy',
        priority: 3,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            for (var i = 0; i < pluralEndsReplace.length; i++) {
                var current = pluralEndsReplace[i];
                var from = current.from;

                var regex = new RegExp(from + '$', 'i');
                if (regex.test(word)) {
                    if (Phote.options.logs) {
                        console.log('replace end [' + from + '] of word \'' + word + '\'!');
                    }
                    return word.replace(regex, Phote.Utils.randomFromArray(current.to));
                    break;
                }
            }
            return word;
        }
    });

}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || []));