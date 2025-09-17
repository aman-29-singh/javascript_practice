// conditionals statements
/** Note In if{} else{} statements  here if{} statement is independent i.e we can use if{} statement without
 * use of else{} but we cannot use else{} statement independently without if{} statement
 */
// valid voter problem
let ans = Number(prompt("what is your age"))

/*Note -
Nimber("lgdffdf") gives NaN and NaN === NaN is false
so we check NaN wit isNaN(ans) it gives true if ans is NaN
 */
// if(isNaN(ans)){
//     console.log("wrong Input");
// }

// if(ans>=18){
//     console.log("you can vote")
// }else{
//     console.log("you cannot vote ")
// }
if(isNaN(ans)){
    console.log("wrong Input")
}
else if(ans>=18){
    console.log("you can vote")
}else{
    console.log("you cannot vote")
}

// problem on shop discount
/**
 * Amount        Discount
 * 0-5000          0%
 * 5001-7000       5%
 * 7001-9000       10%
 * more than 9000   20%
 */

/*
this is Range Type of Questions means Range k hisaab se hoga jaise 5000 to 7000 k liye ye discount hoga
and 7000 to 9000 k liye ye discount hoga toh aise Range hai
let amount = Number(prompt("what is the final amount?"));
//console.log(amount)

if(amount>0 && amount<=5000){
    console.log(amount)
}else if(amount>5000 && amount<=7000){
    console.log(amount - Math.floor((5*amount)/100))//here 5 is discount and it gives payable amount after discount
}else if(amount>7000 && amount<=9000){
    console.log(amount - Math.floor((10*amount)/100))//here 5 is discount and it gives payable amount after discount
}else if(amount>9000){
    console.log(amount - Math.floor((20*amount)/100));//agar 12000 amount hai toh ispe 20* discount hoga 2400 toh payable amount hoga 9600
} so this is brute force technique 

*/
//now we will see the efficent technique to solve this questionsof range or discount problem
let amount = Number(prompt("what is the final amount?"))
let dis = 0;
if(amount>0 && amount<=5000){
    dis = 0
}else if(amount>5000 && amount<=7000){
    dis = 5
}else if(amount>7000 && amount<=9000){
    dis = 10
}else if(amount>9000){
    dis = 20
}
console.log(amount - Math.floor((dis*amount)/100))

//problem of unit to price
/**
 * Unit          Price
 * upto 100      Rs. 4.2/unit
 * 101-200       Rs. 6/unit
 * 201-400       Rs. 8/unit
 * more than 400 Rs. 13/unit
 * Now if if unit is 120 than starting k 100 unit ko hum 4.2 se denge and bache hue 101 se 120 ko hum 6/unit se
 * dengemeans 100 * 4.2 + 20*6 i.e 420 + 120 = 540 is payable amount
 * Npw if we have 700 unit than hum check karenge ki kitni aisi unit hai jo 400 k upar hai toh 300 unit hai 700 unit
 * mein se jo 400 k upar hai toh 300*13 because 400 k upar ppar 13 hai Now bache hue 400 unit mein se aisi
 * 200 unit hai jo 200 unit k upar hai so 200*8 Now bache hue 200 unit mein se 100 unit hai jo 100 unit se upar
 * hai i.e 100*6 Now bache hue 100 unit mein se 100 unit hai jo 100 tak hii hai means 100*4
 * so here ( 300*13) + ( 200*8) + (100*6) + (100*4) 
 * so 3900+1600+600+400 = 6500 so yahn par hum bottom to top gaye but Normally user Top to bottom dekhte hai
 * so 700 unit mein se hum 400 k upar kitne unit hai yed direct dekhte hai but phir ye pata nhi chalta ki 100 k upar
 * kitni unit hai phir 200 k upar kitni unit hai ye paata nhi chalta isliye bottom to Top jayenge
 * Now program dekhte hai ye alogaraathim solve karenge
 */
let unit = Number(prompt("Enter electricity unit"))// assume user ne 700 diya
let amount1 = 0;// ek amount1 naam ka variaable lelenge ismein hum apna amount stored kar lenge
if(unit>400){
    amount1 = (unit-400)*13//agar 700 unit hai toh idhar (700-400)*13 aayega aur amount1 mein store hoga
    // abb agar upar 300 unit use ho chuki hai 700 mein se toh 700 mein se 400 unit bachi hai 
    // so ye bache hue 400 unit ko humein phir se Reassign karna padega unit mein 
    //so Reassign karne se i.e unit = 400 karne se unit mein 400 save kardo
    unit = 400 // so abb unit mein 400 baacha hoga 
}
/**No hum if{} use karenge Now question aayega ki hum elseif{} kyu use nhi kar sakte because agar humne
 * elseif{} use kiya toh koi ek condition chalega but hum chahte hai ki sab condition chale isliye 
 * humlog if{} use karenge because ye independently chalta hai toh if{} use karne se sab condition chalegi
so kyunki hum bottom to Top chal rhe toh bottom ki humne 400 wali check karli condition phir iske above wali
hai ki 201-400 k bich mein ye condition so abb unit mein 400 se bacha hoga
*/
// unit mein 400 bacha hoga i.e unit = 400
if(unit>200 && unit<= 400){// so 200 se jyada aur 400 se kam kitni unit hai 400 mein se toh 200 unit hai aur ye 200 unit aayegi jab hum 400-200 karenge 
    amount1 += (unit-200) * 8// i.e 1600 aayega amount1 mein i.e (400-200)*8  
    unit = 200 //ye 200 bache hai unit we will check condition (unit>100 && unit<= 200) in next if{}
}
if(unit>100 && unit<= 200){
    //ye amount1 += ka matalb hai amount1 = amount1 + (unit-100)*6 so jao previous amount1 mein (unit-100)*6 ki value add kardenge
    amount1 += (unit-100) * 6;//600 aayega i.e (200-100)*6
    unit = 100
}
amount1 += unit*4;
console.log(amount1);

//problem of INR Denominations
/**
 * Like agar mere pass 4888 Rs hai toh india mein sabse bada Note hai 500 ka toh 4888 k liye 500 ka 9 Note lagega
 * toh 4500 hoga abhi 4888 mein se 388 bacha hai kyunki 500 k 9 note milakar 4500 hua hai so ye 500 k 9 Note honge
 * Now bache hue 388 k liye humein 200 ka 1 note lagega phir 188 k liye 100 ka 1 note lagega phir 88 k note k liye
 * 50 ka 1 Note lagega phir 38 bacha toh ye 38 k liye 20 k 1 note and 10 ka 1 note lagega
 * so problem here is ki user humein ek amount dega aur humein batana hai ki user k amount k liye kitne Notes banega
 * from Descending se lakar Ascending tak means 500 se lekar 1 Rs tak
 * Now agar hum 4823 ko 500 se divide karenge i.e 4823/500 toh isse ye pata chalega ki 500 k 9 Notes nikal rhe hai
 * so 4823/500 = 9 ye batayega ki no of 500 k Notes kitne nikal rhe hai 4823 mein se
 * AND Agar humein ye batana hai ki kitna bacha toh mod i.e % ye kardenge toh malum padega ki kitna bacha
 * so 4823%500 = 323 toh 323 Rs bach rhe hai Now ye 323 mein se 200 k kitne Notes ban rhe hai isliye 323/200 karenge
 * i.e 323/200 = 1 so 1 note banega 200 ka 323 Rs mein aur 323%200 = 123 bachega 
 * phir ye 123/100 = 1 note banega 100 ka and 123%100 = 23 Rs bachega so ye progrmming se dekhenge
 */
let amount2 = 4823;
if(amount2>= 500){
    console.log(amount2/500)//9.646 toh ye decimal mein nhi humein Integer mein chaiye so Math.floor use krenge
    console.log("500 notes :"+ Math.floor(amount2/500))//so 9 aayega
    amount2 = amount2%500 //323 bachega so amount2 mein 323 aayega aur yahi 323 niche k if mein jayega
}
console.log(amount2);
//200 k liye
if(amount2>= 200){
    //console.log(amount2/200)//9.646 toh ye decimal mein nhi humein Integer mein chaiye so Math.floor use krenge
    console.log("200 notes :"+ Math.floor(amount2/200))//so 9 aayega
    amount2 = amount2%200 //123 bachega so amount2 mein 123 aayega aur yahi 123 niche k if mein jayega
}
//100 k liye
if(amount2>= 100){
    //console.log(amount2/100)//9.646 toh ye decimal mein nhi humein Integer mein chaiye so Math.floor use krenge
    console.log("100 notes :"+Math.floor(amount2/100))//so 9 aayega
    amount2 = amount2%100 //23 bachega so amount2 mein 23 aayega aur yahi 23 niche k if mein jayega
}
//50 k liye
if(amount2>= 50){
    //console.log(amount2/50)//9.646 toh ye decimal mein nhi humein Integer mein chaiye so Math.floor use krenge
    console.log("50 notes :"+ Math.floor(amount2/50))//so 9 aayega
    amount2 = amount2%50 //323 bachega so amount2 mein 323 aayega
}
//20 k liye
if(amount2>= 20){
    //console.log(amount2/20)//9.646 toh ye decimal mein nhi humein Integer mein chaiye so Math.floor use krenge
    console.log("20 notes :"+ Math.floor(amount2/20))//so 9 aayega
    amount2 = amount2%20 //323 bachega so amount2 mein 323 aayega
}
// 10 k liye
if(amount2>= 10){
    //console.log(amount2/10)//9.646 toh ye decimal mein nhi humein Integer mein chaiye so Math.floor use krenge
    console.log("10 notes :"+ Math.floor(amount2/10))//so 9 aayega
    amount2 = amount2%10 //323 bachega so amount2 mein 323 aayega 
}
// 5 k liye
if(amount2>= 5){
    //console.log(amount2/5)//9.646 toh ye decimal mein nhi humein Integer mein chaiye so Math.floor use krenge
    console.log("5 notes :"+ Math.floor(amount2/5))//so 9 aayega
    amount2 = amount2%5 //323 bachega so amount2 mein 323 aayega
}
// 2 k liye
if(amount2>= 2){
    //console.log(amount2/2)//9.646 toh ye decimal mein nhi humein Integer mein chaiye so Math.floor use krenge
    console.log("2 notes :"+ Math.floor(amount2/500))//so 9 aayega
    amount2 = amount2%2 //323 bachega so amount2 mein 323 aayega
}
//Now agar 1 Rs amount bacha hai toh hii ye chalega
if( amount2 === 1 ){
    console.log("1 notes :" + amount2)//1 Rs bacha hai tabhi ye chal rha hai
}