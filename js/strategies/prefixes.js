(function(Phote, Strategies, undefined) {

    var interchangeablePrefixes = [
        ['s', 'c']
    ];

    Strategies.addStrategy({
        name: 'prefixStrategy',
        priority: 4,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            for (var i = 0; i < interchangeablePrefixes.length; i++) {
                var prefixes = interchangeablePrefixes[i];
                for (var j = 0; j < prefixes.length; j++) {
                    var prefix = prefixes[j];
                    var regex = new RegExp('^' + prefix + '(.)+', 'i');
                    if (regex.test(word)) {
                        if (Phote.options.logs) {
                            console.log('replace prefix \'' + word + '\'!');
                        }
                        return word.replace(new RegExp('^' + prefix, 'i'), Phote.Utils.randomFromArray(prefixes));
                    }
                }
            }
            return word;
        }
    });


}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || []));