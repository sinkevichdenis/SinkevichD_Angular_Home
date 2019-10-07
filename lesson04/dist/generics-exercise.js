"use strict";
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.value = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.value[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.value[key];
    };
    MyMap.prototype.clear = function () {
        this.value = {};
        return true;
    };
    MyMap.prototype.printMap = function () {
        for (var _i = 0, _a = Object.entries(this.value); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            console.log(key + ": " + value);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
