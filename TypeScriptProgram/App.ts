export{}

interface user{
    // name : string,
    // age : number,
    // gender: string
}

class App implements user{

   private name ="dhruv";
    age =23;
    gender="male";
    constructor(name:string,age:number,gender:string){
        this.name =name;
        this.age = age;
        this.gender =gender;
    }

    Display(){
        console.log("Name = "+this.name+"  Age = "+this.age+"  Gender = "+this.gender);
    }
}

let user = new App("Dhruv",23,"male");
user.Display();
enum TaxSlab{
    slab1 = 250000,
    slab2 = 500000,
    slab3 = 600000
}
class Tax {
    private slab1 : number = 0 ;

}
