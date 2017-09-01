// Type inference
// TypeScript can infer the type of a variable
// by examining its value in compile time.
let num = 10; // type number
let str = "Hello"; // type string

// We can also explicitly specify the type for a variable (recommended).
let x: number = 10;

// This will throw an error
// because x already has type number and can't be changed to type string.
// x = "Hello";

// String concatenation
let result = num + str; // type string

// Type any can hold any type.
let info: any; // is equivalent to: let info;
info = 6;
info = "I become a string now.";

// Type enum allows us to define a set of named numeric constants.
enum EyeColor {
    Brown = 1,
    Black,
    Blue
}

let myEyeColor = EyeColor.Black;
console.log(myEyeColor); // Prints 2
console.log(EyeColor[myEyeColor]); // Prints Black

// Array
let nameList1: string[] = ["Zico", "Daniel", "Tom"]; // string only
// is equivalent to
let nameList2: Array<string> = ["Zico", "Daniel", "Tom"]; // string only

let mixedTypeList: any[] = ["Hello", 2, true]; // any type

// Tuple
// Unlike any[] that allows us to put any data type in an array,
// tuple allows us to specify what data types are allowed in an array.
let tuple: [string, number] = ["How are you?", 100, "friend", 6, 8]; // string and number only

// Class
class Person {
    constructor(public name: string, private age: number) {}
}

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

let mPerson: Person = new Person("Zico", 21);

// This will throw an error at compile time, but still prints correct value at runtime,
// because age is a private field.
console.log(mPerson.age);

// Interface
interface Animal {
    // Fields
    name: string,
    age?: number, // ? makes this field optional.
    species: string,

    // Method signature
    run(speed: string): void
}

// Use case 1: class implements interface.
// It has to implement all non-optional fields and methods defined in the interface.
class Dog implements Animal{
    constructor(public name: string, public species: string) {}

    run(speed: string) {
        console.log(`${this.name} is running ${speed}!`);
    }
}

var mDog = new Dog("Cici", "Border Collie");

mDog.run("fast");

// Use case 2: object implements interface.
let cat: Animal = {
    name: "Kitty",
    age: 12,
    species: "Cat",
    run: function(speed) {
        console.log(`A cute cat is running ${speed}.`);
    }
}

cat.run("slow");