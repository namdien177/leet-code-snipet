const testArray = [3, 1, 3, 4, 2, 9];

function findDup(nums) {
    let slowIndex = nums[0];                    // 3
    let fastIndex = nums[0];                    // 3

    while (true) {
        slowIndex = nums[slowIndex];            // 4    // 2    // 3
        fastIndex = nums[nums[fastIndex]];      // 2    // 4    // 3
        if (slowIndex === fastIndex) {
            break;
        }
    }

    let ptr1 = nums[0];                         // 3
    let ptr2 = fastIndex;                       // 3

    while (ptr1 != ptr2) {
        ptr1 = nums[ptr1];                      
        ptr2 = nums[ptr2];                      
    }

    return ptr1;
}

console.log(findDup(testArray));
console.time(findDup(testArray));