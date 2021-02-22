const array = [1, 2, 4, 50, 0, 8, 5, 1, 7, 5, 2, 11];
let count = 0;

// O(n ^ 2)     ==>     O(k * n ^ 2)
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count++;
        }
        let temp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = temp;
    }
    return array;
}

console.log(selectionSort(array));
console.log(count);
