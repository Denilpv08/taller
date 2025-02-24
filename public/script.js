document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const mensajeDiv = document.getElementById("mensaje");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita que se recargue la página
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        mensajeDiv.innerHTML = `<p style="color:green;">✅ ${data.message}</p>`;
      } else {
        mensajeDiv.innerHTML = `<p style="color:red;">❌ ${data.message}</p>`;
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      mensajeDiv.innerHTML = `<p style="color:red;">⚠ Error en el servidor</p>`;
    }
  });
});
