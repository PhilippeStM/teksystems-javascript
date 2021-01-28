LINE 403 HAVE GROUP GO OVER it.
LINE 643 STILL STUCK ON.

// ***For all the exercises, be sure to log the output of the function to the console.***

/************************************************************************************/
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

function tekCamp() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log("TEKcamp");
            }
            else { console.log("TEK"); }
        }
        else if (i % 5 === 0) {
            console.log("camp")
        }
        else (console.log(i));
    }
}
tekCamp();


/************************************************************************************/
//Write a function that converts the current temperature from Fahrenheit to Celsius. 

function farenheitCelsius(temp) {
    temp = (temp - 32) * 5 / 9;
    console.log("Celsius = " + temp);

}

farenheitCelsius(15);



/************************************************************************************/
//Write a function that converts the Celsius temperature back to Fahrenheit. 

function celsiusFarenheit(temp) {
    temp = (temp * 9 / 5) + 32;
    console.log("Farenheit = " + temp);
}

celsiusFarenheit(15);


/************************************************************************************/
// Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

function canVote(age) {
    if (age >= 18) {
        return (true);
    }
    else {
        return false;
    }
}

console.log(canVote(19));


/************************************************************************************/
// Write a function that converts a string to an array. It should return an array.  

function strToArr(input) {
    return input.split("");
}
console.log(strToArr("159104200"));


/************************************************************************************/
// Write a function that reverses your telephone number.  It should return the reversed telephone number.

function reversePhone(number) {
    number = number + "";
    return number.split("").reverse().join("");
}

console.log(reversePhone(1234567890));



/************************************************************************************/
// Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

//your code...

function car([vehicle]) {

    return vehicle;

}

console.log(car(["Chevy, Sonic, 2012, White"]));


/************************************************************************************/
// Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

//example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

function list(array) {
    let evenOdd = {}
    let index = [0];
    while (index < array.length) {
        if (array[index] % 2 === 1) {
            evenOdd[array[index]] = "even";
        }
        else {
            evenOdd[array[index]] = "odd";
        }
        index++;
    }
    return evenOdd;
}

console.log(list([1, 2, 5, 8, 11, 100, 101]));


/************************************************************************************/
//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

function arrayList(numbers) {
    const array = numbers.length;
    for (i = 0; i <= array; i = i + 3) {
        console.log(numbers[i]);
    }
}

arrayList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



/************************************************************************************/
// const foodArray = ['potatoes', 'tamales', 'lemon', 'strawberries', 'chocolate', 'pudding', { program: 'TEKcamp' }];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

// const adjectiveArray = ['salty', 'spicy', 'sour', 'sweet', 'rich', 'creamy', 'amazing'];
// Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".

function list() {
    const foodArray = ['potatoes', 'tamales', 'lemon', 'strawberries', 'chocolate', 'pudding', { program: 'TEKcamp' }];
    const adjectiveArray = ['salty', 'spicy', 'sour', 'sweet', 'rich', 'creamy', 'amazing'];
    let school = foodArray.findIndex(x => x.program);
    console.log("School: " + school);

    for (i = 0; i < foodArray.length; i++) {
        if (foodArray[i].endsWith("s")) {
            console.log(foodArray[i] + " are " + adjectiveArray[i]);
        }
        else if (console.log(foodArray[i] + " is " + adjectiveArray[i]));
    }
}

list();


/************************************************************* */
// Refactor the for() loop to be a while loop.


let i = 0;

while (i < 10) {
    i++;
    console.log("The value of i in the loop is: " + i)
}



/************************************************************* */
//Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

let sum = "";
let times = "";
let product = "";
let power = "";

function add() {
    sum = 30 + 2;
}

function multiply() {
    times = sum * 20;
}

function divide() {
    product = times / 10;
}

function pow() {
    power = Math.pow(product, 2);
}

add();
multiply();
divide();
pow();

console.log(sum);
console.log(times);
console.log(product);
console.log(power);


/************************************************************* */
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

// ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

console.log(`20 is truthy because it is a number, and numbers are type coerced as 'true' when performing boolean operations.`);
console.log(`0 is a falsy because 0 is coerced as 'false' when performing boolean operations`);
console.log(`"zero" is a truthy because filled strings are coerced as 'true' when performing boolean operations`);
console.log(`const zero = 20 is a truthy because it does not meet any of the 6 conditions that type coerce into falsys when performing boolean operations`);
console.log(`null is a falsy because it is type coerced as 'false' when performing boolean operations.`);
console.log(`"0" is a truthy because it is a filled string, and not the value of 0 itself`);
console.log(`!'' is a truthy becuase the operator is saying "not an empty string"`);
console.log(`{} is a truthy because an empty object is type coerced as true when performing boolean operations.`);
console.log(`() => {console.log("hello TEKcamp!")}; is a truthy because it contains a filled string.`);
console.log(`125 is a truthy becuase it is a number that is not 0.`);
console.log(`undefined is a falsy becuase undefined is coerced into false when performing boolean operations.`);
console.log(`"" is an empty string and is therefore a falsy.`);




/************************************************************* */
// Refactor the following code using a switch statement:

// const day = "friday";

// if (day === "monday") {
//     console.log("we got a long week ahead of us...");
// } else if (day === "tuesday") {
//     console.log("tuesday's are still beterr than mondays, but LONG way to go still");
// } else if (day === "wednesday") {
//     console.log("We are smack dab in the middle of the week");
// } else if (day === "thursday") {
//     console.log("Thursday night... the mood is right");
// } else if (day === "friday") {
//     console.log("TGIF.  Friday truly is the best day of the week!")
// } else {
//     console.log("It's a weekend!")
// }

const day = 'monday';

switch (day) {
    case 'monday':
        console.log("We have a long week ahead of us...");
        break;
    case 'tuesday':
        console.log("Tuesday's are still better than Mondays, but a LONG way to go still");
        break;
    case 'wednesday':
        console.log("We are smack dab in the middle of the week.");
        break;
    case 'thursday':
        console.log("Thursday night... the mood is right...");
        break;
    case 'friday':
        console.log("TGIF. Friday truly is the best day of the week!");
        break;
    case 'saturday':
    case 'sunday':
        console.log("It's a weekend!");
        break;
    default:
        console.log('Not a valid day!');
}



/************************************************************* */
// Refactor the following statements to use ternary expressions:

// const age = 10;
// if (age > 21) console.log("adult"); else {
//     console.log("minor");
// }

// if (age > 13 && age < 19) console.log('teen'); else {
//     console.log("not a teenager");
// };

// if (age > 65) console.log("retired"); else {
//     console.log("still working...");
// }

const age = 10;

age > 21 ? console.log("adult") : console.log("minor");
age > 13 && age < 19 ? console.log("teen") : console.log("not a teenager");
age > 65 ? console.log("retired") : console.log("still working...");


/************************************************************* */
//Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-healthy ? (yes or no)
-hobbies
-profession
-education

-add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
*/

//your code...

const me = {
    name: "Philippe",
    age: "30",
    gender: "Male",
    healthy: "yes",
    hobbies: "playing music and video games",
    profession: "Full-Stack Web Developer",
    education: "Bachelor's Degree",

    learn: function () {
        return this.name + " is learning JavaScript.";
    },
    fun: function () {
        return this.name + " enjoys " + this.hobbies;
    }
}

console.log(me.learn());
console.log(me.fun());



/************************************************************* */

{
    const year = 2021;
    const nums = [1, 2, 3, 4, 5];
    let sum = 0;
    let i = 0;
    const doubled = [];

    //Refactor the following statements into expressions


    //     // 1.
    //     if (year > 2000 && year < 2100) {
    //         console.log("welcome to the 21st century");
    //     }

    let year = "2021";
    const expression1 = (year > 2000) && (year < 2100) ? "Welcome to the 21st century!" : "You are not in the 21st century";

    console.log(expression1);


    //     // 2.
    //     for (let i = 0; i < nums.length; i++) {
    //         sum += nums[i];
    //     }
    //     console.log(sum);

    let i = 0;
    let nums = [1, 2, 3, 4, 5];
    let sum = 0;

    const expression = (i < nums.length) ? (i += 2) && (nums.forEach(() => sum = sum + nums[i])) : "";

    console.log(sum);



        // 3.
        while (i < nums.length) {
            doubled.push(nums[i] * 2);
            i++;
        }

        console.log(doubled);
    }


    let i = 0;
    let doubled = [];
    let nums = [1, 2, 3, 4, 5];

    const expression = (i < nums.length) ? (i += 1) && (nums.forEach(() => doubled.push(nums[i] * 2))) : "";

    console.log(doubled);

    /************************************************************* */
    // Use array methods to solve the following problems.

    const nums = [1, 2, 3, 4, 5];
    // Square every number in the array.  Store the squares in a new array.

    //your code...

    function square(array) {

        newArray = [];
        len = array.length;

        for (var index = 0; index < len; index++) {
            newArray.push(array[index] * array[index]);
        }

        return newArray;
    }

    console.log(square(nums));



    const fivePlus = [1, 3, 5, 7, 9, 1, 3, 5, 2, 3, 1, 23, 4, 232, 3, 4, 1, 2, 2, 2, 3, 4, 4, 1, 12, 11, 23, 3, 4, 5];
    //Remove all numbers that are less than 5.  Store the results in a new array.

    //your code...

    function remove(value) {
        return value > 5;
    }

    const newArray = fivePlus.filter(remove);

    console.log(newArray);




    // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

    //your code...

    const arrayLength = 20
    const newArray = []

    for (let i = 0; i < arrayLength; i++) {
        newArray.push(Math.random())
    }

    const sum = newArray.reduce(function (newArray, sum) {
        return newArray + sum;
    }, 0);

    console.log(sum);



    const showNums = [12, 22, 33, 44, 55, 66, 77, 88, 99, 101];
    //Print out the value of each number divided by 2.  There is no need to store the output in an array.

    let newArray = [];

    for (i = 0; i < showNums.length; i++) {
        newArray.push(showNums[i] / 2);
    }

    console.log(newArray);

    /************************************************************* */
    /* Chess pieces have point values associated with them.  
    
    Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 
    
    Write a function that calculates the total point value of any given input list of Chess pieces.  
    ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15
    
    If there are invalid chess pieces, discard those elements.
    ex : ['iPhone','queen','pawn'] => chessCalc() => 10
    ['android'] => chessCalc() => null
    
    */

    let pieces = ["pawn", "knight", "queen", "king", "bishop", "rook"];
    let points = 0;

    function chessCalc(pieces) {
        for (i = 0; i < pieces.length; i++) {
            switch (pieces[i]) {
                case "pawn":
                    points += 1;
                    break;
                case "knight":
                    points += 3;
                    break;
                case "bishop":
                    points += 3;
                    break;
                case "rook":
                    points += 5
                    break;
                case "queen":
                    points += 9;
                    break;
                case "king":
                    points += 0;
                    break;
                default:
                    points = "Not a valid chess piece";
                    break;
            }
        } return points;
    }

    console.log(chessCalc(pieces));


    /************************************************************* */

    const ones = [1, 11, 111, 1111, 11111, 111111, 1111111, 11111111, 111111111, 1111111111];
    //reverse the array, without modifying / `mutating` the ones array.

    ones.reverse();

    console.log(ones);


    /************************************************************* */
    //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

    function message(name, sport) {
        alert('Hello ' + name + " have fun playing " + sport + " today!");
    }

    function performer(cb) {
        let name = prompt('Please enter your name.');
        let sport = prompt('Please enter your sport');
        cb(name, sport);
    }

    performer(message);


    /************************************************************* */
    // For the given list of developers : 
    const devs = [
        {
            name: 'Cameron',
            age: 23,
            gender: 'm',
            "tech_stack": ['html', 'css', 'js', 'React']
        },
        {
            name: 'Liz',
            age: 20,
            gender: 'f',
            "tech_stack": ['java', 'spring-boot', 'MySql']
        },
        {
            name: 'Chris',
            age: 102,
            gender: 'm',
            "tech_stack": ['react', 'express', 'python']
        },
        {
            name: 'Rashid',
            age: 27,
            gender: 'm',
            "tech_stack": ['thymeleaf', 'postgres', 'js', 'Angular']
        },
        {
            name: 'Annie',
            age: 30,
            gender: 'F',
            "tech_stack": ['html', 'scss', 'less', 'DynamoDB', 'GraphQL']
        },
        {
            name: 'Dr. Patel',
            age: 52,
            gender: 'M',
            "tech_stack": null
        },
        {
            name: 'Isaiah',
            age: 48,
            gender: 'M',
            "tech_stack": ['Java', '', 'less', 'DynamoDB', 'GraphQL']
        },
        {
            name: 'Saima',
            age: 33,
            gender: 'F',
            "tech_stack": ['MongoDB', 'Route53', 'Jenkins', 'Terraform', 'Kubernetes']
        },
        {
            name: 'Omar',
            age: 33,
            gender: 'm',
            "tech_stack": ['c++']
        },
        {
            name: 'Mariam',
            age: 32,
            gender: 'f',
            "tech_stack": null
        },
    ];

    /************************** */
    // Find all devs older than 24

    //your code here...

    const olderThan24 = devs.filter(older => older.age > 24);
    console.log(olderThan24);

    /************************** */
    // Remove all people who are not developers (i.e. no tech stack)

    //your code here...

    const removeNonDevs = devs.filter(techOnly => techOnly.tech_stack != null);
    console.log(removeNonDevs);



    /************************** */
    // Calculate the total age of all the devs

    //your code here...

    devs.reduce(function (a, b) {
        for (i = 0; i < devs.length; i++) {

        }
        console.log(a);
    })

    /************************** */
    // Find all female devs

    //your code here...

    const findFemales = devs.filter(femalesOnly => (femalesOnly.gender === 'f'));
    const findFemales2 = devs.filter(femalesOnly => (femalesOnly.gender === 'F'));

    console.log(findFemales);
    console.log(findFemales2);

    /************************** */
    // lowercase the genders of every dev

    //your code here...



    /************************** */
    // Sort the developers by name

    //your code here


    /************************** */
    // Sort the devs by age in descending order

    //your code here



    /************************** */
    // Sort the male coders by age

    //your code here


    /************************** */
    // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

    /*
    Liz specializes in Java, Spring Boot, and MySql.
    Chris specializes in React, Express, and Python.
    Dr. Patel is not a developer.
    */

    //your code here


    /************************************************************* */
    // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
    const numbersMixed = [2, 23, 1, 2, 1, 1, 1, 2, 2.5, 20, 200, 2000, , { k: "val" }, 20000, 19999, 1878, 140, 23, 4, "sk", true, true, "true-dat", "nice", "one", "two", "three", "3", "tea", []];

    function maxNumber(numbers) {
        //your code...
    }

    //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

    function sortNums(numbers, desc = false) {
        //your code...
    };



    /************************************************************* */
    //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.


    //your code...



    /************************************************************* */
    //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

    const mapObj = new Map();
    mapObj.set({ company: "TEKsystems" }, "object");

    console.log(mapObj.has({ company: "TEKsystems" }));

    //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

    //your code...


    //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


    /************************************************************* */
    //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

    // ex : 2,3 => doMath(2,3) => adding : 5
    const operations = [];
    function doMath(x, y) { };

    //your code...



    /************************************************************* */
    //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

    //your code...


    //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

    //your code


    // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

    //your code...



    // DO NOT DELETE THIS EXPORT
    module.exports = {
        tekCamp,
        canVote
    }


//*************************************** */



