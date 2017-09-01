"use strict";
// Type inference
// TypeScript can infer the type of a variable
// by examining its value in compile time.
var num = 10; // type number
var str = "Hello"; // type string
// We can also explicitly specify the type for a variable (recommended).
var x = 10;
// This will throw an error
// because x already has type number and can't be changed to type string.
// x = "Hello";
// String concatenation
var result = num + str; // type string
// Type any can hold any type.
var info; // is equivalent to: let info;
info = 6;
info = "I become a string now.";
// Type enum allows us to define a set of named numeric constants.
var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 1] = "Brown";
    EyeColor[EyeColor["Black"] = 2] = "Black";
    EyeColor[EyeColor["Blue"] = 3] = "Blue";
})(EyeColor || (EyeColor = {}));
var myEyeColor = EyeColor.Black;
console.log(myEyeColor); // Prints 2
console.log(EyeColor[myEyeColor]); // Prints Black
// Array
var nameList1 = ["Zico", "Daniel", "Tom"]; // string only
// is equivalent to
var nameList2 = ["Zico", "Daniel", "Tom"]; // string only
var mixedTypeList = ["Hello", 2, true]; // any type
// Tuple
// Unlike any[] that allows us to put any data type in an array,
// tuple allows us to specify what data types are allowed in an array.
var tuple = ["How are you?", 100, "friend", 6, 8]; // string and number only
// Class
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// is equivalent to
/*
class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
*/
var mPerson = new Person("Zico", 21);
// This will throw an error at compile time, but still prints correct value at runtime,
// because age is a private field.
console.log(mPerson.age);
// Use case 1: class implements interface.
// It has to implement all non-optional fields and methods defined in the interface.
var Dog = (function () {
    function Dog(name, species) {
        this.name = name;
        this.species = species;
    }
    Dog.prototype.run = function (speed) {
        console.log(this.name + " is running " + speed + "!");
    };
    return Dog;
}());
var mDog = new Dog("Cici", "Border Collie");
mDog.run("fast");
// Use case 2: object implements interface.
var cat = {
    name: "Kitty",
    age: 12,
    species: "Cat",
    run: function (speed) {
        console.log("A cute cat is running " + speed + ".");
    }
};
cat.run("slow");
//# sourceMappingURL=demo.js.map