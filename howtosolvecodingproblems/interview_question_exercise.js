//Givve 2 arrays, create a function that let's user know (true/false) 
// whether these tow arrays contain any common items 
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
// const array2 ['z', 'y', 'i'];
//should return flase .
//-------- 
//const array1 = ['a', 'b', 'c', 'x'];
// const array2 ['z', 'y', 'x'];
//should return true 

// 2 parameters - arrays 
// return true or false 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
function containsCommonItem(array1, array2)  {
    for (let i=0; i < array1.length; i++) {
        for (let j=0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
            }

            }
        }
         return false 
    }
   


containsCommonItem(array1, array2)
//0(n^2)