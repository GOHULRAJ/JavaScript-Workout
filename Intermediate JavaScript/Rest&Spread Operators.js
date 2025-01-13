/*Both the rest and spread operators use the same syntax ..., but they serve different purposes.

Rest Operator: Collects remaining parameters in a function into an array. */

// function sum(...numbers){
//     return numbers.reduce((acc,num)=>acc+num,0);
// }
// console.log(sum(1,3,4,2));

/* Spread Operator: Expands elements of an array or object into individual elements. */

// const arr1=[1,2,3,4];
// console.log(arr1);
// const arr2=[...arr1,5,6,7];
// console.log(arr2);
// console.log(arr1);

const employee={name:"Subhashini",age:23};
console.log(employee);

let changeEmployeeDetails={...employee,city:"Mayiladuthurai"};
console.log(changeEmployeeDetails);