const array = [1, 2, 4, 50, 0, 8, 5, 1, 7, 5, 2, 11];
let count = 0;

// O(n ^ 2)
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            count++;
        }
    }
    return array;
}

console.log(bubbleSort(array));
console.log(count);
