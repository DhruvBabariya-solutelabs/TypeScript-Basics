class Employee{
    firstName : string
    lastName : string

    constructor(fName : string,lName : string){
        this.firstName = fName;
        this.lastName = lName; 
    }

    getEmployee(){
        console.log("First Name = "+this.firstName);
        console.log("Last Name  = "+this.lastName);
    }
}

let emp1 = new Employee("Abc","xyz");
emp1.getEmployee();

//Inheritance and Polymorphism

class Person{
    firstName : string ="abc"
    lastName : string  = "xyz"

    greet(){
        console.log("Hey there");
    }
}

class Programmer extends Person{
    skill : string = "coding"
    greet(){
        console.log("Hello World");
    }
}

let programmer = new Programmer();
programmer.greet();