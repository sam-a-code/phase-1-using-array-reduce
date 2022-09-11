const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// const totalBatteries = batteryBatches.reduce(function(countObj, currentNumber) {
//     if (currentNumber in countObj) {
//       countObj[currentLetter]++;
//     } else {
//       countObj[currentLetter] = 1;
//     }
//     return countObj;
//   }, {});


  const totalBatteries = batteryBatches.reduce(function(accumulator, element) {
    return element + accumulator
  })