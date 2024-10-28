
/*const there =  (x,y, z) => {
 
    let result = x * y + z
    return result
}
 
there(7,30, 12)
console.log(there())*/




// const sum = (x, y, z) => {
//     let result = (x % y) + z;
//     return result; 
// }


// sum(15, 24, 56)
// console.log(sum(15, 24, 56));

for(let i = 0; i < 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i, "-- FIZZBUZZ")
    }else if(i % 3 === 0){
        console.log(i,"-- FIZZ")
    }else if(i % 5 === 0){
        console.log(i,"-- BUZZ")
    }else {
        console.log(i + "--" + i)
    }
}