(function(Phote, Rules, undefined) {

    Rules.Rule = function(regStart, regEnd, replaceRegStart, replaceRegEnd, name, onWord, rules) {
        this.name = name ? name : '';
        this.rules = rules ? rules : {};
        this.regStart = regStart ? regStart : '';
        this.regEnd = regEnd ? regEnd : '';
        this.replaceRegStart = replaceRegStart ? replaceRegStart : '';
        this.replaceRegEnd = replaceRegEnd ? replaceRegEnd : '';

        this.executeOnWord = onWord ? onWord : function(word) {
            //if (Phote.options.logs) {
            //    console.log('Name: ', this.name);
            //}
            var levelRule = this.rules[Phote.options.level];
            //if (Phote.options.logs) {
            //    console.log('LevelRule', levelRule);
            //    console.log('LevelRule FromRules', levelRule.fromRules);
            //}
            for (var key in levelRule.fromRules) {
                if (levelRule.fromRules.hasOwnProperty(key)) {
                    //if (Phote.options.logs) {
                    //    console.log('Key', key);
                    //}
                    var regex = new RegExp(regStart + key + regEnd, 'i');
                    if (regex.test(word)) {
                        var tos = levelRule.fromRules[key].tos;
                        var replace = Phote.Utils.randomFromPrct(tos);
                        var res = word.replace(new RegExp(replaceRegStart + key + replaceRegEnd, 'i'), replace);
                        if (Phote.options.logs) {
                            console.log((this.name ? this.name + ' - ' : '') + 'Replaced [' + word + '] with [' + res + ']');
                        }
                        return res;
                    }
                }
            }
            return word;
        };

        this.addLevel = function(level, levelRules) {
            this.rules[level] = levelRules;
        };
    };


    Rules.LevelRule = function(fromRules) {
        this.fromRules = fromRules ? fromRules : {};

        this.addFrom = function(from, tos) {
            this.fromRules[from] = new Rules.FromRule(tos);
        };
    };


    Rules.FromRule = function(tos) {
        this.tos = tos ? tos : [];

        this.addTo = function(prct, value) {
            this.tos.push({ prct: prct, value: value });
        };
    };

}(window.Phote = window.Phote || {}, window.Phote.Rules = window.Phote.Rules || {}));

