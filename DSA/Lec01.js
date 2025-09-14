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

// operators in javascript
//Note-  / always gives Quotient and % always gives Remainder
let e = 7;
let f = 2;
console.log(e%f);// it will give Remainder 1
console.log(Math.floor(e/f));// it will give 3 ye integer mein hii hoga because of math.floor it will give Quotient
console.log(f%e);//so idhar 2 ko 7 ek baar bhi divide nhi karega iske liye sirf 2 hii aayega
//note here f%e here f is divident and e is divisor agar divident choti hai divisor se toh calculate hii mat karo because jo aapka divident hai wohi appka answer hai
console.log(Math.floor(f/e)); //answer o.567 aise aayega but because of math.floor 0 answer aayega

//Now 
let k = 4567; //so here we want 4+5+6+7 aise chaiye so k%10 se last value i.e 7 bahar aayega i.e jo bhi k mein last value rahega woh aayega using %
// so agar 69%10 karenge toh answer 9 aayega agar 3456%100 karenge toh answer 56 aayega
console.log(k%100);// answer 67 aayega 
console.log(k%1000); //answer 567 aayega
//Now k/10 karenge i.e divide karenge toh decimal i.e . lag jayega means 456.7 aayega
console.log(k/10)//means agar divide kiya toh last digit chala jata hai decimal mein aur iss last digit ko math.floor se hata sakte hai
console.log(Math.floor(k/10))//toh 4567 ye k/10 se 456.7 ban jayega and math.floor se ye 456 ban jayega means last digit 7 hatt jayega
console.log(Math.floor(k/100))//so isse last k 2 digit hatt jayenge 4567 mein se aur 45 bachega

//Relational operator > < <= >= != dekhenge
//so Relational operator means kuch compare kar rhe hai hum
console.log(10>=10)//toh greatar than equal to mein se ek condition means equal to true hogyi toh true aayega
console.log(10>=7)//toh greatar than equal to mein se ek condition means greater than toh true hogyi toh true aayega
console.log(10<=7)//so here dono condition false hai means less bhi nhi hai aur equal bhi nhi hai toh false aayega
console.log(10 !== 11)//true aayega so ye strict equality hai i.e !== and != ye non strict equality hai
/*
Now difference between = == and ===
so = is assignment operator ye value assign karne ka kaam karta hai means value dene ka kaam karta hai variable mein
var a = 12; toh = ka kaam hai value assign karna means value set karna
now
 == ye check karta hai ki left and Right mein same value hai ya nhi for eg agar a == a hai toh answer aayega true because same value hai
 but agar 12 == 13 karenge toh false aayega because == ye value check karta hai and 12 and 13 same value nhi hai isliye false
 but problem of == is it gives true for this 12 == "12" because ye sirf value check karta hai isliye ye true dega
 so == ye sirf value check karta hai but === ye value and dataType dono check karta hai isliye 12==="12" ye false dega
 so humein === yahi jyada kar use karna hai
 */

 /**
  * nOW WE WILL SEE THE LOGICAL OPERATOR && ||
  * So logical operator wahan use karna hai jab humein multiple conditions check karni ho
  * console.log(10>6 && 5<9) so & operator se agar ye dono condition true hai toh true milega
  * console.log(10>6 || 15<9 || 18>9) so || operator k dono side true hoga phir bhi chalega and agar ek side true hoga phir bhi chalega
  */

 /*
 unary operator
 ++ is increment hota hai iske 2 variant hote hai i.e preIncrement and postIncrement
 -- is decrement hota hai iske 2 variant hote hai i.e preDecrement and postDecrement
  */
 let i = 11;
 i = i++ + ++i //means 11+13 = 24
 console.log(i);//24 aayega
 let j = true; //javascript mein true is 1 
 j++;// javascript mein boolean value means true par yeh ++= operator chal sakta hai baki kisi languaagage mein ye nhi hota
 console.log(j)// 2 aayega

 /*now
 let a = 11++;
 console.log(a) error dega because hum ++ ye sidha value i.e 11++ par direct nhi laga sakte 
 but variable a++ par laga sakre hai ye error nhi dega */
