
const promedio=(numbers)=>
{
    var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
   
    sum += Number(numbers[i]);
  }

  var average = sum / (numbers.length);
  return average;
}

const obtenerMin=(numbers)=>
{

    
      const parsedNumbers = numbers.map(Number);
    
      if (parsedNumbers.some(isNaN)) {
        return null; 
      }
    
      if (parsedNumbers.length === 0) {
        return null; 
      }
    
      let smallestNumber = parsedNumbers[0]; 
    
      for (let i = 1; i < parsedNumbers.length; i++) {
        if (parsedNumbers[i] < smallestNumber) {
          smallestNumber = parsedNumbers[i]; 
        }
      }
    
      return smallestNumber;
}

const obtenerMax=(numbers)=>
{
    
    
  
      const parsedNumbers = numbers.map(Number);
    
      if (parsedNumbers.some(isNaN)) {
        return null; 
      }
    
      if (parsedNumbers.length === 0) {
        return null; 
      }
    
      let largestNumber = parsedNumbers[0]; 
    
      for (let i = 1; i < parsedNumbers.length; i++) {
        if (parsedNumbers[i] > largestNumber) {
          largestNumber = parsedNumbers[i]; 
        }
      }
    
      return largestNumber;
}

export default {promedio,obtenerMin,obtenerMax}