//Arrays
myArr=[1,2,3,4,5];
console.log(myArr);

//Array Mapping - map()
console.log("Map function():");
const newArr=myArr.map(num=> num*num);
console.log(newArr);

//filter()
const evenArray=myArr.filter(num=>num%2===0);
console.log("filter():",evenArray);

//foreach()
console.log("ForEach():");
myArr.forEach(element => {console.log(element*5);});

//find()
console.log("find():");
const largestNumber=newArr.filter(number=>number>15);
console.log(largestNumber);

//some()
console.log("some():");
const someResult=newArr.some(number=>number%2===0);
const someResult1=newArr.some(number=>number==45);
console.log("SomeResult:",someResult);
console.log("Has 45:",someResult1);

//every()
console.log("Ever element should meet out the following condition:");
const eveNumbers=[2,4,6,8,9];
checkIsEven=eveNumbers.every(n=>n%2===0)
console.log(checkIsEven);

//sort()
console.log("Sort the Array");
const unsortedArr=[5,3,4,1,2];
// const sortedArr=unsortedArr.sort((a,b)=>a-b);
const sortedArr1=unsortedArr.sort();
console.log(unsortedArr);
// console.log(sortedArr);
console.log(sortedArr1);


const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.splice(1, 1, 'Blueberry'); // Remove 1 element at index 1 and insert 'Blueberry'

console.log(fruits);

//concat()
const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
const conCatnewArr=arr1.concat(arr2)
console.log("concat Array:",conCatnewArr);

