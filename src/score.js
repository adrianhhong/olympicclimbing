/**
 * Shuffle array
 * @param {number[]} array - An array of numbers
 * @returns {number[]} the original array, but th elements shuffled around
 */
const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

/**
 * Return indexed array
 * @param {number} length - Length of array
 * @returns {number[]} An array of length 'length' with the index number in that indexed position
 */
const returnPositionsArray = (length) => {
  const positionsArray = [];
  for (let i = 1; i <= length; i++) {
    positionsArray.push(i);
  }
  return positionsArray;
};

/**
 * Return combined scores
 * @param {number} numEvents
 * @param {number} numParticipants
 * @returns {number[]} Returns each participant's combined score after numEvents
 */
const returnCombinedScores = (numEvents, numParticipants) => {
  const scoresInEachEvent = [];
  for (let i = 0; i < numEvents; i++) {
    scoresInEachEvent.push(
      shuffleArray([...returnPositionsArray(numParticipants)])
    );
  }
  const combinedScores = new Array(numParticipants).fill(1);
  for (let i = 0; i < numParticipants; i++) {
    for (let j = 0; j < numEvents; j++) {
      combinedScores[i] = combinedScores[i] * scoresInEachEvent[j][i];
    }
  }
  return combinedScores;
};

/**
 * Used to get a percentage in arrays
 * @param {number[]} dividendArray
 * @param {number[]} divisorArray
 * @returns An array where every element is divided by dividend / divisor
 */
const divideArrays = (dividendArray, divisorArray) => {
  let finalArray = [];
  for (let i = 0; i < dividendArray.length; i++) {
    finalArray.push(dividendArray[i] / divisorArray[i]);
  }
  return finalArray;
};

const main = (samples = 100000, numEvents = 3, numParticipants = 8) => {
  const totalAppearances = new Array(numParticipants ** 3).fill(0);
  const goldMedal = new Array(numParticipants ** 3).fill(0);
  const silverMedal = new Array(numParticipants ** 3).fill(0);
  const bronzeMedal = new Array(numParticipants ** 3).fill(0);
  const totalMedal = new Array(numParticipants ** 3).fill(0);

  for (let sampleNumber = 0; sampleNumber < samples; sampleNumber++) {
    const combinedScores = returnCombinedScores(numEvents, numParticipants);
    const sortedCombinedScores = combinedScores.sort((a, b) => a - b);
    for (let i = 0; i < numParticipants; i++) {
      totalAppearances[sortedCombinedScores[i]]++;
      if (i === 0) {
        goldMedal[sortedCombinedScores[i]]++;
        totalMedal[sortedCombinedScores[i]]++;
      }
      if (i === 1) {
        silverMedal[sortedCombinedScores[i]]++;
        totalMedal[sortedCombinedScores[i]]++;
      }
      if (i === 2) {
        bronzeMedal[sortedCombinedScores[i]]++;
        totalMedal[sortedCombinedScores[i]]++;
      }
    }
  }
  return [
    divideArrays(goldMedal, totalAppearances),
    divideArrays(silverMedal, totalAppearances),
    divideArrays(bronzeMedal, totalAppearances),
    divideArrays(totalMedal, totalAppearances),
  ];
};

export const xaxis = returnPositionsArray(120);

export const graph = main();
