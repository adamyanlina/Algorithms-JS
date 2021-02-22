const array = [1, 2, 4, 50, 0, 8, 5, 1, 7, 5, 2, 11];
let count = 0;

// O(log2(n) * 2)
const quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        count++;
        if (i === pivotIndex) continue;
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array));
console.log(count);
