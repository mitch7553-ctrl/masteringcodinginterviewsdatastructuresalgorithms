//Big O Rule 2: Drop the Constants


function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

0(1 + n/2 + 1) // After removing the constants, we get O(n/2) which is O(n) - linear time - as the input grows, the time it takes to complete grows at the same rate.