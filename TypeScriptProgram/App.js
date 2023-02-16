"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    App.prototype.Display = function () {
        console.log("Name = " + this.name + "  Age = " + this.age + "  Gender = " + this.gender);
    };
    return App;
}());
var user = new App("Dhruv", 23, "male");
user.Display();


//