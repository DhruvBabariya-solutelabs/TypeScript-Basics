function getItems(items: any[]) :any[]{
    return new Array().concat(items);
}

let num = getItems([10,20,30,40]);
let str = getItems(["abc","xyz","pqr"]);

num.push("xyz");
str.push(30);

console.log(num);
console.log(str);

function greater<T>(arg1 :T,arg2 :T): T{
    if(arg1>arg2){
        return arg1;
    }else{
    return arg2;
    }
}

console.log(greater(23,45));
console.log(greater("abc","xyz"));
console.log(greater(23,12));

class Person1{
    firstName : string ="abc"
    lastName : string  = "xyz"

    greet(){
        console.log("Hey there");
    }
}

class Admin extends Person1{

}
class Manager extends Person1{

}

let admin = new Admin();
let manager = new Manager();

function personEcho<T extends Person1>(person : T):T{
    return person;

}

let admin1 = personEcho(admin);
console.log(admin1.firstName);
console.log(admin1.lastName);
console.log(admin1.greet());
Array.prototype.push()