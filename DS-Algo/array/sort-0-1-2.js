function sort012(arr) {
    let count0 = 0, count1 = 0, count2 = 0;

    for (let num of arr) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
        else count2++;
    }

    let index = 0;
    while (count0--) arr[index++] = 0;
    while (count1--) arr[index++] = 1;
    while (count2--) arr[index++] = 2;

    return arr;
}

// Test
console.log(sort012([0,1,2,0,1,2])); // [0,0,1,1,2,2]
