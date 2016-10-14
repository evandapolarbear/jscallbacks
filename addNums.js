const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function addNumbers (sum, numsLeft, completionCallback) {
  let num = 0
  if (numsLeft > 0){
     reader.question("Numbers plz", function (answer) {
      num = parseInt(answer);



      sum += num
      numsLeft -= 1
      console.log(sum)
      addNumbers(sum, numsLeft, completionCallback)
    });
  } else{
    completionCallback(sum)
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
