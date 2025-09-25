//Now we will see the pattern programing
/*
console.log("hello")
console.log("world") ye dono hello and world dono alag alag line par print honge
because console ek object hai and log uss object ka method hai toh iss console.log ye aapka output dene k
baad next line par chali jayegi
Now muje agar "hello world" agar ek hii line  par likh do but hume ye "hello world" ek hii console.log mein nhi 
lihenge 
Toh humare pass ek function hoti hai i.e process.stdout.write() ye use karenge but isko install karna padega 
because console.log() ye humari ek window function and process.stdout.write() ye humari Node Enviornment ki function 
hai so isko process.stdout.write() chalne k liye humare pass ek Node Enviornment hona chaiye so humein Node ko download
ya install karna padega 
*/
process.stdout.write("hello")
process.stdout.write("world")//ye helloworld karke sirf terminal par Run hoga ye Browser par Run nhi hoga
//ye process.stdout.write() ye browser par Run nhi hoga because it is part of Node so ye terminal par hii Run hoga
//so terminal par Run karenge node Lec04.js toh output mein helloworld aayega
/*8toh jab bhi mein chahta hoon ki mere pass 2 3 function ho aur uske kuch output ho par ek hii line
mein aane chaiye i.e process.stdout.write() tab use karenge ye process.stdout.write() aur ye Node Enviornment ka 
function hai agar aapke pass Node Enviornement nhi hoga toh ye process.stdout.write() nhi chalega aur ye sirf 
terminal mein chalega*/
console.log("hello")
console.log("world")//ye window function hai toh ye browser k console par chalega 
//ye hello and world dono ko alag alag line par print karega


var prompt = require('prompt-sync')();
// so normally prompt ye browser par chalta hai alert ki tarah but prompt-sync package ki wajah se
//iski wajah se terminal par prompt chalega so install this with npm i prompt-sync aise
//get input from the user.
var n = prompt('How many more times? ');
/**Now  */
console.log("this is print * in different line because of console")
console.log("*")
console.log("*")
console.log("*")
console.log("*")
console.log("*")//so aise alag alag line par * print hoga

process.stdout.write("this is process node enviornment")
process.stdout.write("*")
process.stdout.write("*")
process.stdout.write("*")
process.stdout.write("*")
process.stdout.write("*")//ye 5 pacho * ek hii line mein print karta hai because of process.stdout.write()

//Now
for(let i=1; i<=n; i++){
    process.stdout.write("*")//ye ek hii line mein print karega n number of * because of process.stdout.write
}
/**pattern programming this is have 5 row and 5 column simple pattern printing */
console.log("pattern programing")
for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        process.stdout.write("*")
    }
    console.log("")
}


/**this is Right angle triangle pattern printing */
for(i=1; i<=n; i++){
    for(j=1; j<=i; j++){
        process.stdout.write("*")
    }
    console.log("")
}

console.log("this is Inverted Right angle trianle")
/**this is Inverted Right Angle Triangle pattern printing */
for(i=1; i<=n; i++){
    for(j=n; j>=i; j--){
        process.stdout.write("*")
    }
    console.log("")
}


// this is we have to solve
// for(i=1; i<=n; i++){
//     for(j=1; j<=i; j++){
//         process.stdout.write("-")
//     }
//     for(j=i; j>=i; j--){
//         process.stdout.write("*")
//     }
    
//     console.log("")
// }