const { Console } = require('console');
const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data);

  const splitEntries = data.split('\n');

  // console.log(splitEntries[7], 'next', splitEntries[8], 'next', splitEntries[9], 'next', splitEntries[10], 'next', splitEntries[11], 'next', splitEntries[12])

  const addCals = splitEntries.reduce((aggElves, currCals) => {
    if (Number(currCals)) {
      if (aggElves.length === 0) {
        aggElves.push(Number(currCals));
      } else {
        aggElves[aggElves.length-1] += Number(currCals);
      }
    } else {
      aggElves.push(0);
    }
    return aggElves;
  }, []);


  console.log('addCals', addCals)

  // let highestElf = 0;
  // let highestElfTotal = 0;
  // addCals.forEach((elf, idx) => {
  //   if (elf > highestElfTotal) {
  //     highestElfTotal = elf;
  //     highestElf = idx+1;
  //   }
  // })

  // console.log('the Elf with the most is: ', highestElf, ' with ', highestElfTotal, ' calories.')

  let highestElf = 0;
  let highestElfTotal = 0;

  let secondElf = 0;
  let secondElfTotal = 0;

  let thirdElf = 0;
  let thirdElfTotal = 0;

  addCals.forEach((elf, idx) => {
    if (elf > highestElfTotal) {
      thirdElf = secondElf;
      thirdElfTotal = secondElfTotal;

      secondElf = highestElf;
      secondElfTotal = highestElfTotal;

      highestElfTotal = elf;
      highestElf = idx+1;
    } else if (elf > secondElfTotal) {
      thirdElf = secondElf;
      thirdElfTotal = secondElfTotal;

      secondElf = idx+1;
      secondElfTotal = elf;
    } else if (elf > thirdElfTotal) {
      thirdElf = idx+1;
      thirdElfTotal = elf;
    }

  });

  const totals = highestElfTotal + secondElfTotal + thirdElfTotal;

  console.log('the Elf with the most is: ', highestElf, ' with ', highestElfTotal, ' calories.')
  console.log('the top 3 elves carry: ', totals, ' calories.')

});