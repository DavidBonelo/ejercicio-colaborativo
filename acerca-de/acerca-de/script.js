document.addEventListener("DOMContentLoaded", function () {
    // Obtener la sección principal "Acerca de"
    const aboutSection = document.getElementById("acerca");

    // Agregar un evento de mouseover a la sección principal
    aboutSection.addEventListener("mouseover", function () {
        // Cambiar el color de fondo cuando el mouse está sobre la sección
        aboutSection.style.backgroundColor = "#f0f0f0";
    });

    // Agregar un evento de mouseout a la sección principal
    aboutSection.addEventListener("mouseout", function () {
        // Restaurar el color de fondo cuando el mouse sale de la sección
        aboutSection.style.backgroundColor = "";
    });

    // También, cambiemos el color de fondo de las secciones secundarias al pasar el ratón
    const subSections = document.querySelectorAll("#mision, #por-que-elegirnos, #nuestra-historia");
    subSections.forEach(function (section) {
        section.addEventListener("mouseover", function () {
            section.style.backgroundColor = "#e0e0e0";
        });

        section.addEventListener("mouseout", function () {
            section.style.backgroundColor = "";
        });
    });
});