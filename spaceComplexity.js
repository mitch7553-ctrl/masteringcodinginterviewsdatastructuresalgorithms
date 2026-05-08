// heap and the stack 
//Heap is where variables are store and the stack is where the functions are remembered
//#5 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {
      console.log("booooo");
    }
  }
  
  // #6 Space complexity O(n)
  function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
      hiArray[i] = "hi";
    }
    return hiArray;
  }
  
  arrayOfHiNTimes(6);