
var kaverit = [];

function paivitaKaveriLista() {
    var kaveriLista = document.getElementById("kaverit");
    kaveriLista.innerHTML = "";
  
    for (var i = 0; i < kaverit.length; i++) {
      var kaveri = kaverit[i];
      var listItem = document.createElement("li");
      listItem.textContent = kaveri; 
      kaveriLista.appendChild(listItem);
    }
  }
  
  

function lisaaKaveri() {
  var uusiKaveriNimi = document.getElementById("uusiKaveri").value;
  if (uusiKaveriNimi) {
    kaverit.push(uusiKaveriNimi);
    paivitaKaveriLista();
    document.getElementById("uusiKaveri").value = "";
  }
}

function poistaKaveri(indeksi) {
  kaverit.splice(indeksi, 1);
  paivitaKaveriLista();
}

function jarjestaKaverit() {
  kaverit.sort();
  paivitaKaveriLista();
}
function lisaaKaveriEnter(event) {
    if (event.key === "Enter") {
      lisaaKaveri();
    }
  }
  