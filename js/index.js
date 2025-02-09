// Mostrar el modal de bienvenida cuando la página se carga
window.onload = function() {
    const modalBienvenida = document.getElementById("modal-bienvenida");
    const cerrar = document.querySelector("#modal-bienvenida .cerrar");

    // Mostrar el modal de bienvenida
    modalBienvenida.classList.add("mostrar");

    // Cerrar el modal al hacer clic en la "X"
    cerrar.addEventListener("click", () => {
        modalBienvenida.classList.remove("mostrar");
    });

    // Cerrar el modal al hacer clic fuera del contenido
    modalBienvenida.addEventListener("click", (e) => {
        if (e.target === modalBienvenida) {
            modalBienvenida.classList.remove("mostrar");
        }
    });
};