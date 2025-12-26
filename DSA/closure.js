function test(){
    let count = 0;
    function increment(){
        //return count++//it first prints then increase count isliye pehle 0 print krta hai then 1 increase krta hai
        return ++count//it first increase then print
    }

    return increment
}

//console.log(count);

const counter = test()//test() function return krega increment function k reference ko 
console.log(counter)//so abb counter variable k andar increment ka refrence hai so increment function ko print krega
console.log(counter());//it will give 1
console.log(counter());//it will give 2
console.log(counter());//it will give 3
console.log(counter());//Note ye counter() ka matlab hai increment() ko call karna
/**so console.log(counter) means hai ki ismein counter mein bas increment function ka reference hai
 * so yeh reference se function increment call nhi hota hai because function call karne k liye humein ()
 * () parenthesis ka use karna padega 
 * aur console.log(counter()) mein idhar counter() ka matlab hai ki ismein increment() aise call kiye hai
 * 
 */
