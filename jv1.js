
// var a="helloworld";
// console.log(a);

// function b(){
//     console.log("calling a function");
// }
// b();
// during intialization var a and a function will be defined and during execution function and value will be assign like helloworld
// and console.log 
// var e;
// var a=10;
// var c=null;
// var d=false;

// function printresult(num){
//     if(num>=85)
//         console.log("distinction");
//     else if(num>=60) 
//         console.log("firstclass");
//     else if(num>=40) 
//         console.log("secondclass");
//         else
// console.log("fail");    
// }
// var num = prompt("enter the number");
// printresult(num);

// var a=10,b=9;
// if(a===b){
//     console.log("executed");
// } 
// else{
//         console.log("not executed");
//     }

// function firstNametolastName(firstName="sog",lastName){
// console.log(firstName,lastName);
// }
// firstNametolastName();
// function abc(a,b){
//   switch (a!=b) {
//    case (a===b):
//             console.log("satisfy");
//             break;
//         case (a!=b):
//             console.log("not satisfy");
//             break; 
//         default:console.log("error");
//             break;
//     }
// } 
// var a=prompt("enter a value");
// var b=prompt("enter b value")
// abc(a,b);


// var a=10,b=3;
//  var operator;
//  console.log("enter your operator");
//  switch (operator) {
//      case '1':(a+b)
//          console.log("this is addition oparator");
//          break;
//  case '2':(a-b)
//  console.log("subtracton");
//  break;
//  case '3':(a*b)
//  console.log("multiplication");
//  break;
//      default:console.log("error");
//          break;
//  }



// var randomArray=[1,2,3,"asb","cbc"];
// console.log(randomArray);
// console.log(randomArray.len());
// randomArray.push(1000);
// console.log(randomArray[4]);
//  randomArray.splice(1,2);
// console.log(randomArray);
// var new_array=["soghra","219"];
// var result=randomArray.concat(new_array);
// console.log(result);
// var randomArray=[4,5,2,9,"sog"];
// randomArray.sort();
// console.log(randomArray);
// var name =["nishad","afreen"];
// console.log(name);
// var fullname=name.toString();
// console.log(fullname);
// randomArray.reverse();
// console.log(randomArray);


// var num=100000;
// console.log(num);
// var str=num.toString();
// console.log(str);
// var num="100000";
// console.log(num);
// var str=parseInt(num);
// console.log(str);

// var j_s="hai its nishad iam from chanapattna";
// console.log(j_s);
// var java_srt=j_s.split(" ");
// java_srt.reverse();
// console.log(java_srt);
// var result_js=java_srt.join(" ");
// console.log(result_js);

// var j_s="soghra";
// console.log(j_s);
// var java_srt=j_s.split("");
// java_srt.reverse();
// console.log(java_srt);
// var result_js=java_srt.join("");
// console.log(result_js);
// function palindrome(){
//     if(j_s===result_js){
//         console.log("the given str is palindrome");
//     }else console.log("not palindrome");
    
// }
// palindrome();

// function ispalindrome(teststring){
//  var str1=teststring.split("");
//  var str2=str1.reverse();
//  var str3=str2.join("");
//  if(teststring === str3) { return true;
//   } else return false;
    
// }
// console.log(ispalindrome("madam"));

// var a ;

// function areas(){
//   var area=3.142*a*a;
//     console.log(area);

// }
// var a=prompt("enter value");
// areas(a);

// var Person =new Object ();
//   Person.firstName = "soghra";
//   Person.lastName = "heena";
// console.log(Person.firstName);
// person["firstname"] we can call this object as console.log(person["firstname"])

// var b=5;

// function a(){
//   console.log(b);
// }
// function c(){
//  var d=10;
//   console.log(d);
//   console.log(b);
//   a();
// }
// c();

// function multiplyByTwo(x){
// return x*2;
// }
// var r1=prompt("enter the value of x");
// console.log(multiplyByTwo(r1));

// var babyanimals=function(a){
//   return function(b){
//     var result="i love".concat(a).concat('and').concat(b);
//     return result;
//   };
// };
// var babykoala=babyanimals("koalas");
// babykoala('elephant');
// babykoala('flamings');
// console.log(babykoala);

// spread operator ...(similar to concatination local copying) 
// let greenBoxMarbles = ["1","2"];
// let blueBoxMarbles = ["9","soghra"];
// let redBoxMarbles = [...greenBoxMarbles ,10, ...blueBoxMarbles];
// console.log(redBoxMarbles);

// assigning

// let redBoxMarbles= ["1","2"];
// let blueBoxMarbles = ["9","soghra"];
// let greenBoxMarbles = blueBoxMarbles;
// greenBoxMarbles.push("0","sa");
// console.log(greenBoxMarbles);

// let person = {
//   name:"soghra" ,
//   place:"ramanagaram" 
// };
// let address = {
//   address: "door 36"
// };
// let Anotherperson ={...person,...address};
// console.log(person);
// console.log(address);
// console.log(Anotherperson);

// template literals
// function fnName (firstName,lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }
// const fname="soghra";
// const lname="heena";
// fnName(fname,lname);

// arrowfunction
//  fnName = (firstName,lastName) => console.log(`Hello ${firstName} ${lastName}`);
// // const fname="soghra";
// // const lname="heena";
// fnName("fname","lname");

// add = (num1,num2) =>
function add(num1,num2){
  return num1+num2;
}
console.log(add(1,2));