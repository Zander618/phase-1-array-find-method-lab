// Write a function called `superbowlWin()` in `index.js`:

// * The function should receive 1 argument, an `Array` of JavaScript `Object`s
// * Each object has two properties: `year` and `result`
// * It should use `find()` to test each `Object` to see if the `result` is `"W"` —
//   a win!
// * It should return the `year` when the win occurred (if it occurred at all!)
// * If no win is found, it should return, sadly, `undefined`

function superbowlWin(array){
   const finder = array.find(obj => obj.result === "W")
   if (finder){
        return finder.year
   }
}


// [
//     { year: 2020, result: "W"}
// ]






// function findWin(result, year){
//     if(result === "W"){
//             return year
//         } else{
//             return "undefined"
//         }
//     // }