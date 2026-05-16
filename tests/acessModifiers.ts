// //Access modifiers


// //Encapsulation - Hiding the data or class members
//                  //Abstraction - Hiding the implementation details

// // Writing methods using function keyword not using class
// function HeyGuysmethod(myname:string,myage:number):string{
//     console.log(`My name is ${myname} and my age is ${myage}`);
//     return 
// }
// HeyGuysmethod("Sandesh",25);

// //add two numbers and return its final value


// function addTwoNumbers(num1:number,num2:number):number{
//     const sum = num1+num2;
//     console.log(`The sum of two numbers is ${sum}`);
//     return sum;
// }
// let total = addTwoNumbers(10,20);


// function multiplyTwoNumbers(num3:number,num4:number):number{
//     const multiply = num3 * num4;
//     console.log(`The multiply of two numbers is ${multiply}`);
//     return multiply;
// }
// multiplyTwoNumbers(total,2);

// //write function using interface

// interface interface_employee{
//     emp_name:string;
//     salary:number;
//     joinDatecomfirmed:boolean;
// }
// function function_employee(emp_details:interface_employee){
//     console.log(emp_details.emp_name)
//     console.log(emp_details.salary)
//     console.log(emp_details.joinDatecomfirmed)
// }
// function_employee({emp_name:"Sandesh",salary:1000,joinDatecomfirmed:true});


enum world{
    continent = "Asia",
    country = "India",
    state = "Telangana",
    city ="Hyderabad"

}
const variable= world.city;
console.log(`The choosen is ${variable}`);


interface apiresponse<jaffa>{
 data:jaffa;
    apigoods:boolean;
}
const response1:apiresponse<{name:string,numbr:number}>={
    data:{name:"Sandesh",numbr:9999},
     apigoods:true
}
console.log(response1.data);



// generic with array

function genericswitharray<gen>(items:gen[]):void{
    for (const x of items){
        console.log(x);
        
    }   
}
let mynumarray:number[]=[1,2,3];
genericswitharray<number>(mynumarray);
let mystringarray:string[]=["a","b","c"];
genericswitharray<string>(mystringarray);

