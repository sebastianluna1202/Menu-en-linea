let platosDelMenu = [
    plato1 = {
        plato: "Corte de carne", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "1.jpg",
    },
    plato2 = {
        plato: "Ensalada de camarones", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "2.jpg",
    },
    plato3 = {
        plato: "Ensalada de pollo", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "3.jpg",
    },
    plato4 = {
        plato: "Pasta", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "4.jpg",
    },
    plato5 = {
        plato: "Hamburguesa con papas", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "5.jpg",
    },
    plato6 = {
        plato: "Lasaña", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "6.jpg",
    },
    plato7 = {
        plato: "Mole", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "7.jpg",
    },
    plato8 = {
        plato: "Pizza gourmet", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "8.jpg",
    },
    plato9 = {
        plato: "Alitas de pollo", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "9.jpg",
    },
    plato10 = {
        plato: "Tacos", 
        descripcion: 2,
        tipo: "almuerzo", 
        precio: "$25",
        nombreArchivo: "10.jpg",
    },
    plato11 = {
        plato: "Cafe negro", 
        descripcion: 2,
        tipo: "desayuno", 
        precio: "$25",
        nombreArchivo: "11.jpg",
    },
    plato12 = {
        plato: "Capuccino", 
        descripcion: 2,
        tipo: "desayuno", 
        precio: "$25",
        nombreArchivo: "12.jpg",
    },
    plato13 = {
        plato: "Chilaquiles", 
        descripcion: 2,
        tipo: "desayuno", 
        precio: "$25",
        nombreArchivo: "13.jpg",
    },
    plato14 = {
        plato: "Club sandwich", 
        descripcion: 2,
        tipo: "desayuno", 
        precio: "$25",
        nombreArchivo: "14.jpg",
    },
    plato15 = {
        plato: "Croaissant", 
        descripcion: 2,
        tipo: "desayuno", 
        precio: "$25",
        nombreArchivo: "15.jpg",
    },
    plato16 = {
        plato: "Malteada de chocolate", 
        descripcion: 2,
        tipo: "desayuno", 
        precio: "$25",
        nombreArchivo: "16.jpg",
    },
    plato17 = {
        plato: "Club sandwich", 
        descripcion: 2,
        tipo: "desayuno", 
        precio: "$25",
        nombreArchivo: "17.jpg",
    },
    plato18 = {
        plato: "Panqueques", 
        descripcion: 2,
        tipo: "desayuno", 
        precio: "$25",
        nombreArchivo: "18.jpg",
    },
    plato19 = {
        plato: "Chocoflan", 
        descripcion: 2,
        tipo: "postre", 
        precio: "$25",
        nombreArchivo: "19.jpg",
    },
    plato20 = {
        plato: "Ensalada de crema", 
        descripcion: 2,
        tipo: "postre", 
        precio: "$25",
        nombreArchivo: "20.jpg",
    },
    plato21 = {
        plato: "Galleta", 
        descripcion: 2,
        tipo: "postre", 
        precio: "$25",
        nombreArchivo: "21.jpg",
    },
    plato22 = {
        plato: "Gelatina", 
        descripcion: 2,
        tipo: "postre", 
        precio: "$25",
        nombreArchivo: "22.jpg",
    },
    plato23 = {
        plato: "Helado", 
        descripcion: 2,
        tipo: "postre", 
        precio: "$25",
        nombreArchivo: "23.jpg",
    },
    plato24 = {
        plato: "Macarons", 
        descripcion: 2,
        tipo: "postre", 
        precio: "$25",
        nombreArchivo: "24.jpg",
    },
    plato25 = {
        plato: "Pastel de chocolate", 
        descripcion: 2,
        tipo: "postre", 
        precio: "$25",
        nombreArchivo: "25.webp",
    },
    plato26 = {
        plato: "Pay de queso", 
        descripcion: 2,
        tipo: "postre", 
        precio: "$25",
        nombreArchivo: "26.jpg",
    }
]
section2 = document.getElementById("section-2")
menuAlmuerzo = platosDelMenu.filter( plato => plato.tipo == "almuerzo")
menuDesayuno = platosDelMenu.filter( plato => plato.tipo == "desayuno")
menuPostre = platosDelMenu.filter( plato => plato.tipo == "postre")

function constructorDePlato(ruta, nombre, descripcion, precio) {
    elemento = `
    <div class="container_plato" >
        <img src="./assets/Imagenes/menu/${ruta.nombreArchivo}">
        <h2>${nombre.plato}</h2>
        <p>${descripcion.descripcion}</p>
        <h3>${precio.precio}</h3>
    </div> 
    `
    return elemento
}
function constructorDeCodigo(menu) {
    let plato 
    let container = []
    for ( i = 0 ; i > menu.length ; i++ ) {
        plato = constructorDePlato(menu[i], menu[i], menu[i], menu[i])
        container.unshift(plato)
    }
    let codigo = container.join("") //se puede usar unshift tambien
    return codigo
}

let imprimir= constructorDeCodigo(menuDesayuno)
console.log(imprimir)




