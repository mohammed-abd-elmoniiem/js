// assignment 1

// Q-1
// var num = window.prompt('please a number');
// console.log(num);


// Q-2
// var num = +window.prompt('enter the number');
// console.log( num%3 == 0 && num%4 == 0 ? "yes": "no");

// Q-3
// var num1 = +window.prompt('enter the first number');
// var num2 = +window.prompt('enter the second number');
// console.log(num1 > num2 ? num1 : num2);


// Q-4
// var num = +window.prompt('enter the number');
// console.log(num < 0 ? "negative" : "positive");



// Q-5

// var temp = 0;
// var max = +window.prompt('enter the first number');
// var temp = +window.prompt('enter the second number');

// if(temp > max){
//     min = max;
//     max= temp;
// }else{
//     min=temp;
// }

// temp = +window.prompt('enter the third number');

// if(temp >= max) max = temp
// else if(temp <= min ) min = temp;
// else min = temp;

// console.log("max element = ", max , "\nmin element= ",min);

// Q-6
// var num = +window.prompt('enter the number');
// console.log(num % 2 == 0 ? "even" : "odd");


// Q-8
// var letter = window.prompt('enter a letter');
// switch(letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log('vowel');
//         break;
//     default:
//         console.log('consonant');
//         break;

// }


// Q-9

// var max = +window.prompt('enter a number');
// for(var i = 1 ; i <= max ; i++) console.log(i);




// Q-10

// var num = +window.prompt('enter a number');
// for(var i = 1 ; i <= 12 ; i++) console.log(i * num);


// Q-11

// var max = +window.prompt('enter a number');
// for(var i = 2 ; i <= max ; i+=2) console.log(i);



// Q-12

// var base = window.prompt('enter the base ');
// var power = window.prompt('enter the power');
// console.log(base**power);


// Q-12

// var num1 = +window.prompt('enter the 1st number');
// var num2 = +window.prompt('enter the 2st number');
// var num3 = +window.prompt('enter the 3st number');
// var num4 = +window.prompt('enter the 4st number');
// var num5 = +window.prompt('enter the 5st number');

// console.log('total marks ='+(num1 + num2 + num3 + num4 + num5));
// console.log('average marks ='+(num1 + num2 + num3 + num4 + num5)/5);
// console.log('percentage='+(num1 + num2 + num3 + num4 + num5)/5);




// Q-13

// do{
//     var month = +window.prompt('enter the month number');
// }while(Number.isNaN(month))



// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('days in month: 31');
//         break;

//     case 4:
//     case 9:
//     case 6:
//     case 11:
    

//         console.log('days in month: 30');
//         break;
//     case 2:
//         console.log('days in month: 28');
//         break;
//     default:
//         console.log('wrong input')
    
// }



// Q-14

// var num1 = +window.prompt('enter the physics');
// var num2 = +window.prompt('enter the chemistry');
// var num3 = +window.prompt('enter the biology');
// var num4 = +window.prompt('enter the math');
// var num5 = +window.prompt('enter the computer');


// var percentage = (num1 + num2 + num3 + num4 + num5)/5;

// if( 90 <= percentage )     console.log( percentage+ "%: grad A");
// else if( 80 <= percentage )console.log( percentage+ "%: grad B");
// else if( 70 <= percentage )console.log( percentage+ "%: grad C");
// else if( 60 <= percentage )console.log( percentage+ "%: grad D");
// else if( 40 <= percentage )console.log( percentage+ "%: grad E");
// else if( 40 > percentage  )console.log( percentage+ "%: grad F");
// else console.log('wrong input');





// Q-15

// do{
//     var month = +window.prompt('enter the month number');
// }while(Number.isNaN(month))



// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('days in month: 31');
//         break;

//     case 4:
//     case 9:
//     case 6:
//     case 11:
    

//         console.log('days in month: 30');
//         break;
//     case 2:
//         console.log('days in month: 28');
//         break;
//     default:
//         console.log('wrong input')
    
// }    



// Q-16
// var letter = window.prompt('enter a letter');
// switch(letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log('vowel');
//         break;
//     default:
//         console.log('consonant');
//         break;

// }





// Q-17
// var num1 = +window.prompt('enter num1');
// var num2 = +window.prompt('enter num2');

// switch(true){
//     case num1 >= num2:
//         console.log(num1);
//         break;
//     case num2 > num1:
//         console.log(num2);
//         break;
//     default:
//         console.log('wrong input');
//         break;

// }




// Q-18
// var num = +window.prompt('enter a number');
// switch (num%2){
//     case 0 :
//         console.log('even');
//         break;
//     case 1:
//     case -1:
//         console.log('odd');
//         break;
//     default:
//         console.log('wrong input');
//         break;
// }





// Q-19
// var num = +window.prompt('enter a number');
// switch (true){
//     case num > 0:
//         console.log('positive');
//         break;
//     case num < 0:
//         console.log('negative');
//         break;
//     case num == 0:
//         console.log('zero');
//         break;
//     default:
//         console.log('wrong input');
//         break;
// }





// Q-20
// var operand1 = +window.prompt('enter the first operand');
// var operator = window.prompt('enter the operator');
// var operand2 = +window.prompt('enter the second operand');


// switch (operator){
//     case '*':
//         console.log(operand1 + " * " + operand2 + " = " + (operand1 * operand2));
//         break;
//     case '/':
//         console.log(operand1 + " / " + operand2 + " = " + (operand1 / operand2));
//         break;
//     case '+':
//         console.log(operand1 + " + " + operand2 + " = " + (operand1 + operand2) );
//         break;
//     case '-':
//         console.log(operand1 + " - " + operand2 + " = " + (operand1 - operand2));
//         break;
//     default:
//         console.log('wrong input');
//         break;
// }






  



















