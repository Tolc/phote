(function(Phote, Strategies, Rules, undefined) {

    //var pluralEndsReplace = [
    //    {
    //        from: 'x',
    //        to: ['x', 's', '']
    //    },
    //    {
    //        from: 's',
    //        to: ['s', '']
    //    }
    //];

    var pluralRules = new Rules.Rule('', '$', '', '$', 'Plural');
    var level1 = new Rules.LevelRule();
    var level2 = new Rules.LevelRule();
    var level3 = new Rules.LevelRule();
    var level4 = new Rules.LevelRule();

    level1.addFrom('s', [{prct: 95, value: 's'}, {prct: 5, value: ''}]);
    level2.addFrom('s', [{prct: 60, value: 's'}, {prct: 40, value: ''}]);
    level3.addFrom('s', [{prct: 40, value: 's'}, {prct: 60, value: ''}]);
    level4.addFrom('s', [{prct: 20, value: 's'}, {prct: 80, value: ''}]);

    level1.addFrom('x', [{prct: 95, value: 'x'}, {prct: 3, value: 's'}, {prct: 2, value: ''}]);
    level2.addFrom('x', [{prct: 60, value: 'x'}, {prct: 20, value: 's'}, {prct: 20, value: ''}]);
    level3.addFrom('x', [{prct: 40, value: 'x'}, {prct: 30, value: 's'}, {prct: 30, value: ''}]);
    level4.addFrom('x', [{prct: 20, value: 'x'}, {prct: 40, value: 's'}, {prct: 40, value: ''}]);

    pluralRules.addLevel(1, level1);
    pluralRules.addLevel(2, level2);
    pluralRules.addLevel(3, level3);
    pluralRules.addLevel(4, level4);

    if (Phote.options.logs) {
        console.log('Prefix rules: ', pluralRules);
    }

    Strategies.addStrategy({
        name: 'pluralStrategy',
        priority: 3,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            //for (var i = 0; i < pluralEndsReplace.length; i++) {
            //    var current = pluralEndsReplace[i];
            //    var from = current.from;
            //
            //    var regex = new RegExp(from + '$', 'i');
            //    if (regex.test(word)) {
            //        if (Phote.options.logs) {
            //            console.log('replace end [' + from + '] of word \'' + word + '\'!');
            //        }
            //        return word.replace(regex, Phote.Utils.randomFromArray(current.to));
            //    }
            //}
            //return word;
            return pluralRules.executeOnWord(word);
        }
    });

}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || {}, window.Phote.Rules = window.Phote.Rules || {}));