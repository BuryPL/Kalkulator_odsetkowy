'use strict';

function obliczZysk(wplata,iloscLat,okresKapitalizacji, oprocentowanie, podatek) {
    if (podatek) {
        var oprocentowanieOpodatkowane = oprocentowanie * 0.89;
    }else{
        var oprocentowanieOpodatkowane = oprocentowanie;
    }
    var kapital = wplata*Math.pow(1+(oprocentowanieOpodatkowane/okresKapitalizacji),(iloscLat*okresKapitalizacji));
//    return (parseFloat("kapital").toFixed(2));
    return kapital;
}

function oblicz() {
    var wplata = parseInt(document.getElementById("wplata").value);
    var iloscLat = parseInt(document.getElementById("ilosc_lat").value);
    var okresKapitalizacji = parseInt(document.getElementById("okres_kapitalizacji").value);
    var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value)/100;
    var podatek = document.getElementById("podatek").checked;
    var wynik = obliczZysk(wplata,iloscLat,okresKapitalizacji,oprocentowanie,podatek);
    console.log(wynik);
    document.getElementById("wynik").innerHTML = wynik;
}