var number = [45, 65, 78, 12, 3, 54, 65];
function getArraySum(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var result = getArraySum(number);
console.log("Total sum of the numbers: ", result);