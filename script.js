let usuarioActual = null;

function mostrarLoginForm() {
  ocultarContenido();
  document.getElementById('loginForm').style.display = 'block';
}

function iniciarSesion() {
  const username = document.getElementById('username').value;
  usuarioActual = { username };
  actualizarPanelUsuario();
  ocultarContenido();
  document.getElementById('bienvenida').style.display = 'block';
  return false; // Evita el envío del formulario
}

function actualizarPanelUsuario() {
  const panelUsuario = document.getElementById('user-panel');
  if (usuarioActual) {
    panelUsuario.innerHTML = `<span id="username">Usuario: ${usuarioActual.username}</span>
                              <button class="menu-btn" onclick="cerrarSesion()">Cerrar Sesión</button>`;
  } else {
    panelUsuario.innerHTML = `<span id="username">Usuario: Invitado</span>
                              <button class="menu-btn" onclick="mostrarLoginForm()">Iniciar Sesión</button>`;
  }
}

function cerrarSesion() {
  usuarioActual = null;
  actualizarPanelUsuario();
  ocultarContenido();
  document.getElementById('bienvenida').style.display = 'block';
}

// Resto del código sin cambios
