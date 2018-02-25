/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/

    //parens can be omitted for single arguments
    //const tripleAndFilter = (arr) => arr.map(item => item * 3).filter(item => item % 5 === 0);
    const tripleAndFilter = arr => arr.map(item => item * 3).filter(item => item % 5 === 0);

/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/

    const doubleOddNumbers = arr => arr.filter(item => item % 2).map(item => item * 2);

/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

    //one liner not viable due to assignment before return
    //const mapFilterAndReduce = (arr) => arr.map(item => item.firstName).filter(item => item.length < 5).reduce((stack, next) => stack[next] = next.length, {});
    const mapFilterAndReduce = arr => arr.map(item => item.firstName).filter(item => item.length < 5).reduce((stack, next) => {
        stack[next] = next.length;
        return stack;
        }, {}
    );

/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

//one liner not viable - curly brackets colliding with arrow function code definition
//const createStudentObj = (firstName, lastName) => {firstName: firstName, lastName: lastName};

//alternatively enclose in plain parens
//let createStudentObj = (firstName, lastName) => ({firstName:firstName, lastName,lastName})
const createStudentObj = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName
    };
};

/* 5 - Given the following code:


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'

    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

*/

    var instructor = {
      firstName: "Colt",
      sayHi: function() {
        setTimeout(() => console.log('Hello ' + this.firstName), 1000);
      }
    };
