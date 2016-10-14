const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor(){
    this.stacks = [[3,2,1], [], []]
    // board.init
  }

  isValidMove(start, end) {

    if (start > 2 || start < 0 || end > 2 || end < 0) {
      return false
    }

    const startTower = this.stacks[start]
    const endTower = this.stacks[end]

    if (startTower.length === 0){
      return false
    } else if(startTower.slice(-1)[0] > endTower.slice(-1)[0]){
      return false
    }
    return true
  }

  promptMove(callback) {
    console.log(this.stacks);

    reader.question("Start tower index", function (start) {
      const answer1= parseInt(start)
      reader.question("End tower index",  (end) => {
        const answer2= parseInt(end)

        callback(answer1, answer2)
      });
    });
  }

  move(startTower, endTower) {
    if (this.isValidMove(startTower, endTower)){
      this.stacks[endTower].push(this.stacks[startTower].pop())
    }else{
      console.log("Hella bad move bae")
    }
    console.log(this.stacks)
  }

}

g = new Game
// console.log(g.isValidMove(0,1));
g.move(0,1)
g.move(0,1)
g.move(0,2)
g.move(1,2)
g.move(0,1)
g.move(2,0)
g.move(2,1)
g.move(0,1)

// g.promptMove((a1, a2)  => console.log(a1, a2));
