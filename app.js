function Materi(une, ungu) {
    this.ungu = ungu;
    this.une = une;
}
Materi.prototype.haragdah = function () {
    console.log(this.une + " Unetei materi");
}

// var m1 = new Materi(1500, "red");

function Hun(ner, nas, undur, huis, une, ungu){
    Materi.call(this, une, ungu);
    this.ner = ner;
    this.nas = nas;
    this.undur = undur;
    this.huis = huis;
}
Hun.prototype = Object.create(Materi.prototype);
Hun.prototype.ideh = function (hool) {
    this.hool = hool;
    console.log(this.ner + " nertei " + this.nas + " nastai " + this.undur + " undurtei " + this.huis + " huistei hun " + this.hool + " hool idlee " + this.une + " amitai " + this.ungu + " hun");
}

function Amitan(nas, une, ungu) {
    Materi.call(this, une, ungu);
    this.nas = nas;
    // var arr = [1500, 'red'];
    // Materi.apply(this, arr);
}
Amitan.prototype = Object.create(Materi.prototype);
Amitan.prototype.hoolloh = function (hool) {
    this.hool = hool;
    console.log(this.nas + ' Nastai ' + this.une + " unetei " + this.ungu + ' ungutei amitan hoololooo' + this.hool + " idlee");
}
var unee = new Amitan(20, 40000, 'alag');
var ymaa = new Amitan(5, 80000, 'black');
var hun = new Hun("Bold", 42, 189, 'ER', 7, 'bor');

hun.ideh("Buuz");
ymaa.hoolloh('hog');
unee.haragdah();