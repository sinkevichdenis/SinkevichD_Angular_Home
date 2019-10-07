"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var name_generation_service_1 = require("../../services/name-generation.service");
var FormComponent = /** @class */ (function () {
    function FormComponent(nameGeneration) {
        this.nameGeneration = nameGeneration;
        this.formWasSent = new core_1.EventEmitter();
        this.nameGeneration = new name_generation_service_1.NameGenerationService();
    }
    FormComponent.prototype.ngOnInit = function () {
        this.user = {
            username: '',
            email: '',
            secret: '',
            questionAnswer: '',
            gender: ''
        };
        this.questions = [
            {
                key: 'pet',
                question: 'What is your pet\'s name?'
            }, {
                key: 'mother',
                question: 'What is your mother\'s name?'
            }, {
                key: 'city',
                question: 'What city are you living in?'
            }, {
                key: 'color',
                question: 'What is your favorite color?'
            }
        ];
        this.genders = ['Female', 'Male'];
    };
    FormComponent.prototype.getName = function () {
        this.user.username = this.nameGeneration.getRandomName();
    };
    FormComponent.prototype.onSubmit = function (form) {
        this.formWasSent.emit(JSON.stringify(form.value));
        form.reset();
    };
    __decorate([
        core_1.Output()
    ], FormComponent.prototype, "formWasSent", void 0);
    FormComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.css']
        })
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
