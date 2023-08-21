// 2. Do the below programs in arrow function:

// a. Print Odd Numbers in an array
// Arrow Function
var arr1 = [4,6,18,25,13,4,78,59,37,999,111,222,333,444,555,666,777,888,999,1010];
var Odd = "";
var Result1=()=>{
   for(var i=0;i<arr1.length;i++){
         if(arr1[i]%2!=0){
                Odd = Odd+(arr1[i])+" ";
            }
       }
      return Odd;
   }
 console.log((Result1(arr1)).trim());      

// b. Convert all the strings to title caps in a string array
 // Arrow Function
var arr2 = ["karthi","MohanKrishna","VIKRAM","JayaRaJ"];
var titlecaps = [];

 var Result2=()=>{
    for(var i=0;i<arr2.length;i++){
             arr2[i]=arr2[i].toLowerCase();
            arr2[i]=arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1);
             titlecaps.push(arr2[i]);
        }
      return titlecaps;
   }
 console.log(Result2(arr2));

// c. Sum of all numbers in an array
 // Arrow Function
var arr3 = [5,7.423,68.7,-101,94.21,4.8];
var Sum = 0;
var Result3=()=>{
      for(var i=0;i<arr3.length;i++){
    Sum=Sum+arr3[i];
   }
   return Sum;
 }
 console.log(Result3(arr3));

// d. Return all the prime numbers in an array
// Arrow Function
 var arr4 = [1,4,5,6,7,9,13,15,18,19,23];
var Prime = "";
 var Result4=()=>{
  for(var i=0;i<arr4.length;i++){
    var count=0;
  if(arr4[i]<1){
    break;//not a prime
  }
 for(var j=2;j<=arr4[i];j++){
  if(arr4[i]%j==0){
    count++
  }
 }
   if(count<2){
     prime.push(arr4[i]);
   }
 }
return prime;
}
 console.log(Result4(arr4));    

// e. Return all the Palindromes in an array
// Arrow Function
var arr5 = ["mom","cat","dad","karthi","143","454","wow","racecar","surya"];
var palindrome = [];
var Result5=()=>{
    for(var i=0;i<arr5.length;i++){
var OS = arr5[i]; //-->Original String(OS)
       var RS = arr5[i].split("").reverse().join(""); //-->Reverse String(RS)
     if(OS==RS){
        palindrome.push(arr5[i]);
     }
   }
   return palindrome;
 }
 console.log(Result5(arr5));    
