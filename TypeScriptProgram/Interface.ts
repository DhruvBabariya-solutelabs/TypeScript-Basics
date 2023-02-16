interface Taxslab{
    slab1 : number;
    slab2 : number;
    slab3 : number;
    slab4 : number;
    calculateTax(value: number): void
}

enum Slab{
    slab1 = 0,
    slab2 = 5,
    slab3 = 10,
    slab4 = 20,
    slab5 = 30
}


class TaxCalculation implements Taxslab{
   
    slab1=200000;
    slab2=500000;
    slab3=1000000;
    slab4=2000000;

     calculateTax(value: number): void {
        if(value >0 && value < this.slab1){
            console.log("slab1 = "+Slab.slab1+"%");
        }else if(value >this.slab1 && value < this.slab2){
            console.log("slab2 = "+Slab.slab2+"%");
        }else if(value > this.slab2 && value < this.slab3){
            console.log("slab3 = "+Slab.slab3+"%");
        }else if(value > this.slab3 && value <this.slab4){
            console.log("slab4 = "+Slab.slab4+"%");
        }else{
            console.log("Slab5 = "+Slab.slab5+"%");
        }       
    }
     
}

function slab(config : Taxslab):void{
    console.log(config.slab1);
}

slab({
    slab1: 1000,
    calculateTax: function (): number {
        throw new Error("Function not implemented.");
    },
    slab2: 0,
    slab3: 0,
    slab4: 0
})

let a = new TaxCalculation();
a.calculateTax(3000000);