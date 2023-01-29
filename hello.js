var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getFullName = function (firstName, lastName) {
        return "Hello ".concat(firstName, " ").concat(lastName);
    };
    return Person;
}());
var p = new Person;
console.log(p.getFullName("sanidhya", "varshney"));
