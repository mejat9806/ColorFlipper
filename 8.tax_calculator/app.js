const allitem = 45;
const taxRate = 5;
let total = 0;
function calculateTax() {
  let taxdue = allitem * (taxRate / 100);
  return (total = allitem + taxdue);
}

console.log(calculateTax());
