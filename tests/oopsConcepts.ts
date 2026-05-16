
// Example 1: Creating simple classes with methods and calling them


// class FirstClass {
//     examplemethod1() {
//         console.log("First method inside First class");
//     }
//     examplemethod2() {
//         console.log("Second method inside First class");
//     }   
// }

// let myobj = new FirstClass();
// myobj.examplemethod1();
// myobj.examplemethod2();

// class SClass {
//     samplemethod() {
//         console.log("First method inside Second class");
//     }   
//     samplemethod2() {
//         console.log("Second method inside Second class");
//     }       
// }
// let myobj2 = new SClass();
// myobj2.samplemethod();
// myobj2.samplemethod2();

//Example 2: MathsOperations class with methods to add, multiply and subtract numbers


// class MathsOperations {
//     //add 2 numbers
//     methodtoSum(numONE: number, numTWO: number):number { // when numONE and numTWO are numbers then the return type will also be number
//         console.log("This method will add two numbers")
//         const totalSum = numONE + numTWO
//         return totalSum // using return keyword to return the value for storing in methodtoSum variable to use outside the method
//     }
//     // multiply 3 numbers
//     methodtoMultiply(numONE: number, numTWO: number, numTHREE: number):number {
//         console.log("This method will multiply three numbers")
//         const totalMultiply = numONE * numTWO * numTHREE
//         return totalMultiply
//     }
//     //subtract 2 numbers
//     methodtoSubtract(numONE: number, numTWO: number):number {
//         console.log("This method will subtract two numbers")
//         const totalSubtract = numONE - numTWO
//         return totalSubtract
//     }
//     methodtosumallMethods():number {
//        // console.log("This method will add all three method values")
//         return this.methodtoSum(156,4) + this.methodtoMultiply(2,4,6) + this.methodtoSubtract(120,10)
//     }
// }
// // create object to access class properties in it
// let Obj = new MathsOperations()
// console.log(Obj.methodtoSum(156,4)) // calling method using object and passing parameters/values
// console.log(Obj.methodtoMultiply(2,4,6))
// console.log(Obj.methodtoSubtract(120,10))
// // adding sum of all three methods
// //  const finalSum = Obj.methodtoSum(156,4) + Obj.methodtoMultiply(2,4,6) + Obj.methodtoSubtract(120,10)
// //     console.log("Final sum of all three methods is: " + finalSum);
// console.log("This method will add all three method values: " + Obj.methodtosumallMethods());

// //Example 3 : Class with constructor and methods

// class MathsOperations2 {
//     constructor(bankinterestRate: number)
//     {
//         console.log("As per RBI bank interest rate is: " + bankinterestRate);
//     }
//     methodtoSum(numONE: number, numTWO: number):number {
//         console.log("This method will add two numbers")
//         const totalSum = numONE + numTWO
//         return totalSum
//     }   
// }
// let Obj2 = new MathsOperations2(8.5);

// // Example 4: Class Interface implementation

// interface interfaceExample {
//     InterestRate: number;
//     methodnewyearPlan(): string;
// }

// class ChildClass implements interfaceExample {
//     InterestRate: number= 9;
//         methodnewyearPlan(): string {
//             console.log("This method is for new year plan");
//             return "New year plan implemented";

//         }
// }


// // Example 5: Inheritance concept

// // Class |Constructor |Interface |methods
// interface interfaceExample{
//     Interestrates:number;
//     variablenewInterestrates:number,
//     methodnewyearplans():string;  
// }
// class Childclass implements interfaceExample{
//     Interestrates: number=9;
//     variablenewInterestrates: number=9.5;
//     methodnewyearplans(): string {
//     console.log("this is new implemention")
//     return "this is String return"
//     }
// }
// //inhertitance
// class MathsOps extends Childclass{   
//     constructor(bankinterstrates:number)
//     {
//         super()
//         console.log("As per RBI bank interest rate is "+bankinterstrates)
//     }        
//     //add numbers
//     methodtoSum(numONE: number, numTWO: number=1):number {
//         console.log("This method will add two numbers")
//         const totalSum = numONE + numTWO
//         return totalSum
//     }
// }
// let Obj = new MathsOps(9)
// console.log(Obj.Interestrates)


// // Example 6: Abstract class example

//  /**
//  CLASS:: normal class...implemented methods..<br>
//  INTERFACE:: interface ...unimplemented methods<br>
//  ABSTRACT CLASS :abstract will have both implmeneted and unimplmeneted methods
//  **/

//  abstract class Childclass2 {
//     Interestrates: number=9;
//     variablenewInterestrates: number=9.5;
//     abstract abstractmethodnewyearplans():void; // unimplemented method void means no return type (Its does not return any value, so return is not used)
//     methodnewyearplans(): string {
//     console.log("this is new implemention")
//     return "this is String return"
//     }
// }
 
// class NewClass extends Childclass2{
//     abstractmethodnewyearplans(): void {
//         console.log("This is abstract method implementation in class")
        
//     }
// }
 
// let Obj = new NewClass();
// console.log(Obj.Interestrates);
// Obj.abstractmethodnewyearplans();   
// console.log(Obj.methodnewyearplans());

 
//  // Example 7: Polymorphism concept through method overloading

//  interface Overloading {
//     //method
//     iamTata(): void;
//     iamTata(tcs:String): void;
//     iamTata(tatamotors:String,LandROver:string ): void;
//     iamTata(tataSteeel:String): void;
//     iamTata(tataAIG:String): void;
// }
// class MethodOverlaoding implements Overloading{
//     iamTata(): void;
//     iamTata(tcs: String): void;
//     iamTata(tatamotors: String): void;
//     iamTata(tataSteeel: String): void;
//     iamTata(tataAIG: String): void;
//     iamTata(tataAIG?: unknown): void {
//         throw new Error("Method not implemented.");
//     }    
// }
 

// Example 8: Polymorphism concept through method overriding

//method overriding :: without changing method name changing its behaviour
//this ...> represents currect clas memebers  methods,vairables,
//super ...> represnts to call parent class memebrs methods and constructor  NOT Varaibles

class Parentclass {
    iamvalue: number = 2025;
    constructor() {
        console.log("This is parent class constructor");
    }
    Iam2025(): void {
        console.log("This is parent class method Iam2025");
    }
}
class Childclass extends Parentclass {
    iamvalue: number = 2026; // same variable name as parent class  
    constructor() {
        super(); // to call parent class constructor
        console.log("This is child class constructor");
    }
    Iam2025(): void { // method overriding
        super.Iam2025(); // to call parent class method
        this.iamvalue;
        console.log("This is child class method Iam2025");
    }   
}
let Obj = new Childclass();
console.log("Value of iamvalue variable: " + Obj.iamvalue);
Obj.Iam2025();
