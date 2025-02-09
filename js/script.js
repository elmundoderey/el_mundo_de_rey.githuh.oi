document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        {
            nombre: "Figura de prueba",
            descripcion: "Figura de anime en pose épica.",
            precio: "$30.00",
            unidades: 5,
            imagen: "imagen1.jpg"
        }
    ];

    const galeria = document.getElementById("galeria");
    const modal = document.getElementById("modal");
    const imgModal = document.getElementById("img-modal");
    const nombreModal = document.getElementById("nombre-modal");
    const descripcionModal = document.getElementById("descripcion-modal");
    const precioModal = document.getElementById("precio-modal");
    const unidadesModal = document.getElementById("unidades-modal");
    const cerrar = document.querySelector(".cerrar");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-img" src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
        `;
        galeria.appendChild(div);

        // Agregar evento de clic para abrir el modal con toda la información
        div.querySelector(".producto-img").addEventListener("click", () => {
            imgModal.src = producto.imagen;
            nombreModal.textContent = producto.nombre;
            descripcionModal.textContent = producto.descripcion;
            precioModal.textContent = `Precio: ${producto.precio}`;
            unidadesModal.textContent = `Unidades: ${producto.unidades}`;
            modal.classList.add("mostrar"); // Usar clase en lugar de style.display
        });
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    cerrar.addEventListener("click", () => {
        modal.classList.remove("mostrar"); // Usar clase en lugar de style.display
    });

    // Cerrar el modal si se hace clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("mostrar"); // Usar clase en lugar de style.display
        }
    });
})



;
