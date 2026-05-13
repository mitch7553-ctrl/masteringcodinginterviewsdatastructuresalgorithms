//Arrays 
const strings = ['a', 'b', 'c','d'];
//4*4  16  bytes of storage 



//push 
strings.push('e');

//pop
strings.pop();// 0(1)
strings.pop();


//unshift
strings.unshift('x')

//splice 
strings.splice(2, 0, 'alien'); //0(n/2)


console.log(strings)
