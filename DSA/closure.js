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
