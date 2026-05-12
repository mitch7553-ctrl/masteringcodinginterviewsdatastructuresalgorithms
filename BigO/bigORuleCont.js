// // Big notation    
// // What is good code ?
// // 1. Readable
// // 2. Scalable
// // 3. Maintainable

// // Big O notation

// const large = new Array(1000000).fill('nemo');
// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'daria' ,'hank'];

// function findNemo(array) {
//     let t0 = performance.now();
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === 'nemo'){
//             console.log('Found Nemo!')
//         }
//     }
//     //Big O and Scalability
//     let t1 = performance.now();
//     console.log('Call to find Nemo took' + (t1 - t0) + ' milliseconds');
// }





// findNemo(nemo);
//findNemo(everyone);
//findNemo(large); // O(n) - linear time - as the input grows, the time it takes to complete grows at the same rate.


//O(1) - constant time - as the input grows, the time it takes to complete remains the same.
const boxes = [0, 1, 2, 3, 4];
function logfirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}


logfirstTwoBoxes(boxes);// 0(2)