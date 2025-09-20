// Loops
/*
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
aise 5 baar ya 5000 baar hum ye code chala sakte hai likh k
but jitni jyada  lines utna bada size file ka i.e Redundancy 
toh agar 1mb file vs 100mb file hoga toh 100mb wala file download karne mein user ko jyada time jayega
so agar 6000 line of code hai toh file size jyada aayega aur file size jyada hua toh user ko time lagega website load
karne mein isse user Experience bad ho jayega toh agar user Expereince bad hogya toh aapke brand ka overall performance
kharab jayega aur isse business band ho sakta hai
toh ye kaafi important ho jata hai ki aap 6000 baar  same code na likhe aap sikh le ek concept uska naam hai Loop
toh Loop ye aapko 3 line mein same code karke dega
for(var i = 1; i<6001; i++){
    console.log("hello") 
}  toh ye 3 line ka code hai but ye 6000 baar chalega so isliye we use Loop
*/
/**
 * uses of Loop
 * toh Loop ka use whatsapp,Instagram,facebook,ecommerce,youTube mein hota hai
 * so jaise  jab hum Whatsapp dekhte hai toh Whatsapp mein jo chat dikh rahi hai toh ye chat Loop k through print
 * hoti hai  matlab chats mein aisa hai ki user different hai but component same hai
 * jaise Amazon,myntra par jaakar hum product dekh rahe hai toh usmein container same hai but product uss container k
 * andar different hai i.e container dabba Repeated hai toh ye bhi Loop hai
 * jaise Whatsapp k status par jayenge toh aap dekhenge ki line se sabke status hai i.e status mein ek photo ek naam 
 * aur kitni time pehle user ne status daala toh aise satatus humein sabke line se dikh rahe hai toh ye line se dikh
 * rahe hai ek hii tarike k bas person contact alag hai so jaise 50 logo k status hai toh 50 container alag se nahi
 * banayenge i.e ek 1 container hai jo 50 baar Repeat hua hai
 * abb instagram par bhi yahi hai ki saare posts ek hii jaise hai bas data alag hai
 * aur facebook par bhi yahi hai ki saare posts  ek jaise hai bas data alag hai aur ecommerce mein bhi wahi hai
 * And youTube par bhi aap dekhoge toh har video ka Thumbnail,channel name, views sab kuch same hii hai youTube par
 * so isliye hum Loop padhte hai because Loop k bina hum Majority of chize nhi bana sakte nhi create kar sakte
 * NOTE -- Loop k alawa bhi Repeated task hoti hai usse hum Recursion bolte hai 
 * i.e Recursion bhi Repeated task karta hai 
 */
/**so we will see the loop i.e for loop, while loop, do-while loop 
 * Now for ka Loop ko hum aise hii nhi chalte humko humesha bataya jata hai ki kya karna hai jaise humein
 * boldiya ki for loop ko 1-22 tak chalao toh humein start pata hai isliye hum for loop mein i ki value 1 se start
 * karengeso for loop mein i ki jagah hum kuch aur bhi le sakte hai jaise i ki jagah chacha bhi likh sakte
 * hai but i is industries standard isliye we use i 
 * so humein 1-22 diya hai i.e humein 1 se start karna hai isliye i ki value 1 lenge
 * but agar 11-22 diya hota toh hum i ki value 11 lete so matlab humein jahan se start karna woh i ki value hogi
 * so syntax is 
 * for(start; end; change;){// so here change matlab hai ki basically kitna change aapko karna hai like i++
 *  this is a syntax of for loop
 * }  
 * NOW for loop ko 1-22 k liye chalayenge
 * for(var i =1; i<23; i++){
 *   console.log("i")//aisa string mein kiye toh i hii print ho jayega 22 baar but humein i nhi i ki value print karani hai
 *   console.log(i)//here i ki value print hogi like 1 2 3 se  22 tak
 * }
*/
/*
for(var i = 23; i<55; i++){
    console.log(i)//toh ye loop 23 se start hoga and 54 tak jayega 
}
//so aap jahan se start ho rhe ho woh value aapki i mein chali jayegi
*/
//now 200 se 101 tak jayenge i.e ulta jayenge
for (var i = 200; i > 99; i--) {// here i>99 means 200>99
    console.log(i)//so  200 se ...100 tak loop jaa rha hai aur print ho rha hai
}
console.log(i) //because of var yahan par 99 print hoga

//Now
/* yeh sab code se chrome hang ho jayega
for(var i = 1; i <= 10;){
    console.log(i)
    //ye code valid hai yahan par infinite times 1 print hoga because i++ nhi hai toh 1 se increase hii nhi hoga
}
for(var i = 1;;){
    console.log(i)
    //ye code valid hai yahan par infinite times 1 print hoga because i++ nhi hai toh 1 se increase hii nhi hoga 
    //and i hii hai toh i ki value i.e 1 hii print hoga infinite times
}

for(;;){
    console.log("hello")
    //ye code valid hai yahan par infinite times hello print hoga 
}
now agar aise bhi code chal sakta hai toh humne i ko declare , initialise, condition  change kare kyu?
toh answer is  ki jo i hai n ye i ek counter variable hai jo bas Loop ko yaad karwa rha hai ki sir aap yahan
se chale the yahan tak jaoge aur iss iss condition par chaloge toh i bas ek counter variable hota hai
so for(;;) loop mein ye 2 ; bhi laga diya n toh bhi for loop valid hai agar inn 2 ; mein se ek bhi ; hata diya
toh for loop Invalid ho jayega 
*/

// problems
/*sum of n natural numbers toh here n ka matlab hai koi number tak jo number humein user dega
i.e 1 se koi number tak jo humein user dega and natural umber is 1 2 3.. and factorial of number */
var pr = prompt("kaha tak add karwaoge ?");
if (pr === null) {
    //means jab prompt ka alert aayega toh uss alert mein hum agar cancel click karenge toh cancel console mein print hoga
    console.log("cancelled");
}
else {
    // var n = Number(prompt(pr)) idhar prompt likhenge to prompt wapas aajayega
    var n = Number(pr)//so pr mein prompt se aane wali value hai iss value ko Number mein convert karenge

    if (isNaN(n)) {
        //agar user ne input mein number ya "12" ki jagah word diya toh woh NaN mein convert hoga which is Invalid 
        console.log("Invalid input")
    }
    else {
        if (n > 0) {// check karenge ki number +ve ho
            //coding for  sum of n natural numbers
            var sum = 0;
            for (var i = 1; i <= n; i++) {
                sum = sum + i;//toh isse baar baar bahar wale var sum ki value change hogi i k saath
            }
            console.log(sum)//so agar user 5 dega toh output mein console mein 15 aayega i.e 1+2+3+4+5= 15 aayega

        }
        else {// 0 ya -ve hua toh ye chalega
            console.log("should be +ve and more than 0")
        }
    }
} // so here humne har cases ko handle kiya hai

//now we will see the factorial of number like user ne 5 number diya so 5 ka factorial hoga 5*4*3*2*1= 120 aayega
/// so here same upar wale ki tarah code aayega bas  for loop mein logic * use karenge i.e fact = fact * i
//so problem of factorial of a number
var pro = prompt("kaha tak factorial karwaoge ?");
if (pro === null) {
    //means jab prompt ka alert aayega toh uss alert mein hum agar cancel click karenge toh cancel console mein print hoga
    console.log("cancelled");
}
else {
    // var n = Number(prompt(pr)) idhar prompt likhenge to prompt wapas aajayega
    var m = Number(pro)//so pr mein prompt se aane wali value hai iss value ko Number mein convert karenge

    if (isNaN(m)) {
        //agar user ne input mein number ya "12" ki jagah word diya toh woh NaN mein convert hoga which is Invalid 
        console.log("Invalid input")
    }
    else {
        if (m > 0) {// check karenge ki number +ve ho
            //coding for  sum of n natural numbers
            var fact = 1;//idhar fact min 0 store karenge toh answer 0 hii aayega because * kar rhe hai isliye 1
            for (var i = 1; i <= m; i++) {
                fact = fact * i;//toh isse baar baar bahar wale var fact ki value change hogi i k saath
            }
            console.log(fact)//so agar user 5 dega toh output mein console mein 15 aayega i.e 1*2*3*4*5= 120 aayega

        }
        else {// 0 ya -ve hua toh ye chalega
            console.log("should be +ve and more than 0")
        }
    }
}
// problem of factors of number 
//suppose 12 number hai toh factor matlab 12 ko kitne number divide kar sakte hai ismein 12 bhi aata hai ki 12 apne aap ko divide kar paata hai
var pr = prompt("kaha tak factorial chaiye?")

if (pr === null) {
    console.log("cancelled")
}
else {
    var f = Number(pr)

    if (isNaN(f)) {
        console.log("Incvcalid")
    }
    else {
        if (f > 0) {
            //code of factors Note koi bhi number ho uss number ko woh number khud and 1 jarur divide karega
            //note jaise 7 number hai toh 7 ko divide karne wala number kabhi 7 k upar nhi ho sakta basic maths hai
            // toh isliye loop 1 se start hoga aur woh number tak chalega jo user dega i.e prompt se dega
            for (var i = 1; i <= Math.floor(f / 2); i++) {
                //so factor matlab hota hai completely divisible by matlab Remainder should be zero
                if (f % i === 0) {
                    console.log(i)//means jo bhi i ki current value hai woh f ko poora divide karti hai
                    //here i woh saare number hai jo f ko divide kar rhe hai
                    //here f is jo user ne prompt se value diya
                    /*Note thory hai ki suppose 36 hai toh 36 ka half kardo to 18 hai and 18 k baad koi bhi aisa number
                    nhi hai jo 36 ko divide karde means 18 k baad sirf 36 khud hii hai jo 36 ko divide kar sakta hai 
                    but 36 ko chood kar koi bhi aisa number nhi hai jo 36 ko divide kar sake 18 k baad
                    now supposo3 24 hai number toh 24 ka half 12 karo toh 12 k baad koi bhi aisa numbert nhi hai 
                    jo 24 ko divide kar sakein aur ye Rule odd number par bhi lagta hai i.e agar 9 no lenge so
                    4.5 k baad koi bhi aisa number nhi hai jo 9 ko divide kar sake
                    so koi bhi number aap utha loo 2 digit ka 3 digit ka  4 digit ka aur uss number ka Half karlo
                    aap toh abb jo Half hogya hai toh iss Half k upar ka koi number divide nhi kar sakta
                    toh mein loop ko Hlaf tak hii chala lunga i.e i<= f/2 means Half tak chalyenge aur Math.floor
                    bhi use kar lenge because suppose koi decimal number aaya toh usse handle karne k liye
                    i.e i<=Math.floor(f/2) aisa kar lenge */
                }
            }
            console.log(f)
            //idhar jo bhi f hai suppose f 36 hai toh ye last mein print hoga because ye toh khud ko divide kar hii raha hai
        }
        else {
            console.log("should be +ve and more than 0")
        }
    }
}

// Now we will see the problem of prime number  
//so prime number woh number hota hai jo number khud se divisible ho bas aur 1 se divisible ho bas
//means 17 number ye prime number hai because 17 ye khud se and 1 se divide hota hai bas aur kisi se 17 divide nhi hota
// so like 7 bhi prime number hai and 17 bhi prime number hai 
// but 1 ko prime number nhi bolte aisa kyu search it
var pr = prompt("kaha tak prime  chaiye?")

if (pr === null) {
    console.log("cancelled")
}
else {
    var p = Number(pr)

    if (isNaN(p)) {
        console.log("Incvcalid")
    }
    else {
        if (p > 0) {
            /**here logic is to check prime number hai ya nhi toh suppose hum ek loop chalu start karenge 2 se
             * toh user jo bhi number dega f mein hum usko half kar denge i.e f/2 toh jo bhi user ka number 
             * half hua hai i.e f/2 toh hum apna loop 2 se chalayenge user k number k half tak means f/2 tak
             * i.e Loop chalega from 2 to f/2 tak where f is number jo user ne input mein diya hai
             * Now abb jo bhi user ka main number hai i.e half wala nhi means f/2 ye half nhi main 
             * number jo user ne input mein diya tha i.e f main number ye agar kisi se bhi divide hogya
             * i.e main number f ye agar kisi se bhi divide hogya in between 2 to f/2 k toh means ye prime number
             * nhi hai toh hum primeHai = false kar denge
             */
            var primeHai = true;
            for(var i = 2; i<=Math.floor(p/2); i++){
                if(p%i === 0){
                    primeHai = false;
                    break;
                    /* break ka matlab hai ki abb aage Loop mat chalao kyunki humara number f already divide 
                    hogya abb aage check karne ki jarurat hii nhi hai kyunki abb humein pata chal gya hai 
                    ki f is not a prime number because ye divide hogya  */
                }
            }
            console.log(primeHai) //so agar prime number hoga toh true print hoga
        }
        else {
            console.log("should be +ve and more than 0")
        }
    }
}
//Note sirf 2 ek only even prime number hota hai means 2 hii ekk Even number hai jo ki prime hai
//baki sab odd number hii prime number hote hai jaise 3 7 11 etc
// but 1 is not a prime number search the reason
//now prime number ko function ki help se dekhenge
function isPrime(t){
    if(t<=1) return false;
    if(t==2) return true;
    if(t%2==0) return false
    for(let i=3; i <= Math.floor(Math.sqrt(t)); i+=2){
        if(t%i == 0) return false
    }
    return true
}

console.log(isPrime(9))// so false aayega because 9 is not a prime number 3 k table mein aata hai
/**Remember pattern of fo Loop
 * for(start; end; change){
 *   ye for loop ka pattern hai
 * }
 */
//we will see the break and continue
/**
 * Break ye Loop ko rokta hai stop karta hai wahin ruk jayega jahan par aap bologe break
 * and continue ye current Iteration ko skip kar deta hai so basically jo bhi value chal rhi hogi i ki uss
 * iteration ko skip karke agle par chal jayega 
 * aisa by the way Iteration matlab ek baar Loop chalne Iteration bolte hai 
 */
for(var i = 1; i<23; i++){
    if(i === 11) continue; // here ye 11 ko skip karke sidha 12 par chala jayega i.e 11 k iteration ko skip kar dega 
    else console.log(i)
}
for(var i = 1; i<20; i++){
    if(i === 11) break; //although humne bola hai 1 se 20 tak jane ko but break ki wajah se 1 to 10 tak hii print karega 
    else console.log(i)
}

// we will see the while Loop so pattern of while Loop is->
/**pattern of while Loop is->
 * start;
 * while( end ){
 *  //code aayega
 *  //change aayega
 * }
 */
var i = 1 // start wala part hai
while(i<23){
    console.log(i); //so here 1 to 22 tak print hoga
    i++; //change walaa part hai
}
//so matlaab jo kaam for loop karta hai woh same kaam while Loop bhi kar sakta hai
/**toh ye for and while Loop mein farak kya hai jo kaam for kar rha hai wahi kaam while kar rha hai
 * but kuch situation mein while Loop ka use jyada hota hai jaise maan lijiye mummy ne list banakar di 10 items
 * ki aur boli ye 10 item aapko groceries shop se leke aani hai toh hum jayenge exact 10 item kharid lenge
 * but agar ulte mein mummy ne 5000 Rs de k bole ki jab tak paise khatam nhi ho jate tab tak aapko shooping 
 * karni hai toh jo pehle wala tha 10 item kharidna tha ye for Loop tha toh for Loop ye bolta hai ki agar
 * humein iterations pata hai ki kitni baar chalna hai tab hum wahan for loop ka use karenge 
 * aur jab muje pata hai ki ek condition k valid tak chalna hai Loop toh yahan hum while Loop ka use karenge
 * 
 */

// var answer = prompt("kuch bhi dedo(exit for close)")
//jab tak user exit nhi kar deta tab tak humein prompt karte rahna hai

//muje chaiye ki jab tak user se exit naa ayye tab tak Loop chale toh iske use karenge while Loop
//while(answer !== "exit"){// agar user ne input prompt mein "exit" type kiya toh while Loop nhi chalega
  //  prompt("kuch bhi dedo(exit for close)")
    //toh jab aisi situation ho jahan pe humein bas ye pata hai ki stop rukna kab hai toh while Loop ka use krenge
//}
//toh while Loop mein bas ye batao aap ki kab rukna hai
//while Loop mein ye mat batao ki kahan se kahan tak chalna hai bas ye batao ki kab Rukna hai tab while Loop chalega
//problem of sum of digit using while Loop
//Note- kisi bhi number ko mod %10 karne par aakhiri digit milti hai like 234%10 = 4 i.e 4 mila mode %10 karne par
//Note - aur agar kisi bhi number k aakhiri git ko decimal . mein lana hai so 3894/10 = 389.4 dega divide by 10 karne se
//so agar 3894/10= 389.4 but aisa karenge Math.floor(3894/10) = 389 dega means 389.4 se .4 ye math.floor hata dega
/*so har baar hum divide kare 10 se i.e /10 se aur math.floor mein daal de toh ek digit hatt jayegi 
aur aakhiri digit nikalne ka tarika %10 hai
*/
//problem of sum of digit using while Loop
// so 1234 inko add karna hai aur agar ispar %10 marenge toh last digit 4 mil jayega
//so kyunki 1234 mein se first digit i.e 1 ko nikalna mushkil hai isliye hum last digit ko nikalenge i.e 4 ko using %10
//i.e 1234%10 -> 4 and 123%10 -> 3 milega and 12%10 -> 2 and 1/10-> 0
/**so
 * 1234%10 -> 4
 * 1234/10 -> 123%10 -> 3
 * 123/10 -> 12%10 -> 2
 * 12/10 -> 1%10 -> 1
 * 1/10 ->
 */
//problem of sum of digit using while Loop
 var pr = prompt("kaha tak sum of digit number  chaiye?")

 if (pr === null) {
     console.log("cancelled")
 }
 else {
     var k = Number(pr)
 
     if (isNaN(k)) {
         console.log("Incvcalid")
     }
     else {
         if (k > 0) {
            var sum1 = 0;
            while(k>0){
                var rem = k%10;
                sum1 = sum1 + rem
                k = Math.floor(k/10);
            }
            console.log((sum1))
             
             
         }
         else {
             console.log("should be +ve and more than 0")
         }
     }
     // thoda error hai solve karna hai ismein
 }

 //problem of Reverse of Number
 /**Logic iska aise bhi jata hai suppose we have to Reverse a 123 then
  * 3*10 = 30-> 30+2 -> 32*10-> 320-> 320+1 = 321 diya so ye 123 ka Reverse hogya
  */
  var pr = prompt("kaha tak Reverse number   chaiye?")

  if (pr === null) {
      console.log("cancelled")
  }
  else {
      var r = Number(pr)
  
      if (isNaN(r)) {
          console.log("Incvcalid")
      }
      else {
          if (r > 0) {//suppose p is 1234 hai
            var rev = 0;
            while(r>0){
                var rem = r%10;// so rem mein 1234 ka sirf 4 aagya hoga because of %10
                rev = rev*10 + rem; //yeh Reverse ki equation hoti hai isko ratt lo
                r = Math.floor(r/10)//here 1234 se 123.4 hua phir math.floor ki wajah se 123 hua so p mein 123 hoga
            }
            console.log(rev)
              
          }
          else {
              console.log("should be +ve and more than 0")
          }
      }
  }

  //problem of strong number so strong number kya hai so suppose there is a number is 145
  /*toh 145-> 1! + 4! + 5! toh 145 k teeno number k alag alag factorial ko add karke agar exact 145 aaya toh
   strong number hai
*/
var pr = prompt("kaha tak strong number chaiye?")

 if (pr === null) {
     console.log("cancelled")
 }
 else {
     var c = Number(pr)
 
     if (isNaN(c)) {
         console.log("Incvcalid")
     }
     else {
         if (c > 0) {
            var sum = 0;
            var copy = c;
            while(c>0){
                var rem = c%10;
                var fact = 1;
                for(var i = 1; i<= rem; i++){
                    fact = fact*i
                }
                sum = sum + fact;
                c = Math.floor(c/10);
            }
            if(copy ===  sum){
                console.log("strong")
            }
            else{
                console.log("Not strong")
            }
            // console.log(sum)
             
         }
         else {
             console.log("should be +ve and more than 0")
         }
     }
 }

 //Now we will see the do while loop
 /**pattern of writing do while->
  * do{
  * idhar andar jo aaye woh likh dijiye toh pehle ye code chal jayega means pehle do chal jayega
  * without asking or checking any condition pehle do chal jayega
  * console.log("hey") // ye atleast ek baar toh pakka chalega chaye condition kaisa bhi ho
  * }
  * while(12>13) abb ye condition agar sahi hoti toh "hey" baar baar print hota 
  */
 var i= 1;
 do{
    console.log("hey")//condition kuch bhi hoo ye atleasr ek baar toh print hoga
    i++;
 }
 while(i<10);//abb kyunki condition Right hai toh "hey" 9 baar print hoga
 /**so overall Loop 2 type k hote hai ek hota hai entry control Loop aur doosra hota hai Exit control Loop
  * so Entry control loop hai for and while Loop so Entry control naam se samaj mein aaraha hai ki task
  * execute karwane se pehle  aap pe control kara jaa raha hai condition puchi jaa rahi hai 
  * aur ye do while Loop Exit control loop hai means jab aap ek baaar task karwa doge jab Nikalte waqt 
  * aap se task ki condition puchi  means ye do mein task pehle kar deta hai phir check karta hai ki bhai
  * sahi bhi tha ya nhi 
  */
 /**problems dekhenge-
  * Repeat hello using do while loop -> ye khud se karne hai
  * Guess the number-> so hum computer ko ek Range denge ki kis number se kis number k bich mein computer
  * ek number pick kar lega khud se i.e computer kuch number khud se pick karega ek range of number k bich
  * mein se aur humein i.e users ko ye Guess karna hai ki computer ne kaun sa number pick kiya hai
  * abb agar users ne number kuch aisa guess kiya liya  jo ki computer k pick up number se chota hai
  * i.e small hai toh computer bolega too Low try again and agar high choose karenge toh computer bolega
  * too high try again
  */
 //let random = Math.random()*100 //isse 0 and 100 nhi aayega means range is between 1 t0 9
 //but humein 0 and 100 bhi chaiye isliye Math.random()*100 + 1 aisa karenge
 //let random = Math.random()*100+1   //toh abb range is 0 to 100 but ismein decimal mein aayega 
//toh Decimal mein na aaye isliye we will us Math.floor
let random = Math.floor(Math.random()*100+1)
//console.log(random);// so ye ek baar mein jo computer hai ye ek Random number de dega humein 1 se 100 k range mein
//abb muje user ko guess karna hai woh number 
let guess = -1//ye just initialise karne k liye actual mein guess number hum Users se while loop k andar lenge
//so hum while loop isliye lenge because muje ye pata nhi hai ki ye kab tak barabar hone wala hai
while(guess !== random){//means jaise ye guess == random hogya waise hii ye loop stop ho jayega 
    /**guess is jo number user guess karega and random means jo number computer pick karega
     * to hum jo value lenge user se woh ye loop k andar lenge so let guess = 0 ye toh bas initialise karne
     * k liye hai toh loop k andar user se value lenge abb loop k andar value isliye lenge because  baar baar
     * value leni hai humein user se
     */
    guess = Number(prompt("Guess the number"))
    if(isNaN(guess) || guess<1 || guess>100){//ye teeno mein se user ne kuch bhi input diya so try again
        console.log("try again between 1 se 100");
        continue//ye jaruri hai
    }
    if(guess> random){//means User ne computer k pick kiye number se high number guess karliya
       console.log("too high , try again")
    }else if(guess < random){
        console.log("too low , try again")
    }else{
        console.log("Congrats and number was ", guess)
    }
}
//problem dekhenge sasta calculator khud se