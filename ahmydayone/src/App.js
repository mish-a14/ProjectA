import React from 'react';
import './App.css';
import './learningFunctions/mathFunctions'
import firstFn from './learningFunctions/mathFunctions';

function App() {

  console.log("hello world")
  const a = 2
  const b = 7
  let answer 
 
  function addition(a, b) {
    let c = a + b
    return c
  }
  answer = addition(a, b)
  const personA = 18
  const personB = 18
  let access = (personA === personB) // && || == !=
  // a, b -> true if >=20
  
  
  function greaterThanTwenty(sum1, sum2) {
    
    let result = (sum1 + sum2)
    let returnVariable

    if (result >= 20) {
      returnVariable = 'success'
    } else {
      returnVariable = 'failure'
    }
    return returnVariable
    }

  const listT = [5, 3, 87, 1, 3, 7 , 9, 20, 30, 65]
  // console.log(listA[0])
  //function that takes in a list and loops through 
  //counting how many values in the list are greater than 10

  function greaterThanTen(poop) {
    let total = 0

    for (let i = 0; i < poop.length; i++) {
      
      if ( poop[i] > 10 ) {
        total += 1
      } 
      }
      return total
    }
  
  function greaterThanTenAgain(poop) {
    let total = 0
    for (let elem in poop) {
      if (elem > 10) {
        total++
      }
    }
    return total
  }
  // greaterThanTen(listT)
  // console.log(greaterThanTenAgain(listT))



  let inputString = 'abcdefgabdhc'

  // //function (string) -> removes a from string

  function removeA(stringToPutIn) {
    let newString = ''
    for (let i = 0; i < stringToPutIn.length; i++) {
      
      if ( stringToPutIn[i] != 'a') {
        newString += stringToPutIn[i]
      } 
      }
      return newString
  }
  console.log(removeA(inputString))
 

  //take in the array and find the max and its index 
   
  
  let randomNum = [10, 2, 14, 16, 1998, 1996]
  console.log(randomNum[6])

  function blemish(pimple) {
    
    let newAns = Math.max(...pimple)
    let index = pimple.indexOf(newAns)
    
    return [newAns, index]
  }
  
  console.log(blemish(randomNum))


  let listOne = [1, 'apple', 3, [2, 3], '6', 4, 'hi']
  //make a function that takes the above input 
  // returns the number of number and number of strings 
  //hint : typeof
  console.log(typeof(1))

  function anotherOne(iHateAhmy) {
    
    let initial
    let string = 0
    let object = 0
    let num = 0 

    for (let i = 0; i < iHateAhmy.length; i++) {
      initial = typeof(iHateAhmy[i])
      console.log(initial)
      if (initial == "number") {
          num += 1 
      } else if (initial == "string") {
          string += 1 
      } else if (initial == "object") {
        object += 1
      }
    }
    return [num, object, string]
  }
console.log(anotherOne(listOne))


  //[1998, 4]
  let superValue = blemish(randomNum)
  // console.log(typeof(superValue))
  
  function harderStuff(hard) {
    let result = hard[0] * hard[1]
    return result
  }
  console.log(harderStuff(superValue))
  
  
//make a random array 
// make a function that makes the smallest # and moves 
//it to the back of the list 


const array = [14, 10, 1996, 16, 2, 1998, 21, 3, 2008]
const number = 21

// a function that takes in an array and a number and 
//adds the number to the end of the array 

function joinThem(num1, num2) {
  num1.push(num2)
}

joinThem(array, number)
// console.log(array)
//function that takes in an array and removes 
//the first value from the array

function remove(arr) {
  let x = arr.slice(1)
  console.log(x)
  return x
}
// console.log(remove(array))

//A function that takes in an array and returns the first and 
//second element only
let x = 0
function mutate(arr) {
  x = arr.splice(0,2)
  return x 
}
// console.log(mutate(array))

//A function that takes in an array and a variable index, 
//The function needs to remove the element at that particular 
//index and return an array without that element
// a = [1, 2, 3]
//mixymixy(a, 1)
//[1,3]

function mixymixy(arr, ind) {
  //splice(start, deleteCount)
  let x = arr.splice(ind, 1)
  return x
}

mixymixy(array, 3)
console.log(array)

//A function that takes in an array and removes the 
//smallest value





console.log('hi', firstFn(1,2))










  
  return (
    <div className="App">
      <header className="App-header">     
        <p>
          {5}

        </p>
        
      </header>
    </div>
  );
}

export default App;

// stringRemoval.slice(0, i) + stringRemoval.slice(i+1, -1)


