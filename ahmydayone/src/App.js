import './App.css';

// const Plus = (first, second) => {
//   return 
// }

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