const input  = document.getElementById('text');
const boton  = document.getElementById('btn');
const cont   = document.getElementById('qrcode');
let qrObject = null;

boton.addEventListener('click', () => {
  const data = input.value.trim();
  if (!data) return alert('Escribe algo primero');

  // Si ya existe un QR, lo limpiamos
  if (qrObject) {
    cont.innerHTML = '';
  }
  qrObject = new QRCode(cont, {
    text: data,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
});