import React from 'react';

function calculateStats(numbers) {
    // Calculate the minimum value
    const min = Math.min(...numbers);

    // Calculate the maximum value
    const max = Math.max(...numbers);

    // Calculate the average value
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    // Calculate the median value
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    const median =
        sortedNumbers.length % 2 === 0
            ? (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2
            : sortedNumbers[middleIndex];

    return (
        <div>
            <p>Minimum: {min}</p>
            <p>Maximum: {max}</p>
            <p>Average: {average}</p>
            <p>Median: {median}</p>
        </div>
    );
}

// Example usage
const numbers = [5, 2, 9, 1, 7];
const stats = calculateStats(numbers);
console.log(stats);