(function(Phote, Strategies, Rules, undefined) {

    //var interchangeableSuffixes = [
    //    ['ait', 'aient', 'ais', 'é', 'ée', 'er', 'er', 'és', 'ées', 'et', 'ets'],
    //    ['elle', 'el', 'ellent'],
    //    ['eux', 'e'],
    //    ['ont', 'on']
    //];

    var suffixRules = new Rules.Rule('(.)+', '$', '', '$', 'Suffix');
    var level1 = new Rules.LevelRule();
    var level2 = new Rules.LevelRule();
    var level3 = new Rules.LevelRule();
    var level4 = new Rules.LevelRule();

    level1.addFrom('ellent', [{prct: 95, value: 'ellent'}, {prct: 3, value: 'elle'}, {prct: 2, value: 'el'}]);
    level2.addFrom('ellent', [{prct: 60, value: 'ellent'}, {prct: 20, value: 'elle'}, {prct: 20, value: 'el'}]);
    level3.addFrom('ellent', [{prct: 40, value: 'ellent'}, {prct: 30, value: 'elle'}, {prct: 30, value: 'el'}]);
    level4.addFrom('ellent', [{prct: 20, value: 'ellent'}, {prct: 40, value: 'elle'}, {prct: 40, value: 'el'}]);

    level1.addFrom('elle', [{prct: 95, value: 'elle'}, {prct: 5, value: 'el'}]);
    level2.addFrom('elle', [{prct: 60, value: 'elle'}, {prct: 40, value: 'el'}]);
    level3.addFrom('elle', [{prct: 40, value: 'elle'}, {prct: 60, value: 'el'}]);
    level4.addFrom('elle', [{prct: 20, value: 'elle'}, {prct: 80, value: 'el'}]);

    level1.addFrom('el', [{prct: 95, value: 'el'}, {prct: 5, value: 'elle'}]);
    level2.addFrom('el', [{prct: 60, value: 'el'}, {prct: 40, value: 'elle'}]);
    level3.addFrom('el', [{prct: 40, value: 'el'}, {prct: 60, value: 'elle'}]);
    level4.addFrom('el', [{prct: 20, value: 'el'}, {prct: 80, value: 'elle'}]);

    level1.addFrom('eux', [{prct: 95, value: 'eux'}, {prct: 5, value: 'e'}]);
    level2.addFrom('eux', [{prct: 60, value: 'eux'}, {prct: 40, value: 'e'}]);
    level3.addFrom('eux', [{prct: 40, value: 'eux'}, {prct: 60, value: 'e'}]);
    level4.addFrom('eux', [{prct: 20, value: 'eux'}, {prct: 80, value: 'e'}]);

    level1.addFrom('ont', [{prct: 95, value: 'ont'}, {prct: 5, value: 'on'}]);
    level2.addFrom('ont', [{prct: 60, value: 'ont'}, {prct: 40, value: 'on'}]);
    level3.addFrom('ont', [{prct: 40, value: 'ont'}, {prct: 60, value: 'on'}]);
    level4.addFrom('ont', [{prct: 20, value: 'ont'}, {prct: 80, value: 'on'}]);

    level1.addFrom('é', [{prct: 92, value: 'é'}, {prct: 2, value: 'és'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'ées'},
        {prct: 1, value: 'et'}, {prct: 1, value: 'ets'}, {prct: 1, value: 'ez'}, {prct: 1, value: 'er'}]);
    level2.addFrom('é', [{prct: 58, value: 'é'}, {prct: 6, value: 'és'}, {prct: 6, value: 'ée'}, {prct: 6, value: 'ées'},
        {prct: 6, value: 'et'}, {prct: 6, value: 'ets'}, {prct: 6, value: 'ez'}, {prct: 6, value: 'er'}]);
    level3.addFrom('é', [{prct: 37, value: 'é'}, {prct: 9, value: 'és'}, {prct: 9, value: 'ée'}, {prct: 9, value: 'ées'},
        {prct: 9, value: 'et'}, {prct: 9, value: 'ets'}, {prct: 9, value: 'ez'}, {prct: 9, value: 'er'}]);
    level4.addFrom('é', [{prct: 9, value: 'é'}, {prct: 13, value: 'és'}, {prct: 13, value: 'ée'}, {prct: 13, value: 'ées'},
        {prct: 13, value: 'et'}, {prct: 13, value: 'ets'}, {prct: 13, value: 'ez'}, {prct: 13, value: 'er'}]);

    level1.addFrom('és', [{prct: 92, value: 'és'}, {prct: 2, value: 'é'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'ées'},
        {prct: 1, value: 'et'}, {prct: 1, value: 'ets'}, {prct: 1, value: 'ez'}, {prct: 1, value: 'er'}]);
    level2.addFrom('és', [{prct: 58, value: 'és'}, {prct: 6, value: 'é'}, {prct: 6, value: 'ée'}, {prct: 6, value: 'ées'},
        {prct: 6, value: 'et'}, {prct: 6, value: 'ets'}, {prct: 6, value: 'ez'}, {prct: 6, value: 'er'}]);
    level3.addFrom('és', [{prct: 37, value: 'és'}, {prct: 9, value: 'é'}, {prct: 9, value: 'ée'}, {prct: 9, value: 'ées'},
        {prct: 9, value: 'et'}, {prct: 9, value: 'ets'}, {prct: 9, value: 'ez'}, {prct: 9, value: 'er'}]);
    level4.addFrom('és', [{prct: 9, value: 'és'}, {prct: 13, value: 'é'}, {prct: 13, value: 'ée'}, {prct: 13, value: 'ées'},
        {prct: 13, value: 'et'}, {prct: 13, value: 'ets'}, {prct: 13, value: 'ez'}, {prct: 13, value: 'er'}]);

    level1.addFrom('ées', [{prct: 92, value: 'ées'}, {prct: 2, value: 'é'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'és'},
        {prct: 1, value: 'et'}, {prct: 1, value: 'ets'}, {prct: 1, value: 'ez'}, {prct: 1, value: 'er'}]);
    level2.addFrom('ées', [{prct: 58, value: 'ées'}, {prct: 6, value: 'é'}, {prct: 6, value: 'ée'}, {prct: 6, value: 'és'},
        {prct: 6, value: 'et'}, {prct: 6, value: 'ets'}, {prct: 6, value: 'ez'}, {prct: 6, value: 'er'}]);
    level3.addFrom('ées', [{prct: 37, value: 'ées'}, {prct: 9, value: 'é'}, {prct: 9, value: 'ée'}, {prct: 9, value: 'és'},
        {prct: 9, value: 'et'}, {prct: 9, value: 'ets'}, {prct: 9, value: 'ez'}, {prct: 9, value: 'er'}]);
    level4.addFrom('ées', [{prct: 9, value: 'ées'}, {prct: 13, value: 'é'}, {prct: 13, value: 'ée'}, {prct: 13, value: 'és'},
        {prct: 13, value: 'et'}, {prct: 13, value: 'ets'}, {prct: 13, value: 'ez'}, {prct: 13, value: 'er'}]);

    level1.addFrom('ez', [{prct: 92, value: 'ez'}, {prct: 2, value: 'é'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'és'},
        {prct: 1, value: 'et'}, {prct: 1, value: 'ets'}, {prct: 1, value: 'ées'}, {prct: 1, value: 'er'}]);
    level2.addFrom('ez', [{prct: 58, value: 'ez'}, {prct: 6, value: 'é'}, {prct: 6, value: 'ée'}, {prct: 6, value: 'és'},
        {prct: 6, value: 'et'}, {prct: 6, value: 'ets'}, {prct: 6, value: 'ées'}, {prct: 6, value: 'er'}]);
    level3.addFrom('ez', [{prct: 37, value: 'ez'}, {prct: 9, value: 'é'}, {prct: 9, value: 'ée'}, {prct: 9, value: 'és'},
        {prct: 9, value: 'et'}, {prct: 9, value: 'ets'}, {prct: 9, value: 'ées'}, {prct: 9, value: 'er'}]);
    level4.addFrom('ez', [{prct: 9, value: 'ez'}, {prct: 13, value: 'é'}, {prct: 13, value: 'ée'}, {prct: 13, value: 'és'},
        {prct: 13, value: 'et'}, {prct: 13, value: 'ets'}, {prct: 13, value: 'ées'}, {prct: 13, value: 'er'}]);

    level1.addFrom('er', [{prct: 92, value: 'er'}, {prct: 2, value: 'é'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'és'},
        {prct: 1, value: 'et'}, {prct: 1, value: 'ait'}, {prct: 1, value: 'ées'}, {prct: 1, value: 'ez'}]);
    level2.addFrom('er', [{prct: 58, value: 'er'}, {prct: 6, value: 'é'}, {prct: 6, value: 'ée'}, {prct: 6, value: 'és'},
        {prct: 6, value: 'et'}, {prct: 6, value: 'ait'}, {prct: 6, value: 'ées'}, {prct: 6, value: 'ez'}]);
    level3.addFrom('er', [{prct: 37, value: 'er'}, {prct: 9, value: 'é'}, {prct: 9, value: 'ée'}, {prct: 9, value: 'és'},
        {prct: 9, value: 'et'}, {prct: 9, value: 'ait'}, {prct: 9, value: 'ées'}, {prct: 9, value: 'ez'}]);
    level4.addFrom('er', [{prct: 9, value: 'er'}, {prct: 13, value: 'é'}, {prct: 13, value: 'ée'}, {prct: 13, value: 'és'},
        {prct: 13, value: 'et'}, {prct: 13, value: 'ait'}, {prct: 13, value: 'ées'}, {prct: 13, value: 'ez'}]);

    level1.addFrom('et', [{prct: 92, value: 'et'}, {prct: 2, value: 'é'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'és'},
        {prct: 1, value: 'er'}, {prct: 1, value: 'ait'}, {prct: 1, value: 'ées'}, {prct: 1, value: 'ez'}]);
    level2.addFrom('et', [{prct: 58, value: 'et'}, {prct: 6, value: 'é'}, {prct: 6, value: 'ée'}, {prct: 6, value: 'és'},
        {prct: 6, value: 'er'}, {prct: 6, value: 'ait'}, {prct: 6, value: 'ées'}, {prct: 6, value: 'ez'}]);
    level3.addFrom('et', [{prct: 37, value: 'et'}, {prct: 9, value: 'é'}, {prct: 9, value: 'ée'}, {prct: 9, value: 'és'},
        {prct: 9, value: 'er'}, {prct: 9, value: 'ait'}, {prct: 9, value: 'ées'}, {prct: 9, value: 'ez'}]);
    level4.addFrom('et', [{prct: 9, value: 'et'}, {prct: 13, value: 'é'}, {prct: 13, value: 'ée'}, {prct: 13, value: 'és'},
        {prct: 13, value: 'er'}, {prct: 13, value: 'ait'}, {prct: 13, value: 'ées'}, {prct: 13, value: 'ez'}]);

    level1.addFrom('et', [{prct: 92, value: 'et'}, {prct: 2, value: 'é'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'és'},
        {prct: 1, value: 'er'}, {prct: 1, value: 'ets'}, {prct: 1, value: 'ées'}, {prct: 1, value: 'ez'}]);
    level2.addFrom('et', [{prct: 58, value: 'et'}, {prct: 6, value: 'é'}, {prct: 6, value: 'ée'}, {prct: 6, value: 'és'},
        {prct: 6, value: 'er'}, {prct: 6, value: 'ets'}, {prct: 6, value: 'ées'}, {prct: 6, value: 'ez'}]);
    level3.addFrom('et', [{prct: 37, value: 'et'}, {prct: 9, value: 'é'}, {prct: 9, value: 'ée'}, {prct: 9, value: 'és'},
        {prct: 9, value: 'er'}, {prct: 9, value: 'ets'}, {prct: 9, value: 'ées'}, {prct: 9, value: 'ez'}]);
    level4.addFrom('et', [{prct: 9, value: 'et'}, {prct: 13, value: 'é'}, {prct: 13, value: 'ée'}, {prct: 13, value: 'és'},
        {prct: 13, value: 'er'}, {prct: 13, value: 'ets'}, {prct: 13, value: 'ées'}, {prct: 13, value: 'ez'}]);

    level1.addFrom('ait', [{prct: 91, value: 'ait'}, {prct: 1, value: 'aient'}, {prct: 1, value: 'é'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'és'},
        {prct: 1, value: 'er'}, {prct: 1, value: 'ets'}, {prct: 1, value: 'ées'}, {prct: 1, value: 'ez'}, {prct: 1, value: 'ais'}]);
    level2.addFrom('ait', [{prct: 55, value: 'ait'}, {prct: 5, value: 'aient'}, {prct: 5, value: 'é'}, {prct: 5, value: 'ée'}, {prct: 5, value: 'és'},
        {prct: 5, value: 'er'}, {prct: 5, value: 'ets'}, {prct: 5, value: 'ées'}, {prct: 5, value: 'ez'}, {prct: 5, value: 'ais'}]);
    level3.addFrom('ait', [{prct: 37, value: 'ait'}, {prct: 7, value: 'aient'}, {prct: 7, value: 'é'}, {prct: 7, value: 'ée'}, {prct: 7, value: 'és'},
        {prct: 7, value: 'er'}, {prct: 7, value: 'ets'}, {prct: 7, value: 'ées'}, {prct: 7, value: 'ez'}, {prct: 7, value: 'ais'}]);
    level4.addFrom('ait', [{prct: 10, value: 'ait'}, {prct: 10, value: 'aient'}, {prct: 10, value: 'é'}, {prct: 10, value: 'ée'}, {prct: 10, value: 'és'},
        {prct: 10, value: 'er'}, {prct: 10, value: 'ets'}, {prct: 10, value: 'ées'}, {prct: 10, value: 'ez'}, {prct: 10, value: 'ais'}]);

    level1.addFrom('aient', [{prct: 91, value: 'aient'}, {prct: 1, value: 'ait'}, {prct: 1, value: 'é'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'és'},
        {prct: 1, value: 'er'}, {prct: 1, value: 'ets'}, {prct: 1, value: 'ées'}, {prct: 1, value: 'ez'}, {prct: 1, value: 'ais'}]);
    level2.addFrom('aient', [{prct: 55, value: 'aient'}, {prct: 5, value: 'ait'}, {prct: 5, value: 'é'}, {prct: 5, value: 'ée'}, {prct: 5, value: 'és'},
        {prct: 5, value: 'er'}, {prct: 5, value: 'ets'}, {prct: 5, value: 'ées'}, {prct: 5, value: 'ez'}, {prct: 5, value: 'ais'}]);
    level3.addFrom('aient', [{prct: 37, value: 'aient'}, {prct: 7, value: 'ait'}, {prct: 7, value: 'é'}, {prct: 7, value: 'ée'}, {prct: 7, value: 'és'},
        {prct: 7, value: 'er'}, {prct: 7, value: 'ets'}, {prct: 7, value: 'ées'}, {prct: 7, value: 'ez'}, {prct: 7, value: 'ais'}]);
    level4.addFrom('aient', [{prct: 10, value: 'aient'}, {prct: 10, value: 'ait'}, {prct: 10, value: 'é'}, {prct: 10, value: 'ée'}, {prct: 10, value: 'és'},
        {prct: 10, value: 'er'}, {prct: 10, value: 'ets'}, {prct: 10, value: 'ées'}, {prct: 10, value: 'ez'}, {prct: 10, value: 'ais'}]);

    level1.addFrom('ais', [{prct: 91, value: 'ais'}, {prct: 1, value: 'ait'}, {prct: 1, value: 'é'}, {prct: 1, value: 'ée'}, {prct: 1, value: 'és'},
        {prct: 1, value: 'er'}, {prct: 1, value: 'ets'}, {prct: 1, value: 'ées'}, {prct: 1, value: 'ez'}, {prct: 1, value: 'aient'}]);
    level2.addFrom('ais', [{prct: 55, value: 'ais'}, {prct: 5, value: 'ait'}, {prct: 5, value: 'é'}, {prct: 5, value: 'ée'}, {prct: 5, value: 'és'},
        {prct: 5, value: 'er'}, {prct: 5, value: 'ets'}, {prct: 5, value: 'ées'}, {prct: 5, value: 'ez'}, {prct: 5, value: 'aient'}]);
    level3.addFrom('ais', [{prct: 37, value: 'ais'}, {prct: 7, value: 'ait'}, {prct: 7, value: 'é'}, {prct: 7, value: 'ée'}, {prct: 7, value: 'és'},
        {prct: 7, value: 'er'}, {prct: 7, value: 'ets'}, {prct: 7, value: 'ées'}, {prct: 7, value: 'ez'}, {prct: 7, value: 'aient'}]);
    level4.addFrom('ais', [{prct: 10, value: 'ais'}, {prct: 10, value: 'ait'}, {prct: 10, value: 'é'}, {prct: 10, value: 'ée'}, {prct: 10, value: 'és'},
        {prct: 10, value: 'er'}, {prct: 10, value: 'ets'}, {prct: 10, value: 'ées'}, {prct: 10, value: 'ez'}, {prct: 10, value: 'aient'}]);

    suffixRules.addLevel(1, level1);
    suffixRules.addLevel(2, level2);
    suffixRules.addLevel(3, level3);
    suffixRules.addLevel(4, level4);

    if (Phote.options.logs) {
        console.log('Suffix rules: ', suffixRules);
    }

    Strategies.addStrategy({
        name: 'suffixStrategy',
        priority: 1,
        executeOtherStrategiesIfWordChanged: true,
        execute: function(word) {
            //for (var i = 0; i < interchangeableSuffixes.length; i++) {
            //    var suffixes = interchangeableSuffixes[i];
            //    for (var j = 0; j < suffixes.length; j++) {
            //        var suffix = suffixes[j];
            //        var regex = new RegExp('(.)+' + suffix + '$', 'i');
            //        if (regex.test(word)) {
            //            if (Phote.options.logs) {
            //                console.log('replace suffix \'' + word + '\'!');
            //            }
            //            return word.replace(new RegExp(suffix + '$', 'i'), Phote.Utils.randomFromArray(suffixes));
            //        }
            //    }
            //}
            //return word;
            return suffixRules.executeOnWord(word);
        }
    });


}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || {}, window.Phote.Rules = window.Phote.Rules || {}));