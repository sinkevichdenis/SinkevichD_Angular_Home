"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NameGenerationService = /** @class */ (function () {
    function NameGenerationService() {
        this.names = [
            'Nakita Hook',
            'Franciszek Gilliam',
            'Lewys Mccartney',
            'Rosie Glenn',
            'Sanaya Ahmed',
            'Vickie Hamer',
            'Jordan-Lee Parker',
            'Sky Byrd',
            'Jonas Ramsey',
            'Fabian Flowers]'
        ];
    }
    NameGenerationService.prototype.getRandomName = function () {
        return this.names[this.getRandomNumber(0, 9)];
    };
    NameGenerationService.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    NameGenerationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NameGenerationService);
    return NameGenerationService;
}());
exports.NameGenerationService = NameGenerationService;
