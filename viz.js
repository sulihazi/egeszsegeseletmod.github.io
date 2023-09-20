function vizszamol(){
    var suly = document.getElementById("suly").value * 1;
    var lbs = suly * 2.20462262;
    var ounce = 28.5735296;
    var kiszamol = (lbs / 2) * ounce;
    var L = kiszamol / 1000;
    document.getElementById("ki").innerHTML = L.toFixed(1) + " Liter vizet kell innia naponta!";
}