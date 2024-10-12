function uniqueSortedNumbers(arr) {
    const uniqueNumbers = Array.from(new Set(arr));
    return uniqueNumbers.sort((a, b) => a - b);
  }
  
  const numbers = [5, 2, 3, 5, 2, 8, 1, 3];
  const uniqueSorted = uniqueSortedNumbers(numbers);
  
  console.log(uniqueSorted);

  