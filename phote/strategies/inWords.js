(function(Phote, Strategies, Rules, undefined) {

    //var interchangeableParts = [
    //    ['ss', 'c', 'ç'],
    //    ['nn', 'n'],
    //    ['mm', 'm']
    //];

    var inWordRules = new Rules.Rule('[aeiouy]+', '[aeiouy]+', '', '', 'In word');
    var level1 = new Rules.LevelRule();
    var level2 = new Rules.LevelRule();
    var level3 = new Rules.LevelRule();
    var level4 = new Rules.LevelRule();

    level1.addFrom('ss', [{prct: 95, value: 'ss'}, {prct: 3, value: 'c'}, {prct: 2, value: 'ç'}]);
    level2.addFrom('ss', [{prct: 60, value: 'ss'}, {prct: 20, value: 'c'}, {prct: 20, value: 'ç'}]);
    level3.addFrom('ss', [{prct: 40, value: 'ss'}, {prct: 30, value: 'c'}, {prct: 30, value: 'ç'}]);
    level4.addFrom('ss', [{prct: 20, value: 'ss'}, {prct: 40, value: 'c'}, {prct: 40, value: 'ç'}]);

    level1.addFrom('ç', [{prct: 95, value: 'ç'}, {prct: 3, value: 'c'}, {prct: 2, value: 'ss'}]);
    level2.addFrom('ç', [{prct: 60, value: 'ç'}, {prct: 20, value: 'c'}, {prct: 20, value: 'ss'}]);
    level3.addFrom('ç', [{prct: 40, value: 'ç'}, {prct: 30, value: 'c'}, {prct: 30, value: 'ss'}]);
    level4.addFrom('ç', [{prct: 20, value: 'ç'}, {prct: 40, value: 'c'}, {prct: 40, value: 'ss'}]);

    //level1.addFrom('c', [{prct: 95, value: 'c'}, {prct: 3, value: 'ç'}, {prct: 2, value: 'ss'}]);
    //level2.addFrom('c', [{prct: 60, value: 'c'}, {prct: 20, value: 'ç'}, {prct: 20, value: 'ss'}]);
    //level3.addFrom('c', [{prct: 40, value: 'c'}, {prct: 30, value: 'ç'}, {prct: 30, value: 'ss'}]);
    //level4.addFrom('c', [{prct: 20, value: 'c'}, {prct: 40, value: 'ç'}, {prct: 40, value: 'ss'}]);

    level1.addFrom('nn', [{prct: 95, value: 'nn'}, {prct: 5, value: 'n'}]);
    level2.addFrom('nn', [{prct: 60, value: 'nn'}, {prct: 40, value: 'n'}]);
    level3.addFrom('nn', [{prct: 40, value: 'nn'}, {prct: 60, value: 'n'}]);
    level4.addFrom('nn', [{prct: 20, value: 'nn'}, {prct: 80, value: 'n'}]);

    level1.addFrom('n', [{prct: 95, value: 'n'}, {prct: 5, value: 'nn'}]);
    level2.addFrom('n', [{prct: 60, value: 'n'}, {prct: 40, value: 'nn'}]);
    level3.addFrom('n', [{prct: 40, value: 'n'}, {prct: 60, value: 'nn'}]);
    level4.addFrom('n', [{prct: 20, value: 'n'}, {prct: 80, value: 'nn'}]);

    level1.addFrom('eux', [{prct: 95, value: 'eux'}, {prct: 5, value: 'e'}]);
    level2.addFrom('eux', [{prct: 60, value: 'eux'}, {prct: 40, value: 'e'}]);
    level3.addFrom('eux', [{prct: 40, value: 'eux'}, {prct: 60, value: 'e'}]);
    level4.addFrom('eux', [{prct: 20, value: 'eux'}, {prct: 80, value: 'e'}]);

    level1.addFrom('mm', [{prct: 95, value: 'mm'}, {prct: 5, value: 'm'}]);
    level2.addFrom('mm', [{prct: 60, value: 'mm'}, {prct: 40, value: 'm'}]);
    level3.addFrom('mm', [{prct: 40, value: 'mm'}, {prct: 60, value: 'm'}]);
    level4.addFrom('mm', [{prct: 20, value: 'mm'}, {prct: 80, value: 'm'}]);

    level1.addFrom('m', [{prct: 95, value: 'm'}, {prct: 5, value: 'mm'}]);
    level2.addFrom('m', [{prct: 60, value: 'm'}, {prct: 40, value: 'mm'}]);
    level3.addFrom('m', [{prct: 40, value: 'm'}, {prct: 60, value: 'mm'}]);
    level4.addFrom('m', [{prct: 20, value: 'm'}, {prct: 80, value: 'mm'}]);

    level1.addFrom('t', [{prct: 95, value: 't'}, {prct: 5, value: 'tt'}]);
    level2.addFrom('t', [{prct: 60, value: 't'}, {prct: 40, value: 'tt'}]);
    level3.addFrom('t', [{prct: 40, value: 't'}, {prct: 60, value: 'tt'}]);
    level4.addFrom('t', [{prct: 20, value: 't'}, {prct: 80, value: 'tt'}]);

    level1.addFrom('tt', [{prct: 95, value: 'tt'}, {prct: 5, value: 't'}]);
    level2.addFrom('tt', [{prct: 60, value: 'tt'}, {prct: 40, value: 't'}]);
    level3.addFrom('tt', [{prct: 40, value: 'tt'}, {prct: 60, value: 't'}]);
    level4.addFrom('tt', [{prct: 20, value: 'tt'}, {prct: 80, value: 't'}]);

    level1.addFrom('r', [{prct: 95, value: 'r'}, {prct: 5, value: 'rr'}]);
    level2.addFrom('r', [{prct: 60, value: 'r'}, {prct: 40, value: 'rr'}]);
    level3.addFrom('r', [{prct: 40, value: 'r'}, {prct: 60, value: 'rr'}]);
    level4.addFrom('r', [{prct: 20, value: 'r'}, {prct: 80, value: 'rr'}]);

    level1.addFrom('rr', [{prct: 95, value: 'rr'}, {prct: 5, value: 'r'}]);
    level2.addFrom('rr', [{prct: 60, value: 'rr'}, {prct: 40, value: 'r'}]);
    level3.addFrom('rr', [{prct: 40, value: 'rr'}, {prct: 60, value: 'r'}]);
    level4.addFrom('rr', [{prct: 20, value: 'rr'}, {prct: 80, value: 'r'}]);

    level1.addFrom('p', [{prct: 95, value: 'p'}, {prct: 5, value: 'pp'}]);
    level2.addFrom('p', [{prct: 60, value: 'p'}, {prct: 40, value: 'pp'}]);
    level3.addFrom('p', [{prct: 40, value: 'p'}, {prct: 60, value: 'pp'}]);
    level4.addFrom('p', [{prct: 20, value: 'p'}, {prct: 80, value: 'pp'}]);

    level1.addFrom('pp', [{prct: 95, value: 'pp'}, {prct: 5, value: 'p'}]);
    level2.addFrom('pp', [{prct: 60, value: 'pp'}, {prct: 40, value: 'p'}]);
    level3.addFrom('pp', [{prct: 40, value: 'pp'}, {prct: 60, value: 'p'}]);
    level4.addFrom('pp', [{prct: 20, value: 'pp'}, {prct: 80, value: 'p'}]);

    level1.addFrom('f', [{prct: 95, value: 'f'}, {prct: 5, value: 'ff'}]);
    level2.addFrom('f', [{prct: 60, value: 'f'}, {prct: 40, value: 'ff'}]);
    level3.addFrom('f', [{prct: 40, value: 'f'}, {prct: 60, value: 'ff'}]);
    level4.addFrom('f', [{prct: 20, value: 'f'}, {prct: 80, value: 'ff'}]);

    level1.addFrom('ff', [{prct: 95, value: 'ff'}, {prct: 5, value: 'f'}]);
    level2.addFrom('ff', [{prct: 60, value: 'ff'}, {prct: 40, value: 'f'}]);
    level3.addFrom('ff', [{prct: 40, value: 'ff'}, {prct: 60, value: 'f'}]);
    level4.addFrom('ff', [{prct: 20, value: 'ff'}, {prct: 80, value: 'f'}]);

    inWordRules.addLevel(1, level1);
    inWordRules.addLevel(2, level2);
    inWordRules.addLevel(3, level3);
    inWordRules.addLevel(4, level4);

    if (Phote.options.logs) {
        console.log('In word rules: ', inWordRules);
    }

    Strategies.addStrategy({
        name: 'inWordStrategy',
        priority: 5,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            //for (var i = 0; i < interchangeableParts.length; i++) {
            //    var parts = interchangeableParts[i];
            //    for (var j = 0; j < parts.length; j++) {
            //        var part = parts[j];
            //        var regex = new RegExp('(.)+' + part + '(.)+', 'i');
            //        if (regex.test(word)) {
            //            if (Phote.options.logs) {
            //                console.log('replace part [' + part + '] of word \'' + word + '\'!');
            //            }
            //            return word.replace(new RegExp(part, 'i'), Phote.Utils.randomFromArray(parts));
            //        }
            //    }
            //}
            //return word;
            return inWordRules.executeOnWord(word);
        }
    });


}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || {}, window.Phote.Rules = window.Phote.Rules || {}));