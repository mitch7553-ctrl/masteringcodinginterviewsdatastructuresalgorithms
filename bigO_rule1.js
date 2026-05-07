// Big O rules 1. Worst case 
// 2. Remove constants
// 3. Different inputs should have different variables  
//4. Drop non dominant terms
// Big O rule 1


//Rule 1: Worst case scenario 
const large = new Array(1000000).fill('nemo');
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin',  'gill', 'bloat', 'nigel', 'squirt', 'daria' ,'hank','nemo'];

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++){
        console.log('running');
        if (array[i] === 'nemo'){
            console.log('Found Nemo!')
            break;
        }
    }
    //Big O and Scalability
    let t1 = performance.now();
    console.log('Call to find Nemo took' + (t1 - t0) + ' milliseconds');
}





// findNemo(nemo);
//findNemo(everyone);
findNemo(large);