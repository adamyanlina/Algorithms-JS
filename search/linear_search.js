const array = [1, 2, 4, 8, 5, 1, 7, 5, 2, 11];
let count = 0;

// O(n)
const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        count+=1;
        if (array[i] === item) {
           return i;
       }
    }
    return null;
}

console.log(linearSearch(array, 7));
console.log('count = ', count);
