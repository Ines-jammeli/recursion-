// Wissal-Ines 
//04/05/2021
//recursion 

//Q1
function sum(number){
if ( number==-5){
return 0}
return number+sum(number-1)
}
undefined
sum(3)
6
sum(4)
10

//Q2
function factorial(number){
    if (number===0){
        return 1}
    return number*factorial(number-1)}
undefined
factorial(3)
6
factorial(4)
24


//Q3
function repeatString(string,number){
    if (number===0){
        return ""}
    return   string + repeatString(string,number-1)  }
undefined
repeatString('dog',0)
""
repeatString('dog',2)
"dogdog"

//Q4  not yet finished
function fibonacci(number){
var number1=0;
var number2=1;
var sum=0;
    if (number===1){
        return 1}
   sum=number1+number2;
  number2=number1;
  number1=sum;
    return  }

1+1=2
2+1=3
3+2=5
5+3=8
8+5=13
number1+number2=number3
number2=number1
number1=number3
function fibonacci(number){
var number1=0;
var number2=1;
var sum=0
for (i=0;i<=number;i++){
  sum=number1+number2;
  number2=number1;
  number1=sum;}
return sum }


//Q5
function multiplyBy10(firstNumber, secondNumber) {
function help(secondNumber){
  if (secondNumber===0){
   return 1}
   return 10*help(secondNumber-1)
  }
return firstNumber * help(secondNumber)}
undefined
multiplyBy10(4,3)
4000
multiplyBy10(5,2)
500

//Q6
function sumBetween(start, end) {
  if (start>end){
   var a=start;
   start=end;
   end=a } 
  if (start===end){
      return end}
    return start+sumBetween(start+1,end)}
undefined
sumBetween(2,7)
27

//Q7
function add(number1,number2){
    if (number1===0){
        return number2}
    return add(dec(number1),inc(number2))}
undefined
function inc(x) {
return x + 1
}
function dec(x) {
return x - 1
}
undefined
add(1,2)
3

//Q8


//Q9
function multiply(number1, number2){
  if (number2===0){
   return 0}
return number1+multiply(number1,number2-1)}

undefined
multiply(3,2)
6
multiply(5,5)
25

//Q10
function range(start,end){
    if(start+2===end){
     return end-1   
    }
    return (start+1).toString()+', '+range(start+1,end).toString();}
undefined
range(21,25)
"22, 23, 24"
range(1,9)
"2, 3, 4, 5, 6, 7, 8"

function inc(x) {
return x + 1
}
function dec(x) {
return x - 1
}
function range(start,end){
    if (inc(start)===dec(end)){
        return dec(end)}
    return inc(start)+', '+range(inc(start),end).toString()}
undefined
range(1,9)
"2, 3, 4, 5, 6, 7, 8"


//Q11
//not yet finished !
function sliceString(string,lengthString) {
    if (string.slice(lengthString)===""){
        return 1}
    lengthString=lengthString+1;
    return lengthString+sliceString(string,lengthString)}

//Q12




//Q15
function power(base,exponent){
    if (exponent===0){
        return 1}
    return base*power(base,exponent-1)}
undefined
power(2,3)
8
power(3,4)
81


//Q8
function isEven(number){
if (number===0){
	return true
}
if (number===1){
	return false
}
return isEven(number-2)
}
isEven(9)
isEven(7)
isEven(1)
false


   function sum2(x , number){
    if(x>=number){
        return x-number;
    }
    return sum2(x+2,number)
  }
  function isEven(number){
  var sum=0;
   var r = sum2(sum , number)
  if(r === 1){
  	return false
  }
  return true 
}



//Q11
function sliceString(string,position){
    if (string.slice(position)===''){
        return position;}
    return sliceString(string,position+1)}
undefined
function stringLength(string){
    var position=0;
    return sliceString(string,position)}
undefined
stringLength("hello")
5
stringLength("hi")
2


//Q12
function modulo(number1, number2){
    if (number1<number2){return number1}
    return modulo(number1-number2,number2 )}
undefined
modulo(5,2)
1
modulo(6,3)
0



//Q13
function sliceString(string,position,char,nTimes){
    if (string.slice(position)===''){
        return nTimes;}
    if (string.slice(position,position+1)===char){
     nTimes++;}
  return sliceString(string,position+1,char,nTimes)}

function countChar(string,char){
 var nTimes=0;
var position=0;
    return sliceString(string,position,char,nTimes)}

countChar('ines_jammeli','m')
2









