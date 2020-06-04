// Binary search in Javascript

function binarySearch(arr, elem) {

    //setting the index on start
    var start = 0;
    
    // defining the end of the or last element of the array
    var end = arr.length - 1;

    //defining the middle 
    var middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// for binary search to work correct , the array must be sorted
console.log( binarySearch([2,5,6,9,13,15,28,30], 15));
 