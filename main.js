
// main.js: Código JS movido desde index.html

// Mostrar datos generales en la tarjeta (mantener funcionalidad)
const datosGeneralesCard = document.getElementById("datosGeneralesCard");
function mostrarDatosGeneralesCard() {
  const empleado = localStorage.getItem('dg_empleado') || '';
  const bin = localStorage.getItem('dg_bin') || '';
  const bcv = localStorage.getItem('dg_bcv') || '';
  datosGeneralesCard.innerHTML =
    `<div class='dato-row'><strong>Empleado:</strong> <span>${empleado || '-'}</span></div>`+
    `<div class='dato-row'><strong>BIN:</strong> <span>${bin || '-'} bs</span></div>`+
    `<div class='dato-row'><strong>BCV:</strong> <span>${bcv || '-'} bs</span></div>`;
  datosGeneralesCard.style.display = 'none';
}
mostrarDatosGeneralesCard();

// --- Alternar tablas ---
const btnAlternar = document.getElementById('btnAlternar');
const tabla = document.getElementById('tabla');
const tablaClientes = document.getElementById('tablaClientes');
let mostrandoTablaClientes = false;

btnAlternar.addEventListener('click', function() {
  mostrandoTablaClientes = !mostrandoTablaClientes;
  if (mostrandoTablaClientes) {
    tabla.style.display = 'none';
    tablaClientes.style.display = 'table';
    btnAlternar.textContent = 'Alternar';
  } else {
    tabla.style.display = 'table';
    tablaClientes.style.display = 'none';
    btnAlternar.textContent = 'Alternar';
  }
});

// --- Aquí irá el resto de la lógica JS movida desde index.html ---
