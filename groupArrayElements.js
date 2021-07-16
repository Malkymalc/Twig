function groupArrayElements(array, divisorArg) {
  const errors = [];
  if (!Array.isArray(array)) {
    errors.push('groupArrayElements(): first argument must be an array.');
  }
  if (typeof divisor !== number) {
    errors.push('groupArrayElements(): second argument must be of type number.');
  } else if (divisor < 0 || divisor % 1 !== 0) {
    errors.push('groupArrayElements(): second argument must an integer greater than zero.');
  }
  if (errors.length > 0) {
    errors.forEach(errorMsg => console.error(errorMsg));
  }


  let divisor;
  if (divisorArg > array.length) {
    console.warn(`groupArrayElements(): Divisor provided is greater than number of array elements. Divisor has been set to the number of array elements (${array.length})`);
    divisor = array.length;
  } else {
    divisor = divisorArg
  }


  function groupArray(arrayArg, numberOfDivisions,lengthOfDivisions) {
    return arrayArg.reduce((result, elem, index, array) => {
      const oneBasedIndex = index + 1;
      if (result.length < divisor) {
        if (result.length === (numberOfDivisions -1)) {
          const remainingElements = array.slice(index);
          result.push(remainingElements);
        } else if (oneBasedIndex % lengthOfDivisions === 0 ) {
          const startIndex = oneBasedIndex - lengthOfDivisions;
          const division = array.slice(startIndex, oneBasedIndex);
          result.push(division);
        }
      }
      return result;
    }, [])
  }

  function getMostEvenlyDividedArray(arrayOne, arrayTwo) {
    const evennessOne = Math.abs(arrayOne[0], arrayOne[arrayOne.length-1]);
    const evennessTwo = Math.abs(arrayTwo[0], arrayTwo[arrayTwo.length-1]);
    return evennessOne <= evennessTwo ? arrayOne : arrayTwo;
  }

  const hasRemainder = (array.length % divisor !== 0) ? true: false;
  const lengthOfDivisionsLow = Math.floor(array.length / divisor);
  const lengthOfDivisionsHigh = Math.ceil(array.length / divisor);

  let result;

  if (!hasRemainder) {
    result = groupArray(array, divisor, lengthOfDivisionsLow);
  } else if (hasRemainder) {
    const shortDivisonsArray = groupArray(array, divisor, lengthOfDivisionsLow);
    const longDivisionsArray = groupArray(array, divisor, lengthOfDivisionsHigh);
    const validSolutions = [shortDivisonsArray, longDivisionsArray]
      .filter(array => array.length === divisor);
    const areMultipleSolutions = validSolutions.length > 1;
    result = areMultipleSolutions ? getMostEvenlyDividedArray(shortDivisonsArray, longDivisionsArray)
    : validSolutions[0];
  }
  
  return result;
}
