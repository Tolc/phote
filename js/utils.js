(function(Phote, Utils, undefined) {

    /**
     * Get a random element from an array
     * @param array
     * @param el an element you don't want as a result (optional)
     * @returns {*} a random element from the array, different from el
     */
    Utils.randomFromArray = function(array, el) {
        if (el) {
            var item = el;
            while (item == el) {
                item = array[Math.floor(Math.random() * array.length)];
            }
            return item;
        } else {
            return array[Math.floor(Math.random() * array.length)];
        }
    };

    /**
     * Get a random element from an array of {prct, value} objects
     * @param array
     * @returns {*} a random value from the array based on the percentages
     */
    Utils.randomFromPrct = function(array) {
        var probArray = [];
        for (var i=0; i < array.length; i++) {
            var el = array[i];
            var prct = el.prct;
            var val = el.value;
            for (var j=0; j < prct; j++) {
                probArray.push(val);
            }
        }
        probArray = Utils.shuffleArray(probArray);
        return Utils.randomFromArray(probArray);
    };

    //+ Jonas Raoni Soares Silva
    //@ http://jsfromhell.com/array/shuffle [v1.0]
    Utils.shuffleArray = function(array) { //v1.0
        var arr = array.slice();
        for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    };

    /**
     * Transform a text to an array of words, spaces and symbols (such as commas, points, ...)
     * @param text  the text to transform
     * @returns Array of words, spaces, and symbols
     */
    Utils.textToArray = function(text) {
        var pieces = text.trim().split(/\s+/);
        var words = [];
        for (var h = 0; h < pieces.length; h++) {
            var piece = pieces[h];
            var n = piece.search(/[^A-Za-z\u00C0-\u017F\-]+/);
            while(n > 0) {
                words.push(piece.substring(0, n));
                piece = piece.substring(n, piece.length);
                n = piece.search(/[^A-Za-z\u00C0-\u017F\-]+/);
            }
            if (piece.match(/^[^A-Za-z\u00C0-\u017F\-]/)) { //for cases like "d'une"
                words.push(piece.substring(0, 1));
                piece = piece.substring(1, piece.length);
            }
            words.push(piece);
            words.push(' ');
        }

        if (Phote.options.logs) {
            console.log('Converted text array: ', words);
        }
        return words;
    };

    /**
     * Extend an object with another object, without modifying the source objects
     * @param a Object to extend
     * @param b Object extending
     * @returns Object the new extended object
     */
    Utils.extend = function(a, b) {
        var c = {};
        for(var key in a) {
            c[key] = a[key];
        }
        for(var keyb in b) {
            if (b.hasOwnProperty(keyb)) {
                c[keyb] = b[keyb];
            }
        }
        return c;
    };

    /**
     * Check if a variable is a function
     * @param functionToCheck
     * @returns Boolean
     */
    Utils.isFunction = function(functionToCheck) {
        var getType = {};
        return functionToCheck && (getType.toString.call(functionToCheck) === '[object Function]');
    }

}(window.Phote = window.Phote || {}, window.Phote.Utils = window.Phote.Utils || {}));