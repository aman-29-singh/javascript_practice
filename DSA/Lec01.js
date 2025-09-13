/*
console.log(a);
var a;//undefined aayega

so agar var se variable banayenge toh bane se pehle use ho sakta hai lekin agar let se variable banayenge 
toh bane se pehle use nhi kar sakte 
toh hum jyada tar let ka use karenge aur let se hii variable banayenge
*/
//sum of two number
let a = 10;
let b = 20;
console.log(a+b);

//Difference between Number and String
let c = 12;
let d = "13"
console.log(typeof(c+d))//here concat ho jayega aur ye data ka type hai String 
// so ek number and String ko add karne par String milega toh isko concatenation bolte hai
// so typeof is a special keyword in javascript it will give data type 

//now sum and message
let m = 10;
let n = 20;

console.log("sum of 10 and 20 " + m+n) // so here 1020 aayega
/*so here "sum of 10 and 20" is string operand and m is  Number operand and + is operator so it will concatenate
and it will gives String and then n is Number and  is operator so String + n Number will concatenate
sobasically is not gonna add it will gonna concatenate i.e 1020
but muje phir bhi add karwana hai so humne 6th 7th class mein padha tha ki agar expression mein bracket laga 
denge toh woh priority dega ki kisko solve karna hai
i.e console.log("sum of 10 and 20 is" + (m+n)) so here (m+n) mein bracket laga diye so here pehle bracket
ki priority hai pehle bracket ko solve karega answer aajayega  Number mein because here m and n both
are Number toh dono Number add hokar answer Number mein hii aayega i.e 30 then string i.e "sum 0f 10 and 20" +
Number 30 dono add hokar + hokar answer string mein hii aayega */
console.log("sum of 10 and 20 is " + (m+n))
console.log( m+n + "is sum of 10 and 20 " ) //30is sum of 10 and 20 because Number m+n pehle add honge because Number + Number

// type coercion javascript bolta hai ki mein aapke operator k hisaab se calkculation karunga
console.log("1" + 1);//javascript ka engine isko concatenaate kar dega because operator is + hai and operand is string and Number
console.log("1" - 1);//so here - operaator k 2 kaam nhi hai sirf ek kaam hai i.e subtraction karna
//toh javascript ka engine bolega ki string "1" ko Number 1 se subtract nhi kar sakte 
//toh javascript ka engine idhar console.log("1"- 1) mein iss string "1" ko number 1 mein bana kar subtract kar dega
//toh console.log("1" - 1); ka answer 0 aayega toh issi process ko type coercion bolte hai
//Note + sign ko 2 kaam hota hai i.e concatenation and addition but - ka sirf ek kaam hota hai i.e subtraction
//jinhone javascript nanayi hai unhone bola ki + sign se addtion tab hoga jab dono operand Number ho
console.log("1" + 1); // answer is 11 i.e conctenation hoga

// Now Accept and print the Number
//so user se value lene k liye we will use prompt() function
let age = prompt("what is your age");
console.log(typeof(age))//here string aayega because jo prompt function hai ye data as a string pick karta hai
//but humein chaiye ki jab prompt pick kare toh Number pick kare isliye Number(prompt()) ka use karenge
let rollno = Number(prompt("what is your Roll no"));
console.log(typeof rollno)//so here Number aayega because we had use Number(prompt())
/*so ye Number() ek function hai jismein hum age ya koi bhi string pass karenge aur ye string agar Number mein
convert ho sakti hogi agar toh number mein milega jaise agar hum Number("12") aise string pass karenge toh ye
Number mein mil jayegi but agar Number("aman") aise string pass karenge toh ye string "aman" ye Number mein
convert nhi hogi so isliye idhar Nan aayega because ye Number("") ismein diye gaye string ko number mein
convert kar degaa agaar ho sakta hoga toh kar dega but idhar ye "aman" string Number nhi ban sakta isliye 
Nan milega but Number("12") so idhar ye "12" string ko 12 number mein convert kar sakte hai  toh 
yeh "12" string ye  Number mein ban jayegi so Number() ye ek function hai iske andar prompt as a parameter
hum pass karenge */
let age1 = Number(prompt("enter your age1 here"))
console.log(age1)
//so jo hum string se number bana rhe hai isko type casting bolte hai i.e type conversion bolte hai
// so basically ek type se doosre type par jane ko hii type conversion ya type casting bolte hai

//Now we will see the swaping so there are 3 methods of swaping
let x = 10;
let y = 20;
let z; // so ek extra variable lenge i.e z
//so hum swap karenge means x variable mein value aani chaiye 20 and y variable mein value aani chaiye 10
/* this is a 1st method of swaping
z = x; // so z = 10 , x = 10 hai abhi bhi toh idhar hum x ki value z variable mein dedenge matlab z variable mein x variable ki value copy hui hai
x = y // abb idhar x = 20 means x mein 20 aa chuka hai but y = 20 hai abhi bhi
y = z // now y = 10 hogya hoga means finally swap hogya
//means finally swap hogya idhar matlab x ki value y mein aagayi and y ki value x mein aagai
console.log(x);// 20 aayega 
console.log(y);// 10 aayega so this is a 1st method of swaping
*/

//now we will see the 2nd method of swaping so here we will use the mathemathics without extra variable
x = x + y; // x = 30
y = x - y; // y = 10
x = x - y; // i.e 30 - 10 = 20 means x = 20 
// so here bhi swap hogya
console.log(x,y); //20, 10 aayega means swap hogya
