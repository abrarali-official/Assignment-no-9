//<!---------------------------------------------Program No 1-------------------------------------------->
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (var i in a) {
    console.log("row " + i);
    for (var j in a[i]) {
        console.log(" " + a[i][j]);
    }
}
//<!---------------------------------------------Program No 2-------------------------------------------->
var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function getNegativeNumbers(array) {

    var negatives = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives;

}
console.log(getNegativeNumbers(myArray));