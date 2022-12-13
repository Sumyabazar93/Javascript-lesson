// var math = {
//     abs: function (too) {
//         if (too < 0) return 0 - too;
//         else return too;
//     }
// }
// console.log(math.abs(-2250));


// console.log(findOutAges());
// console.log(ages);
// console.log(isFullAges);

// var ages = findOutAges();
// function findOutAges() {
//     var ages = [];
//     for (var i = 0; i < birthYears.length; i++) {
//         ages.push(new Date().getFullYear() - birthYears[i]);
//     }
//     return ages;
// }

// var isFullAges = isFullAge();
// function isFullAge() {
//     var isFullAges = [];
//     for (var i = 0; i < ages.length; i++) {
//         isFullAges.push(ages[i] >= 18);
//     }
//     return isFullAges;
// }

var birthYears = [1981, 2005, 1950, 1986, 1948];

var ages = processArray(birthYears, findOutAges);

console.log(ages);
console.log(processArray(ages, isFullAge));

console.log(processArray(ages, function (el) {
    return el >= 65;
}));


function processArray(myArr, fn) {
    var arr = [];

    for (var i = 0; i < myArr.length; i++) {
        arr.push(fn(myArr[i]));
    }
    return arr;
}
function findOutAges(el) {
    return new Date().getFullYear() - el;
}
function isFullAge(el) {
    return el >= 18;
}