var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(target, key, descriptor) {
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var value = original.apply(this, args);
        console.log(key + '(' + args + ') => ' + value);
        return value;
    };
    return descriptor;
}
function timesTwo(target, key, descriptor) {
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var value = original.apply(this, args.map(function (a) { return 2 * a; }));
        return value;
    };
    return descriptor;
}
var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.sum = function (x, y, z) {
        return x + y + z;
    };
    __decorate([
        timesTwo,
        logMethod
    ], Calc, "sum", null);
    return Calc;
}());
var x = Calc.sum(1, 2, 3);
