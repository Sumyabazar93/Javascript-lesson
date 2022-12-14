// var a = [];

// a.push(34);
// a.push("hello");
// a.push(function () {
//     console.log("Sainu massiv dotor");

//     return function () {
//         console.log('Massiv dotorh funkts dotorh');
//         return function () {
//             console.log('Inception!!!');
//         }
//     }
// })
// console.log(a);
// console.log(a[2]()()());

function prepare() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function () {
                    console.log(j);
                };
            })(i)
        );
    }
    return arr;
}

var massive = prepare();

massive[0]();
massive[1]();
massive[2]();

console.log(massive);