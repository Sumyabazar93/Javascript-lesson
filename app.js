var img = {
    file: "c:/images/a123.jpg",
    content: 'muur',
    zuragTanih: function () {
        console.log("Ene zurag deer " + this.content + " baigaa n tanigdlaa");
    }
}
img.zuragTanih();

var myImg = {
    file: "c:/images/a541.jpg",
    content: 'nohoi',
}
var mySuperZuragTanihFunction = img.zuragTanih.bind(myImg);

mySuperZuragTanihFunction();