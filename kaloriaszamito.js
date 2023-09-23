function KaloriaSzamlalas() {

    var nem = document.getElementById('nem').value;
    var eletkor = parseInt(document.getElementById('eletkor').value);
    var testsuly = parseFloat(document.getElementById('testsuly').value);
    var magassag = parseFloat(document.getElementById('magassag').value);
    var aktivitas = document.getElementById('aktivitas').value;


    var alapkaloria;
    if (nem === 'ferfi') {
        alapkaloria = 88.362 + (13.397 * testsuly) + (4.799 * magassag) - (5.677 * eletkor);
    } else {
        alapkaloria = 447.593 + (9.247 * testsuly) + (3.098 * magassag) - (4.330 * eletkor);
    }

    var aktivitasSzorzo;
    if (aktivitas === 'alacsony') {
        aktivitasSzorzo = 1.2;
    } else if (aktivitas === 'kozepes') {
        aktivitasSzorzo = 1.55;
    } else if (aktivitas === 'magas') {
        aktivitasSzorzo = 1.725;
    }

    var napiKaloriaBevitel = alapkaloria * aktivitasSzorzo;


    var kaloriaFogyasztas = napiKaloriaBevitel - 500; 

    var kaloriaNovel = napiKaloriaBevitel + 500; 

    var eredmenyDiv = document.getElementById('ki');
    eredmenyDiv.innerHTML = 'Napi ajánlott kalória-bevitel: ' + napiKaloriaBevitel.toFixed(2) + ' kcal<br>' +
                            'Fogyáshoz: ' + kaloriaFogyasztas.toFixed(2) + ' kcal<br>' +
                            'Súlynöveléshez: ' + kaloriaNovel.toFixed(2) + ' kcal';
}