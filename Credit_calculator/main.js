function krediHesapla() {
  var cekilecekTutar, vade;
  var aylikTaksit, odenecekTutar;
  var faiz;

  cekilecekTutar = document.getElementById("txtKrediTutari").value;
  var liste = document.getElementById("listeVade");
  vade = liste.options[liste.selectedIndex].value;
  faiz = document.getElementById("faizTutari").value;

  if (vade == 12) {
    odenecekTutar = cekilecekTutar * faiz;
    aylikTaksit = odenecekTutar / vade;
  }

  if (vade == 24) {
    odenecekTutar = cekilecekTutar * faiz * 1.2;
    aylikTaksit = odenecekTutar / vade;
  }

  if (vade == 36) {
    odenecekTutar = cekilecekTutar * faiz* 1.3;
    aylikTaksit = odenecekTutar / vade;
  }

  if (vade == 48) {
    odenecekTutar = cekilecekTutar * faiz* 1.4;
    aylikTaksit = odenecekTutar / vade;
  }

  document.querySelector("#sonuc").innerHTML =
    "Geri ödenecek toplam tutar " +
    odenecekTutar +
    "<br>" +
    "Aylık taksit tutarı " +
    aylikTaksit;
}
