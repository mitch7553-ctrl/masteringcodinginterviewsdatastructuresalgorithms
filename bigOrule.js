// Big notation    
// What is good code ?
// 1. Readable
// 2. Scalable
// 3. Maintainable

// Big O notation

const large = new Array(1000000).fill('nemo');
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'daria' ,'hank'];

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found Nemo!')
        }
    }
    //Big O and Scalability
    let t1 = performance.now();
    console.log('Call to find Nemo took' + (t1 - t0) + ' milliseconds');
}





// findNemo(nemo);
//findNemo(everyone);
findNemo(large);