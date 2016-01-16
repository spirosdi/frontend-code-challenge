/**
 * Created by Spiros on 15/01/16.
 */
var rules = [
    {
        id: 1,
        ruleMethod: function(object) {
            return object.value == 9;
        },
        trueId: 12,
        falseId: 19
    },
    {
        id: 12,
        ruleMethod: function(object) {
            return object.value == 3;
        },
        trueId: 11,
    },
    {
        id: 11,
        ruleMethod: function(object) {
            return true;
        }
    },
    {
        id: 14,
        ruleMethod: function(object) {
            return false;
        },
        falseId: 20
    },
    {
        id: 19,
        ruleMethod: function(object) {
            return !!object;
        },
        trueId: 20,
        falseId: 20
    },
    {
        id: 20,
        ruleMethod: function(object) {
            return true;
        }
    }
];
