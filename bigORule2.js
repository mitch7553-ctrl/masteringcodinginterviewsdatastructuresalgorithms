// Big notation    
// What is good code ?
// 1. Readable
// 2. Scalable
// 3. Maintainable

// Big O notation

// O(n) Lesson 

const large = new Array(1000000).fill('nemo');
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'daria' ,'hank'];

function findNemo(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found Nemo!')
        }
    }
}





// findNemo(nemo);
//findNemo(everyone);
findNemo(large); // O(n) - linear time - as the input grows, the time it takes to complete grows at the same rate.