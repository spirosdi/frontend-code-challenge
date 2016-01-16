/**
 * Created by Spiros on 15/01/16.
 */
describe("Flow Module", function() {
    it("executes when rules are loaded from rules.js", function() {
        var result = Flow.init('{"value": true}');
        expect(result).toBe(true);
    });

    it("does not execute when there are duplicate rule IDs", function() {
        rules = [{id: 1}, {id: 1}];
        var result = Flow.init('{"value": true}');
        expect(result).toBe(false);
    });

    it("shows an error message when there are duplicate rule IDs", function() {
        spyOn(console, 'error');
        rules = [{id: 1}, {id: 1}];
        var result = Flow.init('{"value": true}');
        expect(console.error).toHaveBeenCalledWith('found duplicate ids, please provide valid array of rules');
    });

    it("does not execute when there is an empty rule", function() {
        rules = [{id: 1}, {}];
        var result = Flow.init('{"value": true}');
        expect(result).toBe(false);
    });

    it("shows an error message when there is an empty rule", function() {
        spyOn(console, 'error');
        rules = [{id: 1}, {}];
        var result = Flow.init('{"value": true}');
        expect(console.error).toHaveBeenCalledWith('found empty rule, please provide valid array of rules');
    });

    it("does not execute when there is a rule without id", function() {
        rules = [{id: 1}, {trueId: 2}];
        var result = Flow.init('{"value": true}');
        expect(result).toBe(false);
    });

    it("shows an error message when there is a rule without id", function() {
        spyOn(console, 'error');
        rules = [{id: 1}, {trueId: 2}];
        var result = Flow.init('{"value": true}');
        expect(console.error).toHaveBeenCalledWith('found rule without id, please provide valid array of rules');
    });
});
