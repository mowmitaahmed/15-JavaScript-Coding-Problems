var num = 2.4999999;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);

for (let i = 0; i < 10; i++) {
    var randomNum = Math.random()*6;
    var output = Math.round(randomNum);
    console.log(output);
}