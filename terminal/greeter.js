/* const arg = process.argv.slice(2) //this will save the procesargv into arg start at index2

for (let i =0 ;i<arg.length;i++){
    console.log(`hello ${arg[i]}`)
}

node boilerplate.js
 */

const sale =[123,323,454]

let total =sale.reduce(
    (acc,current)=>{
        return acc+current
    },100

)

console.log(total)

const Customer =[
    {
    name:"amer",
    gender:"M"
},
    {
    name:"hussin",
    gender:"M"
},
    {
    name:"aizt",
    gender:"M"
},
    {
    name:"siti",
    gender:"F"
},
]
/* 
const Female = Customer.filter((Customer)=> Customer.gender != "M")
console.log(Female);
 */
const map =Customer.map(custList)

function custList(customer){
    console.log(`customer name is ${[customer.name]}`)
}