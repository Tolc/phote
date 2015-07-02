(function(Phote, Strategies, undefined) {

    var strategies = [];    //Strategies array

    var defaultStrat = {
        name: '',   //Required
        priority: 10,   //The higher the less priority
        executeOtherStrategiesIfWordChanged: true,  //Execute the following strategies (by order of priorities) if the word gets changed by the strategy
        execute: '' //The execute method arg: word, returns a word (same or modified)
    };

    /**
     * Add a strategy to the strategies array
     * @param strategy Object the strategy object
     */
    Strategies.addStrategy = function(strategy) {
        var newStrategy = Phote.Utils.extend(defaultStrat, strategy);

        if (!newStrategy.name) {
            console.log('Strategy adding: name required');
            return;
        }
        if (!Phote.Utils.isFunction(newStrategy.execute)) {
            console.log('Strategy [' + newStrategy.name + '] adding: execute function required');
            return;
        }

        strategies.splice(newStrategy.priority, 0, newStrategy);
        if (Phote.options.logs) {
            console.log('Strategy [' + newStrategy.name + '] added - Priority [' + newStrategy.priority + ']');
        }
    };

    /**
     * Execute the whole strategies stack on a word
     * @param word
     * @return String the photed word
     */
    Strategies.executeAllStrategies = function(word) {
        var currentWord = word;
        for (var i = 0; i < strategies.length; i++) {
            var currentStrat = strategies[i];
            var newWord = currentStrat.execute(currentWord);
            if (newWord != currentWord) {
                if (!currentStrat.executeOtherStrategiesIfWordChanged) {
                    break;
                }
                currentWord = newWord;
            }
        }
        return currentWord;
    };


    Strategies.Rule = function(level, from, to) {
        this.level = level;
        this.from = from;
        this.to = to ? to : [];
        this.addTo = function(prct, value) {
            to.push({prct: prct, value: value});
        };
    }

}(window.Phote = window.Phote || {}, window.Phote.Strategies = window.Phote.Strategies || {}));

