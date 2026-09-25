let pedidos = [];

function guardarPedido() {
  const pedido = "Pedido #" + (pedidos.length + 1);
  pedidos.push(pedido);
  mostrarPedidos();
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function mostrarPedidos() {
  const lista = document.getElementById('lista-pedidos');
  lista.innerHTML = pedidos.map(p => `<li>${p}</li>`).join('');
}

window.onload = () => {
  pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
  mostrarPedidos();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
};
