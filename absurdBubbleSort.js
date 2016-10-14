const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
  reader.question(`Iz ${el1} bigger dan ${el2}?`, answer => {
    answer === 'yes' ? callback(true) : callback(false)
  });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        arr[i] = [arr[i + 1], arr[i + 1] = arr[i]][0]
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }
};

function absurdBubbleSort(arr, sortCb) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
      sortCb(arr)
    }
  }
  outerBubbleSortLoop(true)
}

absurdBubbleSort([1,2,3], arr => {
  console.log(`hurray this was crazay ${arr}`)
  reader.close()
});

// askIfGreaterThan(2, 4, val => console.log(`I was ${val}`));

innerBubbleSortLoop([1,3,2,6,7,4] , 0, false, (arr) => console.log(`${arr}`));
