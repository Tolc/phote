(function(Phote, Strategies, Rules, undefined) {

    //var interchangeableWords = [
    //    ['ça', 'sa', 'ca'],
    //    ['et', 'est'],
    //    ['ces', 'ses', 'c\'est', 'c', 'cé'],
    //    ['cette', 'cet'],
    //    //['en fait', 'en faite']
    //    ['j\'ai', 'jé'],
    //    ['les', 'lé', 'laid', 'laids']
    //];

    var wholeWordRules = new Rules.Rule('^', '$', '^', '$', 'Whole word');
    var level1 = new Rules.LevelRule();
    var level2 = new Rules.LevelRule();
    var level3 = new Rules.LevelRule();
    var level4 = new Rules.LevelRule();

    level1.addFrom('ça', [{prct: 75, value: 'ça'}, {prct: 20, value: 'ca'}, {prct: 5, value: 'sa'}]);
    level2.addFrom('ça', [{prct: 50, value: 'ça'}, {prct: 25, value: 'ca'}, {prct: 25, value: 'sa'}]);
    level3.addFrom('ça', [{prct: 10, value: 'ça'}, {prct: 45, value: 'ca'}, {prct: 45, value: 'sa'}]);
    level4.addFrom('ça', [{prct: 5, value: 'ça'}, {prct: 15, value: 'ca'}, {prct: 80, value: 'sa'}]);

    level1.addFrom('sa', [{prct: 95, value: 'sa'}, {prct: 3, value: 'ca'}, {prct: 2, value: 'ça'}]);
    level2.addFrom('sa', [{prct: 60, value: 'sa'}, {prct: 20, value: 'ca'}, {prct: 20, value: 'ça'}]);
    level3.addFrom('sa', [{prct: 40, value: 'sa'}, {prct: 30, value: 'ca'}, {prct: 30, value: 'ça'}]);
    level4.addFrom('sa', [{prct: 20, value: 'sa'}, {prct: 40, value: 'ca'}, {prct: 40, value: 'ça'}]);

    level1.addFrom('ca', [{prct: 95, value: 'ca'}, {prct: 5, value: 'sa'}]);
    level2.addFrom('ca', [{prct: 60, value: 'ca'}, {prct: 40, value: 'sa'}]);
    level3.addFrom('ca', [{prct: 40, value: 'ca'}, {prct: 60, value: 'sa'}]);
    level4.addFrom('ca', [{prct: 20, value: 'ca'}, {prct: 80, value: 'sa'}]);

    level1.addFrom('et', [{prct: 95, value: 'et'}, {prct: 5, value: 'est'}]);
    level2.addFrom('et', [{prct: 60, value: 'et'}, {prct: 40, value: 'est'}]);
    level3.addFrom('et', [{prct: 40, value: 'et'}, {prct: 60, value: 'est'}]);
    level4.addFrom('et', [{prct: 20, value: 'et'}, {prct: 80, value: 'est'}]);

    level1.addFrom('est', [{prct: 95, value: 'est'}, {prct: 5, value: 'et'}]);
    level2.addFrom('est', [{prct: 60, value: 'est'}, {prct: 40, value: 'et'}]);
    level3.addFrom('est', [{prct: 40, value: 'est'}, {prct: 60, value: 'et'}]);
    level4.addFrom('est', [{prct: 20, value: 'est'}, {prct: 80, value: 'et'}]);

    level1.addFrom('ces', [{prct: 95, value: 'ces'}, {prct: 2, value: 'ses'}, {prct: 1, value: 'c\'est'}, {prct: 1, value: 'c'}, {prct: 1, value: 'cé'}]);
    level2.addFrom('ces', [{prct: 60, value: 'ces'}, {prct: 10, value: 'ses'}, {prct: 10, value: 'c\'est'}, {prct: 10, value: 'c'}, {prct: 10, value: 'cé'}]);
    level3.addFrom('ces', [{prct: 40, value: 'ces'}, {prct: 15, value: 'ses'}, {prct: 15, value: 'c\'est'}, {prct: 15, value: 'c'}, {prct: 15, value: 'cé'}]);
    level4.addFrom('ces', [{prct: 20, value: 'ces'}, {prct: 20, value: 'ses'}, {prct: 20, value: 'c\'est'}, {prct: 20, value: 'c'}, {prct: 20, value: 'cé'}]);

    level1.addFrom('ses', [{prct: 95, value: 'ses'}, {prct: 2, value: 'ces'}, {prct: 1, value: 'c\'est'}, {prct: 1, value: 'c'}, {prct: 1, value: 'cé'}]);
    level2.addFrom('ses', [{prct: 60, value: 'ses'}, {prct: 10, value: 'ces'}, {prct: 10, value: 'c\'est'}, {prct: 10, value: 'c'}, {prct: 10, value: 'cé'}]);
    level3.addFrom('ses', [{prct: 40, value: 'ses'}, {prct: 15, value: 'ces'}, {prct: 15, value: 'c\'est'}, {prct: 15, value: 'c'}, {prct: 15, value: 'cé'}]);
    level4.addFrom('ses', [{prct: 20, value: 'ses'}, {prct: 20, value: 'ces'}, {prct: 20, value: 'c\'est'}, {prct: 20, value: 'c'}, {prct: 20, value: 'cé'}]);

    level1.addFrom('c\'est', [{prct: 95, value: 'c\'est'}, {prct: 1, value: 'ces'}, {prct: 1, value: 'ses'}, {prct: 2, value: 'c'}, {prct: 1, value: 'cé'}]);
    level2.addFrom('c\'est', [{prct: 60, value: 'c\'est'}, {prct: 10, value: 'ces'}, {prct: 10, value: 'ses'}, {prct: 10, value: 'c'}, {prct: 10, value: 'cé'}]);
    level3.addFrom('c\'est', [{prct: 40, value: 'c\'est'}, {prct: 15, value: 'ces'}, {prct: 15, value: 'ses'}, {prct: 15, value: 'c'}, {prct: 15, value: 'cé'}]);
    level4.addFrom('c\'est', [{prct: 20, value: 'c\'est'}, {prct: 20, value: 'ces'}, {prct: 20, value: 'ses'}, {prct: 20, value: 'c'}, {prct: 20, value: 'cé'}]);

    level1.addFrom('cette', [{prct: 95, value: 'cette'}, {prct: 5, value: 'cet'}]);
    level2.addFrom('cette', [{prct: 60, value: 'cette'}, {prct: 40, value: 'cet'}]);
    level3.addFrom('cette', [{prct: 40, value: 'cette'}, {prct: 60, value: 'cet'}]);
    level4.addFrom('cette', [{prct: 20, value: 'cette'}, {prct: 80, value: 'cet'}]);

    level1.addFrom('cet', [{prct: 95, value: 'cet'}, {prct: 5, value: 'cette'}]);
    level2.addFrom('cet', [{prct: 60, value: 'cet'}, {prct: 40, value: 'cette'}]);
    level3.addFrom('cet', [{prct: 40, value: 'cet'}, {prct: 60, value: 'cette'}]);
    level4.addFrom('cet', [{prct: 20, value: 'cet'}, {prct: 80, value: 'cette'}]);

    level1.addFrom('j\'ai', [{prct: 95, value: 'j\'ai'}, {prct: 5, value: 'jé'}]);
    level2.addFrom('j\'ai', [{prct: 60, value: 'j\'ai'}, {prct: 40, value: 'jé'}]);
    level3.addFrom('j\'ai', [{prct: 40, value: 'j\'ai'}, {prct: 60, value: 'jé'}]);
    level4.addFrom('j\'ai', [{prct: 20, value: 'j\'ai'}, {prct: 80, value: 'jé'}]);

    level1.addFrom('les', [{prct: 95, value: 'les'}, {prct: 5, value: 'lé'}]);
    level2.addFrom('les', [{prct: 60, value: 'les'}, {prct: 40, value: 'lé'}]);
    level3.addFrom('les', [{prct: 40, value: 'les'}, {prct: 60, value: 'lé'}]);
    level4.addFrom('les', [{prct: 20, value: 'les'}, {prct: 80, value: 'lé'}]);

    level1.addFrom('laid', [{prct: 94, value: 'laid'}, {prct: 2, value: 'les'}, {prct: 2, value: 'lé'}, {prct: 2, value: 'lait'}]);
    level2.addFrom('laid', [{prct: 60, value: 'laid'}, {prct: 13, value: 'les'}, {prct: 13, value: 'lé'}, {prct: 14, value: 'lait'}]);
    level3.addFrom('laid', [{prct: 40, value: 'laid'}, {prct: 20, value: 'les'}, {prct: 20, value: 'lé'}, {prct: 20, value: 'lait'}]);
    level4.addFrom('laid', [{prct: 20, value: 'laid'}, {prct: 26, value: 'les'}, {prct: 26, value: 'lé'}, {prct: 27, value: 'lait'}]);

    level1.addFrom('laids', [{prct: 94, value: 'laids'}, {prct: 2, value: 'les'}, {prct: 2, value: 'lé'}, {prct: 2, value: 'laits'}]);
    level2.addFrom('laids', [{prct: 60, value: 'laids'}, {prct: 13, value: 'les'}, {prct: 13, value: 'lé'}, {prct: 14, value: 'laits'}]);
    level3.addFrom('laids', [{prct: 40, value: 'laids'}, {prct: 20, value: 'les'}, {prct: 20, value: 'lé'}, {prct: 20, value: 'laits'}]);
    level4.addFrom('laids', [{prct: 20, value: 'laids'}, {prct: 26, value: 'les'}, {prct: 26, value: 'lé'}, {prct: 27, value: 'laits'}]);

    level1.addFrom('lait', [{prct: 94, value: 'lait'}, {prct: 2, value: 'les'}, {prct: 2, value: 'lé'}, {prct: 2, value: 'laid'}]);
    level2.addFrom('lait', [{prct: 60, value: 'lait'}, {prct: 13, value: 'les'}, {prct: 13, value: 'lé'}, {prct: 14, value: 'laid'}]);
    level3.addFrom('lait', [{prct: 40, value: 'lait'}, {prct: 20, value: 'les'}, {prct: 20, value: 'lé'}, {prct: 20, value: 'laid'}]);
    level4.addFrom('lait', [{prct: 20, value: 'lait'}, {prct: 26, value: 'les'}, {prct: 26, value: 'lé'}, {prct: 27, value: 'laid'}]);

    level1.addFrom('laits', [{prct: 94, value: 'laits'}, {prct: 2, value: 'les'}, {prct: 2, value: 'lé'}, {prct: 2, value: 'laids'}]);
    level2.addFrom('laits', [{prct: 60, value: 'laits'}, {prct: 13, value: 'les'}, {prct: 13, value: 'lé'}, {prct: 14, value: 'laids'}]);
    level3.addFrom('laits', [{prct: 40, value: 'laits'}, {prct: 20, value: 'les'}, {prct: 20, value: 'lé'}, {prct: 20, value: 'laids'}]);
    level4.addFrom('laits', [{prct: 20, value: 'laits'}, {prct: 26, value: 'les'}, {prct: 26, value: 'lé'}, {prct: 27, value: 'laids'}]);

    wholeWordRules.addLevel(1, level1);
    wholeWordRules.addLevel(2, level2);
    wholeWordRules.addLevel(3, level3);
    wholeWordRules.addLevel(4, level4);

    if (Phote.options.logs) {
        console.log('Whole word rules: ', wholeWordRules);
    }

    Strategies.addStrategy({
        name: 'wholeWordStrategy',
        priority: 2,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            return wholeWordRules.executeOnWord(word);
        }
    });

}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || {}, window.Phote.Rules = window.Phote.Rules || {}));