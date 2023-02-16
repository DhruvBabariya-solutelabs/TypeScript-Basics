"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(age) {
        this.age = age;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, empid) {
        var _this = _super.call(this, age) || this;
        _this.name = name;
        _this.empid = empid;
        return _this;
    }
    Employee.prototype.displayData = function () {
        console.log("Name = " + this.name + " Age = " + this.age + " Emp Id = " + this.empid);
    };
    Employee.prototype.findEmployee = function (id) {
        return new Employee("Dhruv", 23, 101);
    };
    return Employee;
}(Person));
var emp1 = new Employee("Sachin", 24, 102);
emp1.displayData();
emp1.findEmployee(102);
