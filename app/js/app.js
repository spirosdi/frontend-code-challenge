/**
 * Created by Spiros on 15/01/16.
 */

var Flow = (function() {

    // Parses string into an object
    var _parseJson = function(jsonString) {
        return JSON.parse(jsonString);
    };

    // Checks the set of rules for rules with duplicate IDs,
    // logs error message if necessary, returns boolean indicating result
    var _checkRulesForDuplicateIDs = function() {
        var idArray = rules.map(function(item){ return item.id });
        var isDuplicate = idArray.some(function(item, idx){
            return idArray.indexOf(item) != idx
        });
        if (isDuplicate) {
            console.error('found duplicate ids, please provide valid array of rules');
            return false;
        } else {
            return true;
        }
    };

    // Checks the set of rules for empty rules or rules without ID
    // logs error message if necessary, returns boolean indicating result
    var _checkForEmptyRulesOrRuleWithoutID = function() {
        for(var i=0, len=rules.length; i < len; i++){
            if (Object.keys(rules[i]).length === 0) {
                console.error('found empty rule, please provide valid array of rules')
                return false;
            }
            if(!rules[i].hasOwnProperty('id')) {
                console.error('found rule without id, please provide valid array of rules')
                return false;
            }
        }
        return true;
    };

    // Finds rule with specific ID
    var _getRuleById = function(id) {
        var rule = rules.filter(function(rule) {
            return rule.id == id;
        });
        return(rule[0]);
    };

    // Executes the flow
    var _runFlow = function(obj) {
        var goOn = true;

        // The first rule to execute should always have ID 1
        var nextRuleId = 1;
        var currentRuleId;
        while (goOn) {
            currentRuleId = nextRuleId;
            if (_getRuleById(currentRuleId).ruleMethod(obj)) {
                console.log('%c Rule ' + currentRuleId + ' passed', 'color: green');
                nextRuleId = _getRuleById(nextRuleId).trueId;
            } else {
                console.log('%c Rule ' + currentRuleId + ' failed', 'color: red');
                nextRuleId = _getRuleById(nextRuleId).falseId;
            }
            if (!nextRuleId) {
                goOn = false;
                console.log('End');
            }
        }
        return true;
    };

    // The public method
    var init = function(jsonString) {
        // Checks if the set of rules is valid
        if (!_checkRulesForDuplicateIDs() || !_checkForEmptyRulesOrRuleWithoutID()) {
            return false;
        }
        // Parses the passed parameter into an object
        var obj = _parseJson(jsonString);
        // Executes the flow
        return _runFlow(obj);
    };

    return {
        init: init
    };
})();
