function reverse(val){
    //let reverseStr = val.split[',']
    let reverseStr = Array.from(val);
    //console.log(reverseStr)

    
    let val2 = reverseStr.reverse();
    //console.log(val2)

    let val3 = val2.toString();
    console.log(val3)
}

reverse('aman');
reverse('vishal')
reverse('abhay')


//---------Even or odd
function number(num){
    if(    num%2 === 0){
        console.log(`the Even number is ${num} `)
    } else {
        console.log('the number is odd')
    }
}

number(2);


//---- largest number in array
function findLargest(arr){
    
    if(arr.length === 0) return null;
  
    let largest = arr[0]
    for(let i = 1; i< arr.length ; i++ ) {
        if( arr[i] > largest){
            largest = arr[i];
        }
        //else{
          //  return largest;
        //}
       
    }
    console.log(largest)
}

findLargest([2,7,8.9,20,788])


//---count vowels
function checkVowels(str){
    let vowel = Array.from(str)
    console.log(vowel) 

   /* if(vowel.includes('a,e,i,o,u,A,E,I,O,U')){
        console.log('it has vowels')

    }*/

        for(let char of vowel){
            if(vowel.includes(char)){
                console.log('it has vowels')
                return;
            }
        }
        console.log('no vowels found')
}

checkVowels('ritesh')

/**Write a function to count vowels in a string.

Write a program to print numbers from 1 to 100 using a loop.

5. Check if a String is a Palindrome
js
Copy
Edit
Input: "madam"
Output: true
6. Find the Factorial of a Number
js
Copy
Edit
Input: 5
Output: 120
7. Remove Duplicates from an Array
js
Copy
Edit
Input: [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]
8. Fibonacci Series up to N terms
js
Copy
Edit
Input: 5
Output: [0, 1, 1, 2, 3]
9. Check if a Character is a Vowel or Consonant
js
Copy
Edit
Input: "e"
Output: "Vowel"
10. Find the Sum of All Elements in an Array
js
Copy
Edit
Input: [1, 2, 3, 4]
Output: 10
➕ BONUS: Slightly Tricky Question
11. Write a function that flattens a nested array
js
Copy
Edit
Input: [1, [2, [3, 4]], 5]
Output: [1, 2, 3, 4, 5]

 */
const n = 5;

for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}




const m = 5;

for (let i = 0; i < m; i++) {
  let row = '';
  for (let j = 0; j < m; j++) {
    row += '*';
  }
  console.log(row);
}



// function duplicate() {
//   let myarray = [1,  2, 3, 4, 2, 3, 4,5,5];
//   let duplicates = [];

//   for (let i = 0; i < myarray.length; i++) {
//     for (let j = i + 1; j < myarray.length; j++) {
//       if (myarray[i] === myarray[j] && !duplicates.includes(myarray[i])) {
//         duplicates.push(myarray[i]);
//       }
//     }
//   }

//   console.log("Duplicates are:", duplicates);
// }

// duplicate();


function duplicate(){
  let myarray=[1,2,2,3,3,4,5,7,7]
  let duplicates = [];

  for(let i=0;i < myarray.length; i++){
    for(let j=1 ; j< myarray.length; j++){
      if(myarray[j]===myarray[i] && !duplicates.includes(myarray[i]) ){
        duplicates.push(myarray[i]);
      }
    }
  }

  console.log("duplicatesa are",duplicates);

}

duplicate()


//--------------sum of elements in array
function sum(){
  let array=[1,2,3,4,900]
  let array1 =array.reduce((accumulator, currentValue)=> accumulator + currentValue,
0)
  console.log(array1)
}

sum()

//---palindrome
function palindrome(){
  let str = 'malayalam';
  //let reversed = str.split('');//gives array-> ['a','m','a','n']
  let reverse = str.split('').reverse().join('')
  //console.log(reverse)

  if(str == reverse){
    console.log(`${str} is a palindrome`)
  } else{
    console.log('it is not a palindrome')
  }
}

palindrome();


///----countdown from n to 1
function countdown(n){
  if(n==0){
    return ;
  }
  console.log(n)
  countdown(n-1);//tthis is recursion
}

countdown(5)

//---factorial
function factorial(n){
  if(n===1) return 1 ;
  return n * factorial(n-1)
  
}

console.log(factorial(5)); //aise console par print karenge


//---sum of array
//function sum(arr) {
 // if (arr.length === 0) return 0;
  //return arr[0] + sum(arr.slice(1));
//}

//console.log(sum([1, 2, 3, 4, 5])); // Output: 15
//console.log(sum([1, 2, 3, 4, 5])); // ✅ correct call


//---reverse String
function reverseString(str) {
  if (str === "") return ""; // base case
  return reverseString(str.slice(1)) + str[0]; //use of recursion
}

console.log(reverseString("aman")); // Output: "olleh"



//
const arr = ["1", "aman", "singh", "BscIt"]
for(let i of arr){
  console.log(i)
}

const obj = {
  name:"aman",
  surname:"singh",
  std:"15"
}
for(let i in obj){
  console.log(obj[i])
}

arr.forEach( (val,i) => {
  console.log(`the index is ${i} and value is ${val}`)
  
});
//
const obj2= {...obj, name:"mangal"} //use of spread operator
console.log(obj2)

const [x, y, z]= arr; //destructuring occurs in array in this way not on object like in obj
console.log(x)
console.log(y)
console.log(z)

const {name, surname, std}= obj;
console.log(surname)
console.log(std)