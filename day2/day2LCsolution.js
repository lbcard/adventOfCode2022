const fs = require('fs');

// opponent
// a rock
// b paper
// c scissors

// you
// x rock
// y paper
// z scissors

// score:
// 1 rock
// 2 paper
// 3 scissors

// 0 lose
// 3 draw
// 6 win

// pt2:
// x I lose
// y I draw
// z I win

function calculateMoveScore(move){
  if(move === 'X') return 1;
  if(move === 'Y') return 2;
  if(move === 'Z') return 3;
}

function calculateResult(opp, me){
  if(me === 'X') {
    if(opp === 'A'){
      return 3;
    }
    if(opp === 'B'){
      return 0;
    }
    if(opp === 'C'){
      return 6;
    }
  }
    
  if(me === 'Y') {
    if(opp === 'A'){
      return 6;
    }
    if(opp === 'B'){
      return 3;
    }
    if(opp === 'C'){
      return 0;
    }
  }

  if(me === 'Z') {
    if(opp === 'A'){
      return 0;
    }
    if(opp === 'B'){
      return 6;
    }
    if(opp === 'C'){
      return 3;
    }
  }
}

function calculateMyResScore(myRes) {
  if(myRes === 'X') return 0;
  if(myRes === 'Y') return 3;
  if(myRes === 'Z') return 6;
}

function calculateMyMoveScore(oppMove, myResScore) {
  if(myResScore === 0) {
    if(oppMove === 'A') return 3;
    if(oppMove === 'B') return 1;
    if(oppMove === 'C') return 2;
  }
  if(myResScore === 3) {
    if(oppMove === 'A') return 1;
    if(oppMove === 'B') return 2;
    if(oppMove === 'C') return 3;
  }
  if(myResScore === 6) {
    if(oppMove === 'A') return 2;
    if(oppMove === 'B') return 3;
    if(oppMove === 'C') return 1;
  }
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data);

  const splitEntries = data.split('\n');

  console.log(splitEntries);

  let totalScore = 0;

  splitEntries.forEach(round => {

    const roundSplit = round.split(' ');
    // // PT 1
    // const [ oppMove, myMove ] = roundSplit;
    // const moveScore = calculateMoveScore(myMove); // score for move played e.g. rock
    // const resultScore = calculateResult(oppMove, myMove); // socre for win lose draw etc...

    // totalScore += moveScore + resultScore;

    // PT 2
    const [ oppMove, myRes ] = roundSplit;
    const resScore = calculateMyResScore(myRes);
    const myMove = calculateMyMoveScore(oppMove, resScore);

    console.log('resScore', resScore)
    console.log('myMove', myMove)

    totalScore += resScore + myMove;
  })

  console.log(`Final result score is: ${totalScore}`)

});