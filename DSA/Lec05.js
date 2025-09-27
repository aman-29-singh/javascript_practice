//we will see the array
/**Now javascript mein [] square bracket lagana hii array hai aur [] square bracket laga dena hii array 
 * hai Note jaavascript mein sirf aisa kar sakte hai ki [1,2,3,"aman", true] aise different types of 
 * values ko array mein store kar sakte hai sirf in javascript but in java aur c++ mein array mein
 * sirf ek dataType ki value ko hii store kar sakte hai
 * so javascript mein array hoga bohat saari values ka array i.e [1,2,3,"aman",{object}] aise hoga array
 * in javascripti.e collection of values hota haai array so concept bohat simple hai array ka its basically
 * ek se jyada values ek saath agar aajaye usse hum array kehte hai
 */
let arr = [];// it means ye ek array ban chuka hai but iske andar abhi koi element nhi hai
//so abb iss arr array mein hum dekhenge ki value kaise rakh sakte hai aur dekhenge ki differnt types of value kaise aarahai hai
arr.push(100); // so arr array k andar humne 100 value push kardi means rakh di store kar di
arr.push(20);
arr.push(30);
arr.push(false);
arr.push("aman");
console.log(arr);//so [100,20,30,false,"aman"] aisa aayega 
/*so jaavascript mein aisa hai ki yahan par ek array k andar multiple value toh rakhi jati hai aur woh
different dataType ki value bhi ho sakti hai but humein Data Structure k perspective  array k andar different 
DataTypes ki values ko nhi Rakhna hai aur aisa Rakha bhi nhi jata aap agar ek Array bana raahe ho ek collection
hai aapke pass toh wahan par aap multiple values Rakhoge matlab collection of elements Rakhoge par unn elements
ka DataType same hona chaiye*/
/**suppose mere pass aisa array hai [100,200,300,400] toh muje ismein se 1 index ki value nikalni hai 
 * so hum aise karenge arr[1] isse 1 index ki value nikalenge i.e console.log(arr[1]) toh ye 200 dega
 */
let arr1 = []
arr1.push(100); // so arr array k andar humne 100 value push kardi means rakh di store kar di
arr1.push(10);
arr1.push(20);
console.log(arr1) //  [100, 10, 20] aise aayega 
//abb here if we want to access to access 1 index then cconsole.log(arr1[1]) aise karenge toh 10 print hoga
console.log(arr1[1])// 10 aayega because 1 index par 10 hai
/**now ye Index kya hai Toh programming Languges mein kya hota hai ki humare Array k elements ki indexing 
 * hoti hai aur indexing start hoti hai 0 se jaise humari normal world mein position hoti hai jaise 
 * 1st position 2nd postion waise Language mein kya hoti hai ki yahan par postion nhi hoti yahan par 
 * indexing hoti hai so [100,10,20,30] yhahan par 0 index par 100 value hai aur 1 index par 10 value hai
 * it means jab hum bolte hai arr1[0] iska matlab hota hai ki iss arr1 Array k andar 0 index par ek container
 * pada hua hai ek chota sa container jo humein ek value lakar de raha hai uss container k 
 * so hum ye bol sakte hai ki iss Array [100,10,20,30] k anadar 4 containers hai 
 * i.e arr1[0],arr1[1],arr1[2],arr1[3] ye 4 container hai jahan par kuch values rakhe hai toh 
 * agar maine bola ki arr1[0]  lakar do toh ye kya dega 0th container ki value lakar dega 
 * let a =20;
 * console.log(a) so here a kya hai so a ek variable ek container hai thik hai toh is a k pass ek value thi
 * toh maine bola uss container a ki value lakar dedo so aise hii humne arr1[0] mein 0 index par ek container
 * rakha hai jiski kuch value hai  toh woh value lakar dedo so 100 value lakar dedega
 * Note Array ko Represent kara jata hai [] bracket mein aur Array mein push karna matlab hai ki mein array
 * mein element ko insert kara raha hu agar mein pop kar rha hoon jaise arr1.pop() so idhar pop mein humein
 * kuch value dene ki jarurat nhi padti so console.log(arr1.pop()) karenge toh [100,10,20] aayega means
 * 30 pop hogya 
 * Now jab hum kisi particular index k balbute element ko Get kar sakte hai toh ye bhi toh ho sakta hai
 * ki mein kisi particular index k balbutte element ko store kara du Array mein    
 */
let arr2 = []//ye dynamic Array hai 
/*so Dynamic array matlab hai ki iss Array ki length kuch define nhi hai i.e jaise agar hum java c++ mein fix
size ki array hoti hai jahan par humne size define kar diya abb utne length ka hii array jaise maine 10 length ki
array bola toh 10 boxes hii honge means 11wa box nhi milega wahan par means indexes meilegi wahan par from 0 to 9
agar 10 length ki array hai toh*/
//arr2 mein index k basis par element ko store karayenge
arr2[0] = 1000;
arr2[1] = 2000;
arr2[2] = 3000;
arr2[7] = 150;
console.log(arr2) //  [1000, 2000, 3000, empty × 4, 150] aisa aayega because of arr2[7] diya aur Dynamic array hai
/**so humne  0,1,2 index par element ko rakha phir sidha 7th index par element ko rakha so bich k 3,4,5,6 ye index 
 * empty hai so yaahan par empty value hai so empty khud mein ek value hoti hai so 3,4,5,6 index par kuch nhi hai 
 * toh empty aayega 
 */
//Now 
let arr3 = new Array(3)//toh kya yeh fixed length size ki array ban gyi kyunki humne isse sizr Array(3) aise dediya
//so javascript mein fix jaisa kuch hota hii nhi hai fixed array yahan par kuch hai nhi yahan par sabkuch Dyanmic hai
arr3[0] = 10;
arr3[1] = 20;
arr3[2] = 50;
arr3[3] = 700;
//console.log(arr3)// [10, 20, 50, 700] print hoga
//[10, 20, 50, 700] aise 4 length ka print hoga although 3 length diya hai upar Array(3) aise but javascript is Dynamic
//so yahan par kuch bhi fixed size ka nhi hai  yahan par Dynamic ho saktaa hai
arr3[10] = 150;
console.log(arr3) //[10, 20, 50, 700, empty × 6, 150] aise print hoga because 4,5,6,7,8,9 index is empty of arr3
//so isse ye prove hota hai ki javascript mein kuch bhi fix size ka nhi hota ye humara Dynamic hota hai
//so achi practice Data structure mein ki humesha Array mein index se hii value ko assign karna push ko use mat karna
let arr4 = new Array(3);
arr4.push(10)
console.log(arr4)/*[empty × 3, 10] ais aayega because humne upar 3 length ki Array boli thi aur humne just uske baad 
push kar diya toh hua kya ki shuruwat k 3 spaces Empty reh gye aur aapka jo element 10 aaraha hai ye 10th index par
aaraha hai toh agar humne  upar Array(3) karke aise 3 length diya hai upar by default aur hum directly push karenge
toh shuruwat k 3 index matlab 0,1,2 ko skip karke 3rd index par elementt aayegi jo ki 10 element value hai   */

//Now we will see the  archiecture of Array
/**Defination of Array- so Array is a linear Data structure which stores multiple values in a continous manner
 * so Array ek pehla Data structure hota hai aur bhi Data structure hote hai but hum abhi pehle padh rahe hai
 * so Array ek linear Data structure hota hai jo ki multiple  value ko store karta but in  a contnious manner
 * so linear  ka matlab hota hai ek k baad ek so jaise array ek linear Data structure hai, linked list ek linear
 * Data structure hai, stack hai Queue hai ye saare k saare linear hai  and if we  talking about tree 
 * toh tree mein suppose we have A Node toh A Node se mein B Node ki yahan bhi jaa sakta hu aur C Node k yahan bhi
 * jaa sakta hoon that is called non-linear Data structure jaise ek Graph hai humara toh Graph ek non-linear
 * Data structure hai, Heap ek non-linear Data structure hai so jo ek k baad ek jaa sakte hai that is called linear
 * Data structure
 * abb now what is Continous -> Array ye memory mein continous hii element ko Rakhta hai matlab pehle address mein 
 * 10 value rakha toh woh pehle address k just next doosre address mein 20 value rakh do phir next address mein 30 value rakho
 * matlab lagatar rakhna 
 * Now jaise linked list ek linear Data structure toh hai But linked list ye ek non-contnious hai matlab 
 * ho sakta hai ki 10 value kisi particular address par suppose 1001 address par rakha ho memory mein aur phir
 * 20 value kahin aur location par memory k rakha ho jaise 1050 address par 20 value rakhi ho aur 30 vaalue
 * ye memory k 2030 address location par rakha hai so beshak ye linear data structure hai means ek k baad ek hii
 * value aaraha hai but ye memory k kisi lagatar locations per nhi rakha hai ye kya hai memory k different different
 * location par Rakha hai so linked list ye linear hai but ye non-continous hai 
 */
/**so Array ye ek linear Data structure hai jo ki multiple values ko store karta hai but in a continous manner  */

/**Now hum dekhenge ki kaise hum prompt k saath hum kaise ek value lenge aur kaise woh value ko array mein put karenge
 * toh agar humein 5 values prompt se leni ho aur Array mein put karni ho toh kaise karenge
 * so agar humein 5 values leni hai toh sabse pehle hum ek loop banayenge jo ki 5 baar chalegi 
 * for(   ){
 * prompt-- toh 5 baar prompt aayega toh 5 baar ek screen aayegi prompt ki jahan par hum kuch likh sakte hai
 * aur 5 times hii prompt uski value return karega abb jo bhi return karega maan lete hai ans variable mein aaya
 * toh ans variable mein pehli baar prompt ka answer aaya,2ri baar answer aaya phir 3ri,4thi, 5vi baar
 * aayega toh basically ans variable mein humare pass 5 answer aayenge so by default hum ek blank array [] bana
 * kar rakhenge aur hum iss blank array [] mein  jab pehli baar ans ki value aayegi toh uss value ko [] balnk 
 * array mein store kar denge phir agli baar jab prompt se value aayegi usko ans mein rakhenge phir ans variable
 * se [] array mein store kar denge toh aise hum 5 baar karenge 
 * so basically you see ki baar baar for ka loop chalega baar baar prompt chalega toh baar baar ans aayega 
 * aur baar baar ans variable mein se [] array mein hum prompt kivalue store karenge through ans variable
 * so niche hum iska coding dekhenge 
 * }
 */
/**
 * Toh abb humein dekhna hai ki hum jo hai value Array mein ek prompt se kaise lete hai kyunki abhi tak 
 * hum kya karte the ki humm Array mein hard coded value lete the means kaisa
 * let arrr = = [];
 * arrr[0] = 100; //aise hard coded value Array mein lete the 
 */


//Now muje prompt se value leni hai array mein
/*let arrr = [];
arrr[0] = Number(prompt("Enter a value "))
console.log(arrr)//so array mein ek value aarahi jisko humne prompt dwara liya 
*/

let arrr = new Array(5);
/*arrr[0] = Number(prompt("Enter a value "))
arrr[1] = Number(prompt("Enter a value "))
arrr[2] = Number(prompt("Enter a value "))
arrr[3] = Number(prompt("Enter a value "))
arrr[4] = Number(prompt("Enter a value "))
console.log(arrr); */
/**toh ismein problem hai ki maan lo abhi 5 length ka array hai toh humne 5baar aisa karke likh diya
 * abb mann lo ek industry mein 10,000 length ka Array hai wahan par humein value leni hai prompt se toh hum 
 * aise nhi lenge kyuki ye bohaat kharab tarika haai Repeated Task hum kar rhe hai kyunki idhar kaam poora same ho 
 * rha hai bas index change ho rha hai toh humein pata  hai ki Repeated Task ko via Loop Execute karate hai
 * toh intituation hai ki change bas ho  rhaa hai ek index toh mein kya bolunga ki ek variable lelo ek counter
 * lelo jo ki bas index badle aur muje kya kare baar baar value  ko accept karwa le mere  
 */
for(let i=0; i< arrr.length; i++){
    /*yahan pe Array(5) 5 length ka liye isliye 0-4 index tak jayega isliye i<arrr.length i.e i<5 so o to 4 index
     tak jayega means total length is 5 jo upar Array(5) ki length hai */
    arrr[i] = Number(prompt("Enter a value"))
}
console.log(arrr)
//so this how we take value in array via prompt so ye ek tarika  hai ki hum multiple values prompt se kaise le 

/**ek concept dekhenge ki humein ek space  chaiye jahan par hum kachra jaama karte rahe aur woh space Loop k 
 * bahaar hona chaiye abb kyu Loop k bahar hona chaiye kyunki agar woh space Loop k andar hoga toh jab baar baar 
 * Loop chalega toh woh space wapas se khali ho  jayega toh hum space ko Loop k bahar bante hai toh abb space ko
 * Loop se bahar bana diya thik hai bana diya toh hum har baar ek ek element ko uthate haiaur uss bahar k space mein 
 * daalte rehte hai toh jo pichla kachra tha woh toh uss bahar k space mein rakhenge hii rakhange phir uske top pe
 * ek kachra aur daalenge so concept in code is look like--
 * sum = 0;
 * for(..){
 * sum = sum + naya kachra //so pichle kachre means sum mein naya kachra add kar diya i.e sum = sum + naya kachra
 * aur phir wapis jo main box hai i.e sum ismein save kar diya so equation is box = box + naya kachra
 * so ye sum variable ye Loop k bahar hona bohat jaruri hai aur agar ye Loop k bahar nahi kiya aapne aur Galti
 * se iss sum variable ko Loop k andar daal diya toh har baar jab Loop chalega toh jo aapka pichla kachra tha woh
 * gayab ho jayega kyu kyunki humne kachra = 0 kar diya hai
 * so abb isko code mein samajte hai ache se niche
 * }
 */
//iss concept mein Question aisa abhi aata hai ki sum of n element kaise karte hai in the Array
//matlab Array k bohat saare element hai jisko humein add karnaa hai means sum of n element in array
let ary = [10,20,30,40,50];//so hum ek ek element par traaverse karke jayenge aur humare elements ko lekar aakar add krenge
//yahan par hum index pe jaakar hum value ko pick karke add karwayenge toh eventually index par jana hii padega
let sum = 0; //means accumulaation k liye ek variable chaiye hoga i.e bahar kaa space concept se dekhe toh 
for(let i=0; i< arr.length; i++){
    sum = sum + ary[i];//means poorane previous sum ko add karwaana padega aur banega sum
}
console.log(sum) //so sum ki value total aarahi hogi jitni bhi hogi means 150 aarahi hogi

//problem is find maximum element in Array
/**Toh humare pass ek Array uss array mein bohat saare element hai toh hum unn array k elements mein se pehla
 * element ko maximum maan lenge aur phir doosre aur pehle element ko compare karayenge ki kaun sa elemnt bada hai
 * toh jo number bada hai usse hum bada maan lenge phir teesre 3rd element se compare karayenge aur aise hii har 
 * array k element se compare karake finally maximum number nikalenge
 * so below niche code dekhenge
   */
  let arry = [10,2,78,100,4];
  /**now agar hum kisi bhi paltform par agar code karte hai toh jaise leetcode,hackerRank toh humein Array ka 
   * Data nhi dikhaya jata toh muje array ka data nhi dikh raha toh maine maan liya ki Array ka jo mera pehla 
   * element hai wahi maximum element hai means let max = arry[0]; phir main arry[1] k 1 index se element ko pick 
   * karunga aur compare karunga max se aur jo bada hoga usko max se update kar dunga
   */
  let max = arry[0];
  for(let i=1; i< arry.length; i++){
    if(max < arry[i]){
        max = arry[i];
    }
  }
  console.log(max)// so 100 aayega
//now second max element samjte in Array 
/**
 * process wahi hai ki hum shurwat k 2 elements ko compare karenge ki kaun sa element bada hai toh jo element
 * badaa hai usko first 1st variable mein raakh do and jo chota hai usko second 2nd variable mein rakh do phir apna
 * Loop 3rd element se chalu kariye  and 3rd element ko compare kariye kya woh 1st variable k element se bada
 * hai aur agar woh 3rd element jo hai woh 1st element se bada hai toh humein sabse bada element mil gya hai
 * toh woh 3rd element ko 1st variable k andar rakh doaur jo 1st variable ka ka element hoga usse 2nd variable
 * k andar rakh doo obivously kyunki woh second bada hoaga means second max hoga now agle 4th element of array par 
 * jao aur wahi process karte raho jab tak aap Array k saare element par chale na jao toh jab aapka Array complete
 * ho jayega toh jo 2nd variable ka element hoga woh 2nd maximum element of Array hoag and 1st variable ka element 
 * toh maximum elemnt of array hoga so now we will see in code 
 */
let arrry = [10,30,56,46,29,64,49,60];
//Intution hai ki 2nd max tabhi possible hai jab hum max pata ho toh main ek max and 2nd max maintain krke chalunga
let maxx = Math.max(arrry[0], arrr[1])//i.e shurwat k 2 element of array mein se jo maximum hoga usse max mein store krenge
let sMax = Math.min(arrry[0], arrr[1])//initially 2 element mein se jo minimum element hoga usse sMax mein store krenge
//now abb yahan se comparison start hoga 2nd index se means 3rd element of Array se
for(let i=2; i< arrry.length; i++){//traversing of array starts from i=2 matlab 3rd element of Array se
    if(arrry[i]> maxx){//means 3rd element of array se agar max se jo element bhi bada hoga woh max ban jayega
        sMax = maxx //pehle isko second max ko update  karenge taki humari max ki value lost na ho  
        maxx = arrry[i]
    }/*2nd max mera tab update ho rha haai jab mera current element maxx se bada mile jo ki nhi mila
    kyunki maxx mein hai 56  aur next element hai 43 toh nahi mera maxx update hua aur nahi mera sMax
    update hone diya but kayde se usko update hona chaiye isliye we will use elseif{}  */
    else if(arrry[i] > sMax && maxx != arrry[i]){//maxx != arrry[i] agar current element arrry[i] and next element same hua isliye 
        /**toh agar woh element maan liya maxx se bade nhi hai but agar ho sakta hai woh jo current element hai
         * woh meri second max means sMax se badi hoo so sMax = arrry[i]
         */
        sMax = arrry[i]
    }
}
console.log(sMax);//so 60 aayega it is second maximum element of arrry

//now problem is second minimum of Array
//now Reverse the array padhna hai iska padhana k 2 tarike hai so 1st hai using extra space - but its not good way
/**so hum ek Loop chalyenge jo Array k last element se chalega means Loop ye Array k Last element ko
 * uthayega aur sidha leke jayega New space k shuruwat meinmeans Array k last element ko uthayega aur new space
 * k shuruwat mein Rakhega phir Array k 2nd last element ko uthayega aur new space k second position par rakhega
 * phir again wahi array k last element tak chalega  so new space mein Array k reverse element aajayenge
 * abb isko code mein dekhte hai- 
 */
//Reverse the Array with extra space matlab hai ki jitne length ka Array hai utne hii length ka new Array bana lo
let ar = [10, 20, 30, 40, 50];
let temp = new Array(ar.length)//i.e Array ar ki jo bhi length thi utne hii length ka naya Array banalo i.e temp
//now intituation hai ki hum original Array i.e ar se last element pick karenge but temp k shuruwat mein Rakhnaa hai
//now last index kya hoti hai so humesha last index ye length se 1 less tak hoti hai
//i.e agar 5 length ka Array hai toh last element 4th index par hoga matlab ar.length-1 se start karenge Loop
//aur temp array ko j index se Represent karenge toh ye temp array mein shuruwat j=0 se element rakhange
//aur temp array ye shurwat j=0 se loop chalu karenge aur original Array ar ye last element se Loop start karenge
let j = 0;//ye temp Array ki index j ko 0 se start karenge so intial value of j=0
for(let i = ar.length-1; i>=0; i--){
    temp[j] = ar[i]
    /*means temp k array mein shurwat 0 index se hoga aur ismein original array ar ki last element jo ki ar[i] se
    Represent ho rahi hai iss Loop mein  so temp array k andar ye original array ki last element se loop chalega 
     aur iterate hoga i-- se means jab tak i=0 nhi hota tab tak iterate hoga aur ek ek karke element insert 
     karega inside a temp array aur ye temp array start hoga from 0 index means shuruwat se i.e j=0 se hogi
     aur ye temp Array iterate hogi via j++*/
     j++;
}
console.log(temp); //so aise [50, 40, 30, 20, 10] Reverse hogya using extra space i.e temp Array
//so ye ist approach tha to Reverse a Array using extra space
/**so ye toh chota array tha isliye extra space i.e temp array banane mein problem nhi hua but agar 
 * 10,0000 element ka Array hoga toh extra spce woh bhi same 10,0000 length ka bananae mein bohat problem 
 * ho jayegi i.e memory problem that is why hum without using extra space wale tarike se Array ko Reverse
 * karna dekhenge i.e 2nd approch to Reverese the Array without using extra space 
 */

//Now dekhenge dooosra tarika to Reverse a Array without using extra space means without using temp
/**so intituation ye hai ki hum Array mein 2 bande ko baitha denge i.e i and m ko i.e i ko 0th index par
 * aur m ko Array k last index par aur ye dono i.e i and m dono apne values ko swap karenge means 
 * i i.e 0th index par m i.e last index ki value aajayegi and m i.e last index par i i.e 0th index ki value
 * aajayegi aur jab tak ye i and m takra nhi jate tab tak swap karenge matlab jab tak i aur m jab tak barabar
 * par nhi aajate  tab tak swap karna hai 
 */
let ay = [20, 10, 58, 45, 38]
let i = 0, m = ay.length-1;//means i ko Array ay k 0th matlab 1st element par baitha diya aur m ko last element par baitha diya
//abb muje nhi malum ki yeh bande means i and m kab takrayenge aur kitne iteration honge ye bh nhi malum
//but muje malum hai ki jab tak nhi takra jate toh jab tak se yaad aata hai while{} Loop
while(i != m ){//means jab tak i=m barabar nhi hai tab tak ye loop chalega i.e jab tak yeh condition hai i.e i!=m tab tak loop chalega
    let temp = ay[i];
    ay[i] = ay[m]
    ay[m] = temp
    i++
    m--
}
console.log(ay);// so aise  [38, 45, 58, 10, 20] Reverse hogya without using extra space Array
//means yahan par humein alag se extra Array banane ki jarurat padi nhi

//Now problem shift all 1 in Right and all 0 on left 
//so here we will follows 2 pointer theory jahan par a and b same spot par honge
/**so yahan par a and b same spot par honge toh a agar 0 hoga toh a and b ki value swap ho jayengi 
 * aur jab bhi swaping hongi means jab bhi values swap hongi tab b aage badega iterarte hoga aur a toh waise bhi
 * badegaabb kyunki pehla element 1 toh kuch nhi hoga a aage badh jayega aur b wahin par rukega  toh b tab
 * aage badhta hai jab values swap hongi aur a toh har baar aage badhta hai so agar 0 hua toh swap karke aage badhta 
 * hai aur agar 1 hua toh bina kuch kiye a aage badh jata hai isko code mein dekhenge
 */
//problem is move all 0s on left side and all 1s on Right side
let as = [1 ,1, 0, 1, 0, 1, 1, 0, 0];
//ismein bhi two pointer algorithim use ho rhi hai toh 2 pointer a and b lenge jo same jagah se start hongi
let a=0, b=0;//ye dono pointer a and b same jagah i.e 0 se start ho rhi hai
/*so here a ka farz hoga  ki dekho 0 mila ya nhi mila toh agar 1 mila toh skip aage badh jana hai but 0 mila
toh kuch toh karna hai means agar a par 0 mil gya toh swap maar do b k value se so idhar for ,while Loop kuch bhi 
*/
while(a <= as.length){//means as Array k poore length har element par chalega 
    if(as[a]==0){
        let temp = as[a] //swaping karenge agar a par 0 aaya toh b ki value se swap karenge
        as[a] = as[b]//swaping matlab a ki value b mein chali jayegi aur b ki value a mein aajayegi
        as[b] = temp;
        b++//so jab swap karenge tabhi apne b ko aage badhana hai and a toh har baar badhega
    }
    a++ //a toh har baar humesha  aage badegaa
}
console.log(as)//so aisa [0, 0, 0, 0, 1, 1, 1, 1, 1] print ho jayega 