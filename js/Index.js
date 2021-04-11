
let iconoMenu = document.getElementById("iconoDeMenu");
let estadoMenu = true;
iconoMenu.addEventListener('click', (e) => {
    e.preventDefault()
    let menu = document.getElementById("menuDesplegable");
    if (estadoMenu) {
        menu = menu.classList.remove("hidden");
        estadoMenu = false;
    } else {
       menu = menu.classList.add("hidden");
       estadoMenu = true;
    }
});




