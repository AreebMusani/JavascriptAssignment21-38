// *********** Chapter 21-25 *************//

// Task 1
// var Name = prompt("Enter First Name: ");
// var LastName = prompt("Enter Last Name: ");
// var fullName = Name + " " +LastName;
// alert("Assalam-O-Alaikum "+fullName+"\nHave a nice day");

// Task 2
// var favoritePhone = prompt("Enter your favorite mobile model :");
// document.write("My favorite Phone is: "+favoritePhone+"<br>Length of string: "+favoritePhone.length);

// Task 3
// var Country = "Pakistani";
// for(var i=0; i<=Country.length; i++){
//     if(Country[i]=="n"){
//         document.write("String: "+Country+"<br>Index of 'n': "+i);
//     }
// }

// Task 4
// var msg = "Hello World";
// var filter = msg.lastIndexOf("l");
// if(filter != "-1"){
//     document.write("String: "+msg+"<br>Index of 'l': "+filter);
// }

// Task 5
// var Country = "Pakistani";
// var filter = Country.slice(3,4);
// document.write("String: "+Country+"<br>Character at Index '3' : "+filter);

// Task 6
// var Name = prompt("Enter First Name: ");
// var LastName = prompt("Enter Last Name: ");
// var fullName = Name.concat(" " +LastName);
// alert("Assalam-O-Alaikum "+fullName+"\nHave a nice day");

// Task 7
// var city = "Hyderabad";
// var cityUpdate = city.replace("Hyder" , "Islam");
// document.write("String: "+city+"<br>After Replacement: "+cityUpdate)

// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g , "&");
// document.write("<b>Before Replacement:</b> "+message+"<br><b>After Replacement:</b> "+replace);

// Task 9
// var string = "472";
// document.write("Value: "+string+"<br>Type: "+typeof(string));
// var converting = parseInt(string);
// document.write("<br>Value: "+converting+"<br>Type: "+typeof(converting));

// Task 10
// var input  = prompt("Enter any name : ");
// document.write("User Input: "+input+"<br>Upper Case: "+input.toUpperCase());

// Task 11
// var input  = prompt("Enter any name : ");
// document.write("User Input: "+input+"<br>Upper Case: "+input.charAt(0).toUpperCase()+input.slice(1));

// Task 12
// var num = 35.36; 
// var st = num.toString();
// for(var i=0; i < st.length; i++){
//     if(st[i] == "."){
//         document.write("Number: "+num+"<br>Result: "+st.replace(st[i],""))
//     }
// }

// Task 13
// var username = prompt("Enter Username :")
// for(var i=0; i < username.length; i++){
//     if(username[i]=="@" || username[i]=="!" || username[i]=="," || username[i]=="."){
//         alert("Please enter a valid Username: ")
//         break
//     }
// }

// Task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var user = prompt("Welcome to ABC Bakery. what do you want to order? "); 
// var result = "not available";
// for (let i = 0; i < A.length; i++) {
//     if(user.toLowerCase() == A[i]){
//         result = "available";
//         document.write(A[i] + " is <b>"+result+"</b> at index "+i+" in our bakery");
//         break
//      }
// }
// if(result == "not available"){
//     document.write("We are sorry. "+user+" is <b>"+result+"</b> in our bakery");
// }

// Task 15
// var password = prompt("Enter your password :")
// var numbers = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
// if (password.match(numbers)) {
//     if (password.charCodeAt(0) > 47 && password.charCodeAt(0) < 58) {
//         alert("Password can not begin with a number")
//     }else{
//         if (password.length >= 5) {

//         } else {
//             alert("Password should be atleast 6 characters");
//         }
//     }
// }else if(password == ""){
//     alert("Password should not be null");
// }else {
//     alert("Password should contain alphabet and numbers")
// }


// Task 16
// var university = "University of Karachi";
// var array = university.split("");
// for (let index = 0; index < array.length; index++) {
//     document.write(array[index]+"<br>")

// }

// Task 17
// var user = prompt("Enter any name: ");
// var filter = user.charAt(user.length - 1);
// document.write("User Input: "+user+"<br>last character of input: "+filter);

// Task 18
// var text = "the quick brown fox jumps over the lazy dog";
// var count = 0;
// for (let index = 0; index < text.length; index++) {
//     if(text.toLowerCase().slice(index,index+3) == "the"){
//         ++count
//     }
// }
// document.write("Text: "+text+"<br>The are <b>"+count+"</b> occurence(s) of word '<b>the</b>'")

// *********** Chapter 21-25 End *************//



// *********** Chapter 26-30 *************//

// Task 1
// var num = prompt("Enter positive Integer :");
// document.write("number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num))

// Task 2
// var num = +prompt("Enter negative Integer :");
// document.write("<br>number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num))

// Task 3
// var val = +prompt("Enter any number for finding absolute value");
// document.write("The absolute value of "+val+" is "+Math.abs(val));

// Task 4
// var dice = Math.random() * 6;
// document.write(dice.toFixed());

// Task 5
// var toss;
// var dice = Math.random() * 2;
// var diceValue = Math.ceil(dice)
// if(diceValue == 2){
//     toss = "Heads";
//     document.write(diceValue+"<br>random coin value: "+toss)
// }else{
//     toss = "Tails";
//     document.write(diceValue+"<br>random coin value: "+toss)
// }

// Task 6
// var randomNumberlessThan100 = Math.random() * 100;
// var diceValue = Math.ceil(randomNumberlessThan100);
// document.write("Random Number between 1 and 100: "+diceValue);

// Task 7

// Task 8
// var dice = Math.random() * 10;
// var diceValue = Math.ceil(dice);
// var userInput = prompt("Enter a number between 1 and 10");
// document.write(diceValue)
// if(userInput == diceValue){
//     alert("Congratulations! you are a winner")
// }else{
//     alert("Try again!");
// }

// *********** Chapter 26-30 End *************//


// *********** Chapter 31-34 *************//

// Task 1
// var date = new Date();
// document.write(date);

// Task 2
// var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var month = new Date();
// alert("Current month: "+Months[month.getMonth()]);

// Task 3
// var Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = new Date();
// alert("Today is: " + Days[currentDay.getDay()]);

// Task 4
// var Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = new Date();
// var dayName = Days[currentDay.getDay()];
// if(dayName == "Sat" || dayName == "Sun"){
//     alert("Today is : "+dayName+"\nIt’s Fun day")
// }else{
//     alert("Today is : "+dayName+"\nIt’s working day")
// }

// Task 5
// var date = new Date();
// if(date.getDate() < 16){
//     document.write("First fifteen days of the month");
// }else{
//     document.write("Last fifteen days of the month")
// }

// Task 6
// var currentDate = new Date();
// document.write("Current Date: "+currentDate);
// document.write("<br>Elapsed milliseconds since Jan 1, 1970: "+currentDate.getTime())
// var convertMilliToMinutes = currentDate.getTime() / (1000*60)
// document.write("<br>Elapsed minutes since Jan 1, 1970: "+convertMilliToMinutes)

// Task 7
// var time = new Date();
// if(time.getHours() < 12){
//     alert("Its AM")
// }else if(time.getHours() == 0){
//     alert("Its Midnight")
// }else{
//     alert("its PM")
// }

// Task 8
// var laterDate = new Date("December 31, 2020");
// document.write("<b>Later date</b>: "+laterDate)

// Task 9
// var currrentDate = new Date();
// var Ramadan1stDate = new Date("April 25, 2020");
// var differnce = currrentDate.getTime() - Ramadan1stDate.getTime();
// var convertmilliToDays = differnce / (1000*60*60*24);
// alert(Math.floor(convertmilliToDays)+" Days have passed since 1st Ramadan, 2020");

// Task 10
// var Today = new Date();
// var beginningDate = new Date("January 01, 2020");
// var differnce = Today.getTime() - beginningDate.getTime();
// document.write("On Refernce Date "+Today+",<br>"+Math.floor(differnce/(1000))+" seconds had passed since beginning of 2020") 

// Task 11
// var date = new Date();
// document.write("<b>Current date: </b><br>"+date)
// date.setHours(date.getHours()-1)
// document.write("<br><b>1 hour ago, it was:</b><br> "+date)

// Task 12
// var date = new Date();
// document.write("<b>Current date: </b><br>"+date)
// date.setFullYear(date.getFullYear()-100)
// document.write("<br><b>1 hour ago, it was:</b><br> "+date)

// Task 13
// var currentAge = +prompt("Enter your Age : ");
// var currentYear = new Date();
// var DateOfBirth = new Date();
// DateOfBirth.setFullYear(currentYear.getFullYear() - currentAge);
// document.write("Your Age is: "+currentAge+"<br>Your birth year is: "+DateOfBirth.getFullYear())

// Task 14
// var customerName = "Areeb Musani";
// var CurrentMonth = "June";
// var NumberOfUnits = 410;
// var ChargesPerUnit = 16;
// var DueDateAmount = NumberOfUnits * ChargesPerUnit;
// var LatePaymentSurcharge = 350;
// var AfterDateAmount = DueDateAmount + LatePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1><br>")
// document.write("Customer Name: "+customerName)
// document.write("<br>Month: "+CurrentMonth)
// document.write("<br>Number Of Units: "+NumberOfUnits)
// document.write("<br>Charges Per Unit: "+ChargesPerUnit.toFixed(2))
// document.write("<br><br>Net Amount Payable (within Due Date): "+DueDateAmount.toFixed())
// document.write("<br>Late Payment Surcharge: "+LatePaymentSurcharge)
// document.write("<br>Gross Amount Payable (after Due Date): "+AfterDateAmount.toFixed())

// *********** Chapter 31-34 End *************//


// *********** Chapter 35-38 *************//

// Task 1
// function date$Time(){
//     var date = new Date();
//     document.write(date)
// }
// date$Time();

// Task 2
// function greeting(){
//     var firstName = prompt("Enter firstName :");
//     var lastName = prompt("Enter last Name :")
//     var fullName = firstName +" "+ lastName;
//     alert("Welcome "+fullName+"\nhave a nice day")
// }
// greeting()

// Task 3
// function sum(){
//     var number1 = +prompt("Enter 1st number for sum :")
//     var number2 = +prompt("Enter 2st number for sum :")
//     var result = number1 + number2;
//     return result;
// }
// document.write(sum())

// Task 4
// function calculator(num1,num2,operator){
//     if(operator == "+"){
//         return num1 + num2
//     }else if(operator == "-"){
//         return num1 - num2
//     }else if(operator == "*"){
//         return num1 * num2
//     }else if(operator == "/"){
//         return num1 / num2
//     }else{
//         return "operator not found!";
//     }
// }
// var result = calculator(15,15,"+")
// document.write(result);

// Task 5
// function square(number){
//     return number * number;
// }
// var result = square(5)
// document.write(result);

// Task 6
// function factorial(fac){
//     var ans = 1;
//     for(var i = 1; i<=fac; i++){
//         ans = ans*i;
//     }
//     document.write("The factorial of "+fac+" is "+ans)
// }
// factorial(6)

// Task 7
// function counting(){
//     var start = +prompt("Enter first number for start counting :")
//     var end = +prompt("Enter last number for end counting :");
//     for(var i=start; i<=end; i++){
//         document.write(i+"<br>");
//     }
// }
// counting();

// Task 8
// function calculateHypotenuse(base , perpendicular ){
//     var Hypotenuse = (base * base)+(perpendicular * perpendicular)
//     function calculateSquare(Hypotenuse) {
//         return Math.sqrt(Hypotenuse)
//     }
//     document.write("Base: "+base)
//     document.write("m<br>Perpendicular: "+perpendicular)
//     document.write("m<br>The Hypotenuse will be: ")
//     document.write(calculateSquare(Hypotenuse).toFixed(2)+"m")
// }
// calculateHypotenuse(4 , 10)

// Task 9
// function area(width,height){
//     var Area = width * height;
//     document.write("Width: "+width+"<br>Height: "+height+"<br>The area of a rectangle is: "+Area)
// }
// area(50,60);

// Task 10
// function palindrome(sentence) {
//     var first = sentence.replace(/ /g,"").toLowerCase().split("").join();
//     var reverse = sentence.replace(/ /g,"").toLowerCase().split("").reverse().join();
//     if(first == reverse){
//         document.write("This sentence is palindrome: "+sentence)
//     }else{
//         document.write("This sentence is not palindrome: "+sentence)
//     }
// }
// palindrome("My gym")

// Task 11
// function uppercase(sentence){
//     var sepearating = sentence.split(" ");
//     var res = [];
//     for(var i=0; i<sepearating.length; i++){
//         res.push(sepearating[i].charAt(0).toUpperCase() + sepearating[i].slice(1));
//     }
//     document.write("EXAMPLE STRING: "+sentence);
//     return res;
// }
// var sen = uppercase("the quick brown fox");
// document.write("<br>EXPECTED OUTPUT: "+sen.join(" "));

// Task 12
// function largestWord(sentence){
//     var sepearating = sentence.split(" ");
//     var largest = sepearating[0];
//     for(var i=0; i<sepearating.length; i++){
//         if(largest.length < sepearating[i].length){
//             largest = sepearating[i];
//         }
//     }
//     document.write("Example string: "+sentence)
//     document.write("<br>Expected Output: "+largest)
// }
// largestWord("Web Development Tutorial")

// Task 13
// function findNoOfOccurance(sentence , letter){
//     var sepearating = sentence.split("");
//     var count = 0;
//     for(var i=0; i<sepearating.length; i++){
//         if(sepearating[i] == letter){
//             ++count;
//         }
//     }
//     return count;
// }
// var result = findNoOfOccurance("'JSResourceS.com" , "o")
// document.write(result);

// Task 14
// function calcCircumference(radius){
//     var Circumference = 2 * 3.142 * radius;
//     document.write("The circumference is: "+Circumference.toFixed(2))
// }
// function calcArea(radius) {
//     var Area = 3.142 * (radius * radius);
//     document.write("<br>The area is: "+Area.toFixed(2))
// }
// calcCircumference(5);
// calcArea(5);

// *********** Chapter 35-38 End *************//