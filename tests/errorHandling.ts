// Error Handling
// Errors are run time exceptions that occur during the execution of a program.
// In TypeScript, we can handle errors using try, catch, and finally blocks. 
// And throw statement is used to throw custom errors.


function MovieTicket(ageOfPerson: number){
    try {
        if(ageOfPerson >= 18){
            console.log("You are eligible to watch the movie.");
        } else {
            //Error is an Object
            //throw raise a custom error
            throw new Error("You must be at least 18 years old to watch this movie.");
        }
        // Here ageerror is a variable..i.e catches & handle it
    } catch (ageerror) {
        if (ageerror instanceof Error) {
            console.log(ageerror.message);
        }
    }
    finally {
        console.log("Have a great day!");
    }       
}
MovieTicket(17)