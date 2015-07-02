(function(Phote, Strategies, Rules, undefined) {

    //var interchangeablePrefixes = [
    //    ['s', 'c']
    //];

    var prefixRules = new Rules.Rule('^', '(.)+', '^', '', 'Prefix');
    var level1 = new Rules.LevelRule();
    var level2 = new Rules.LevelRule();
    var level3 = new Rules.LevelRule();
    var level4 = new Rules.LevelRule();

    level1.addFrom('s', [{prct: 95, value: 's'}, {prct: 5, value: 'ç'}]);
    level2.addFrom('s', [{prct: 60, value: 's'}, {prct: 40, value: 'ç'}]);
    level3.addFrom('s', [{prct: 40, value: 's'}, {prct: 60, value: 'ç'}]);
    level4.addFrom('s', [{prct: 20, value: 's'}, {prct: 80, value: 'ç'}]);

    level1.addFrom('ç', [{prct: 95, value: 'ç'}, {prct: 5, value: 's'}]);
    level2.addFrom('ç', [{prct: 60, value: 'ç'}, {prct: 40, value: 's'}]);
    level3.addFrom('ç', [{prct: 40, value: 'ç'}, {prct: 60, value: 's'}]);
    level4.addFrom('ç', [{prct: 20, value: 'ç'}, {prct: 80, value: 's'}]);

    level1.addFrom('f', [{prct: 95, value: 'f'}, {prct: 5, value: 'ph'}]);
    level2.addFrom('f', [{prct: 60, value: 'f'}, {prct: 40, value: 'ph'}]);
    level3.addFrom('f', [{prct: 40, value: 'f'}, {prct: 60, value: 'ph'}]);
    level4.addFrom('f', [{prct: 20, value: 'f'}, {prct: 80, value: 'ph'}]);

    level1.addFrom('ph', [{prct: 95, value: 'ph'}, {prct: 5, value: 'f'}]);
    level2.addFrom('ph', [{prct: 60, value: 'ph'}, {prct: 40, value: 'f'}]);
    level3.addFrom('ph', [{prct: 40, value: 'ph'}, {prct: 60, value: 'f'}]);
    level4.addFrom('ph', [{prct: 20, value: 'ph'}, {prct: 80, value: 'f'}]);

    level1.addFrom('h', [{prct: 95, value: 'h'}, {prct: 5, value: ''}]);
    level2.addFrom('h', [{prct: 60, value: 'h'}, {prct: 40, value: ''}]);
    level3.addFrom('h', [{prct: 40, value: 'h'}, {prct: 60, value: ''}]);
    level4.addFrom('h', [{prct: 20, value: 'h'}, {prct: 80, value: ''}]);

    prefixRules.addLevel(1, level1);
    prefixRules.addLevel(2, level2);
    prefixRules.addLevel(3, level3);
    prefixRules.addLevel(4, level4);

    if (Phote.options.logs) {
        console.log('Prefix rules: ', prefixRules);
    }

    Strategies.addStrategy({
        name: 'prefixStrategy',
        priority: 4,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            //for (var i = 0; i < interchangeablePrefixes.length; i++) {
            //    var prefixes = interchangeablePrefixes[i];
            //    for (var j = 0; j < prefixes.length; j++) {
            //        var prefix = prefixes[j];
            //        var regex = new RegExp('^' + prefix + '(.)+', 'i');
            //        if (regex.test(word)) {
            //            if (Phote.options.logs) {
            //                console.log('replace prefix \'' + word + '\'!');
            //            }
            //            return word.replace(new RegExp('^' + prefix, 'i'), Phote.Utils.randomFromArray(prefixes));
            //        }
            //    }
            //}
            //return word;
            return prefixRules.executeOnWord(word);
        }
    });


}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || {}, window.Phote.Rules = window.Phote.Rules || {}));