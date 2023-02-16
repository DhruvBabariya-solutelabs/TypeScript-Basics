export{}
abstract class Person{
   abstract name : string;
    age : number;

    constructor(age : number){
        this.age =age;
    }

    abstract findEmployee(id :number) : Person
}

class Employee extends Person{

    name: string;
    empid : number;
    constructor(name : string, age:number, empid : number){
        super(age);
        this.name = name;
        this.empid = empid;
    }

    displayData(){
        console.log("Name = "+this.name+" Age = "+this.age+" Emp Id = "+this.empid);
    }

    findEmployee(id: number) : Person {
        return new Employee("Dhruv",23,101);
    }
}

let emp1 = new Employee("Sachin",24,102);
emp1.displayData();
emp1.findEmployee(102);