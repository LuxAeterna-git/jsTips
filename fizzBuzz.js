// My solution
var fizzBuzz = function(n) {
    var result = []

    for (let i = 1; i <=n; i++) {
         if (i%3==0 && i%5==0){
            result.push("FizzBuzz")
            continue
         }
         if (i%3==0){
            result.push("Fizz")
            continue
         }
         if (i%5==0){
            result.push("Buzz")
            continue
         }
         result.push(i.toString())
    }

    return result
};
// This is better solution from leetcode guy
const fizzBuzz = (n) => {
   let res = []

   for (let i = 1; i <= n; i++){
       let string = ''
       if (i % 3 === 0) string += 'Fizz'
       if (i % 5 === 0) string += 'Buzz'

       if (string === '') string += i
       res.push(string)
   }

   return res
};