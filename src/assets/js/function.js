// Disable letter
let inputText = document.getElementsByClassName('disable-letter');
for(let i= 0; i < inputText.length; i++) {
  inputText[i].addEventListener('keyup', function(e) {
    var ch = String.fromCharCode(e.which)
    var keycode = e.keyCode;
    if(!(/[0-9]/.test(ch))) {
      if(keycode != 13) {
        e.preventDefault();
      }
    }
  });
}
// Format Number input
let formatHarga;
let formatNumber = document.getElementsByClassName('format-number');
for(let i = 0; i < formatNumber.length; i++) {
  formatNumber[i].addEventListener('keyup', function(e) {
    formatHarga = this;
    formatHarga.value = formatForNumber(this.value);
  });
}

function formatForNumber(angka, prefix){
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
  split       = number_string.split(','),
  sisa         = split[0].length % 3,
  formatHarga    = split[0].substr(0, sisa),
  ribuan         = split[0].substr(sisa).match(/\d{3}/gi);

  if(ribuan){
    let separator = sisa ? '.' : '';
    formatHarga += separator + ribuan.join('.');
  }

  formatHarga = split[1] != undefined ? formatHarga + ',' + split[1] : formatHarga;
  return prefix == undefined ? formatHarga : (formatHarga ? formatHarga : '');
}