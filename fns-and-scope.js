//////////////////PROBLEM 1////////////////////

//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  var isTyler = (x) => {return x === "Tyler"? true: false};
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = () => {return prompt(name);

}
  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

var welcome = () => {alert("Welcome, " + getName());};

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
// Parameters are the variables that need to be passed as arguments when the function is called.
// Arguments are the variables that are passed to fill the place of the parameters of the funcion.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
//  0, "", undefined, false, nil, NaN


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
var myName = () => {return "John";};


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;
//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
var outerFn = () => {return () => {return "John"}}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
