const array = [1, 2, 3, 5, 11, 14, 20, 99, 101, 102];   // n = array.length
let count = 0;

// O(log2(n))
const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end)  {
        count+=1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

const recursiveBinarySearch = (array, item, start, end) => {
    let middle = Math.floor((start + end) / 2);
    count++;
    if (item === array[middle]) {
        return middle;
    }
    if (item < middle) {
        return  recursiveBinarySearch(array, item, 0, middle - 1);
    } else {
        return  recursiveBinarySearch(array, item, middle + 1, end);
    }
}

console.log(binarySearch(array, 3));
console.log('count = ', count);

// console.log(recursiveBinarySearch(array, 7, 0, array.length));
// console.log('count = ', count);
