(function(Phote, Strategies, undefined) {

    var interchangeableSuffixes = [
        ['ait', 'aient', 'ais', 'é', 'ée', 'er', 'ez', 'és', 'ées', 'et', 'ets']
    ];

    Strategies.addStrategy({
        name: 'suffixStrategy',
        priority: 1,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            for (var i = 0; i < interchangeableSuffixes.length; i++) {
                var suffixes = interchangeableSuffixes[i];
                for (var j = 0; j < suffixes.length; j++) {
                    var suffix = suffixes[j];
                    var regex = new RegExp('(.)+' + suffix + '$', 'i');
                    if (regex.test(word)) {
                        if (Phote.options.logs) {
                            console.log('replace suffix \'' + word + '\'!');
                        }
                        return word.replace(new RegExp(suffix + '$', 'i'), Phote.Utils.randomFromArray(suffixes));
                    }
                }
            }
            return word;
        }
    });


}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || []));