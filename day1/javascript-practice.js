let age =25;
let user = {
   name:"Mayar",
   age: 25,
   nat:"Palestine"
};
let isStudent=false;
let num1=15;
let num2=33;
let fruits =["Apple","Banana","Mango","Grape"];
// Funtion 1 the sum of 2 numbers
function sum (_n1,_n2){
    return num1+num2
};
console.log(sum(num1,num2));

//Function2 a loop that prints the numbers from 1 to 10
for(let i=1;i<=10;i++){
    console.log(i);
};

//A function that print seach fruit

for(let i=0;i<=fruits.length;i++){
    console.log(fruits[i])
};
// A funtion that greets people and introduce oneself

console.log ("Hello, my name is " + user.name + ". I'm " + user.age + " years old and I'm from " + user.nat);