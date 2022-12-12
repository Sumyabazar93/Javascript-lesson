var img = {
    file: "c:/images/a123.jpg",
    content: 'muur',
    zuragTanih: function (color, size) {
        console.log("Ene zurag deer " + color + " ungutei " + size + "  hemjeetei " + this.content + " baigaa n tanigdlaa");
    }
}
img.zuragTanih('har', 'bytshan');

var myImg = {
    file: "c:/images/a541.jpg",
    content: 'nohoi',
}
// Bind
var mySuperZuragTanihFunction = img.zuragTanih.bind(myImg);
mySuperZuragTanihFunction();

// Call

img.zuragTanih.call(myImg, 'nogoon', 'dund zergiin');

// Apply

var args = ['ygaan', 'avarga'];
img.zuragTanih.apply(myImg, args);