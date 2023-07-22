class Operand{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    sum(){
        return this.num1 + this.num2
    }
    subtraction(){
        return this.num1 - this.num2
    }
}


const add = new Operand(122,122).sum()
console.log(add);
const minus = new Operand(10,1).subtraction()
console.log(minus);
const minusADD = add - minus
console.log(minusADD);