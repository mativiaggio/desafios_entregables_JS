/*

Codigo JavaScript simulador de operacion de compras ejecutado por alerts en el navegador.

El codigo propone elegir entre tres items, los cuales se identifican por codigos numericos  [1,2,3].
Al item elegido se lo somete a una funcion para calcular el iva y las cuotas para luego sumarlo al precio final. 


ADICIONAL: Este codigo es igual al entregado en el desafio pasado, con la diferencia que se usan arrays con objetos dentro para almacenar productos y se usa un array para simular un carrito de compras. 
El carrito de compras, ademas de detallar el nombre del producto con su precio, muestra cual es el total a pagar hasta el momento de realizada la operacion.

- Fecha de creacion: 05/09/2022
- Fecha de finalizacion: 05/09/2022

*/



/*

Funciones del programa ↓ ↓ ↓

*/

function compraCalc (a, b, c, d) {

  let unidadesTotales = d

  let totalMasUnidades = a * b

  let totalMasUnidadesMasIVA = totalMasUnidades + (totalMasUnidades * 0.10)

  let totalACarrito = Math.floor(totalMasUnidadesMasIVA)

  let aCarrito = [
    {articulo : c, precio: totalACarrito, unidadesTotales}
  ]

  carrito.push(aCarrito[0])
}

function eleccionProducto(){

  let productoAComprar = Number(prompt('\n Si desea comprar la Entrada fría ingrese 1 \n\n Si desea comprar el Corn deluxe ingrese 2 \n\n Si desea comprar las Rabas ingrese 3 \n\n Si desea comprar la Tabla de quesos ingrese 4 \n\n Si desea comprar la Premium salad ingrese 5 \n\n Si desea comprar la Fresh salad ingrese 6\n\n'))

  if (productoAComprar == 1) {

    let unidades = Number(prompt('Cuantas unidades?'))

    let unidadesElegidas = unidades

    let nombre = menu[0].nombre

    let precio = menu[0].precio

    compraCalc(precio, unidades, nombre, unidadesElegidas)


  }else if (productoAComprar == 2){
      
    let unidades = Number(prompt('Cuantas unidades?'))

    let unidadesElegidas = unidades

    let nombre = menu[1].nombre

    let precio = menu[1].precio

    compraCalc(precio, unidades, nombre, unidadesElegidas)


  }else if (productoAComprar == 3){

    let unidades = Number(prompt('Cuantas unidades?'))

    let unidadesElegidas = unidades

    let nombre = menu[2].nombre

    let precio = menu[2].precio

    compraCalc(precio, unidades, nombre, unidadesElegidas)

  
  }else if (productoAComprar == 4){

    let unidades = Number(prompt('Cuantas unidades?'))

    let unidadesElegidas = unidades

    let nombre = menu[3].nombre

    let precio = menu[3].precio

    compraCalc(precio, unidades, nombre, unidadesElegidas)

  
  }else if (productoAComprar == 5){

    let unidades = Number(prompt('Cuantas unidades?'))

    let unidadesElegidas = unidades

    let nombre = menu[4].nombre

    let precio = menu[4].precio

    compraCalc(precio, unidades, nombre, unidadesElegidas)

  
  }else if (productoAComprar == 6){

    let unidades = Number(prompt('Cuantas unidades?'))

    let unidadesElegidas = unidades

    let nombre = menu[5].nombre

    let precio = menu[5].precio

    compraCalc(precio, unidades, nombre, unidadesElegidas)

  
  }

  return carrito

}


/* 

Variables iniciales ↓ ↓ ↓

*/

let carrito = []


let cuotasIniciales = 0

let seguirComprando = 0

/* 

Objectos por cada articulo disponible ↓ ↓ ↓

*/

const menu = [
  {id:1, nombre:'Entrada fría', precio: 4300},
  {id:2, nombre:'Corn deluxe', precio: 2200},
  {id:3, nombre:'Rabas', precio: 3100},
  {id:4, nombre:'Tabla de quesos', precio: 2999},
  {id:5, nombre:'Premium salad', precio: 3350},
  {id:6, nombre:'Fresh salad', precio: 2100},
]


let catalogo = menu.map((catalogo_c)=> `${catalogo_c.id}: ${catalogo_c.nombre} $${catalogo_c.precio}`)
alert(`Esta es nuestra lista de productos:\n\n${catalogo.join('\n\n')}\n\n`)


//alert(`Esta es nuestra lista de productos: ${catalogo.join('\n\n')}\n\n}`)

while (seguirComprando === 0) {

  eleccionProducto()

  let carrito_list = carrito.map((carrito_completo)=> `${carrito_completo.articulo} $${carrito_completo.precio} (${carrito_completo.unidadesTotales}) *Se ha sumado 10% de IVA*`)

  const total = carrito.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);

  alert(`Tu carrito: \n\n ${carrito_list.join('\n\n')}\n\n Total a pagar: $${total}`)

  let seguir = prompt('Seguir comprando? [s/N]')

  if (seguir.toLowerCase() == 'n') {
      
    alert(`Usted abonara un total es de $${Math.floor(total)}.\n\nAhora Puede disfrutar de nuestra pagina!`)

    seguirComprando += 1
    break

  }else {
    continue
  }
}


























































