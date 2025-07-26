                //    | FUNCTIONS| SWITCH | WHILE.. DO-WHILE|
                
                
// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b. 
  
function power(a,b){
    return Math.pow(a,b);
}
console.log(power(2,3));




// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not. 
// Leap years ..., 2012, 2016, 2020, … 

function isLeapYear(year){
    if ((year % 4  === 0 && year % 100 === 0)  || (year % 400 === 0 ) ){
        return true
    }
    else{
        return false;
    }
}

var year = +prompt("enter a year");
if (isLeapYear(year)){
    console.log(year + "is a leap year");
}
else{
    console.log(year + "is NOT a leap year");
}








// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by 
// area = S(S − a)(S − b)(S − c) 
// where, S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions 



function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    var S = calculateS(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

var a = 5;
var b = 6;
var c = 7;

var area = calculateArea(a, b, c);
console.log("Area of the triangle is: " + area);




// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these 
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction. 
 

function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    var totalMarks = 300; 
    var obtainedMarks = m1 + m2 + m3;
    return (obtainedMarks / totalMarks) * 100;
}

function mainFunction(m1, m2, m3) {
    var avg = calculateAverage(m1, m2, m3);
    var perc = calculatePercentage(m1, m2, m3);

    console.log("Average Marks: " + avg.toFixed(2));
    console.log("Percentage: " + perc.toFixed(2) + "%");
}





// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now. 

function indexOfChar(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1; 
}

var result = indexOfChar("hello world", "o");
console.log("Index of 'o':", result);



 
// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long. 


function removeVowels(sentence) {
    var result = "";
    var vowels = "aeiouAEIOU";
    
    for (var i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i]; 
        }
    }
    
    return result;
}
var sentence = "Hello World!";
var noVowels = removeVowels(sentence);
console.log("Without vowels:", noVowels);






 
// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence 
// “Pleases read this application and give me gratuity” 
// Such occurrences are ea, ea, ui. 

function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = "aeiouAEIOU";

    for (var i = 0; i < text.length - 1; i++) {
        var first = text[i];
        var second = text[i + 1];

    
        switch (true) {
            case (vowels.indexOf(first) !== -1 && vowels.indexOf(second) !== -1):
                count++;
                break;
        }
    }

    return count;
}

var sentence = "Pleases read this application and give me gratuity";
var result = countSuccessiveVowels(sentence);
console.log("Number of successive vowel pairs:", result);




// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters. 

// Function to convert km to meters
function convertToMeters(km) {
    return km * 1000;
}

// Function to convert km to feet
function convertToFeet(km) {
    return km * 3280.84;
}

// Function to convert km to inches
function convertToInches(km) {
    return km * 39370.1;
}

// Function to convert km to centimeters
function convertToCentimeters(km) {
    return km * 100000;
}

var km = parseFloat(prompt("Enter distance between two cities in kilometers:"));

console.log("Distance in meters: " + convertToMeters(km));
console.log("Distance in feet: " + convertToFeet(km));
console.log("Distance in inches: " + convertToInches(km));
console.log("Distance in centimeters: " + convertToCentimeters(km));



// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.

function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12;

    if (hoursWorked > regularHours) {
        const overtimeHours = hoursWorked - regularHours;
        const overtimePay = overtimeHours * overtimeRate;
        console.log("Overtime hours: " + overtimeHours);
        console.log("Overtime pay: Rs. " + overtimePay);
    } else {
        console.log("No overtime worked. Overtime pay: Rs. 0");
    }
}
let hoursWorked = parseInt(prompt("Enter total hours worked by employee:"));
calculateOvertimePay(hoursWorked);



// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.


function calculateNotes(amount) {
    var hundred = Math.floor(amount / 100);
    var remaining = amount % 100;

    var fifty = Math.floor(remaining / 50);
    remaining = remaining % 50;

    var ten = Math.floor(remaining / 10);

    console.log("100 rupee notes: " + hundred);
    console.log("50 rupee notes: " + fifty);
    console.log("10 rupee notes: " + ten);
}

var amount = parseInt(prompt("Enter amount to withdraw (in rupees):"));
calculateNotes(amount);
