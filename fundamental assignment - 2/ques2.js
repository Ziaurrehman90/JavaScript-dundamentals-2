// create a function thst takes multi- arguments 
function calculateTotalValue(...numbers){
    let summ=numbers.reduce(function(acc,curr){
        return acc+curr;
  },0);
//   console.log(summ);
console.log("The total cart value is ",summ)
}
calculateTotalValue(125,20,30)
// console.log(calculateTotalValue(numbers))