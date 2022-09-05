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

function compraCalc (a, b, c) {

  let totalMasUnidades = a * b

  let totalMasUnidadesMasIVA = totalMasUnidades + (totalMasUnidades * 0.21)

  let totalACarrito = Math.floor(totalMasUnidadesMasIVA)

  let aCarrito = [
    {articulo : c, precio: totalACarrito}
  ]

  carrito.push(aCarrito[0])
}

function eleccionProducto(){

  let productoAComprar = Number(prompt('\n Si desea comprar Intel i5 9400f ingrese 1 \n\n Si desea comprar intel i7 9700k ingrese 2 \n\n Si desea comprar intel i9 9900k ingrese 3\n\n'))

  if (productoAComprar == 1) {

    let unidades = Number(prompt('Cuantas unidades?'))

    let nombre = articulos[0].nombre

    let precio = articulos[0].precio

    compraCalc(precio, unidades, nombre)


  }else if (productoAComprar == 2){
      
    let unidades = Number(prompt('Cuantas unidades?'))

    let nombre = articulos[1].nombre

    let precio = articulos[1].precio

    compraCalc(precio, unidades, nombre)


  }else if (productoAComprar == 3){

    let unidades = Number(prompt('Cuantas unidades?'))

    let nombre = articulos[2].nombre

    let precio = articulos[2].precio

    compraCalc(precio, unidades, nombre)

  
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

const articulos = [
  {id:1, nombre:'Intel i5 9400f', precio: 69959,},
  {id:2, nombre:'intel i7 9700k', precio: 129999,},
  {id:3, nombre:'intel i9 9900k', precio: 199899,}
]


let catalogo = articulos.map((catalogo_c)=> `${catalogo_c.id}: ${catalogo_c.nombre} $${catalogo_c.precio}`)
alert(`Esta es nuestra lista de productos:\n\n${catalogo.join('\n\n')}\n\n`)


//alert(`Esta es nuestra lista de productos: ${catalogo.join('\n\n')}\n\n}`)

while (seguirComprando == 0) {

  eleccionProducto()

  let carrito_list = carrito.map((carrito_completo)=> `${carrito_completo.articulo} $${carrito_completo.precio}`)

  const total = carrito.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);

  alert(`Tu carrito: \n\n ${carrito_list.join('\n\n')}\n\n Total a pagar: $${total}`)

  let seguir = prompt('Seguir comprando? [s/N]')

  seguir.toLowerCase


  if (seguir == 'n') {
      
    alert(`Usted abonara un total es de $${Math.floor(total)}.`)

    seguirComprando += 1

    break

  }else {
    continue
  }
}



























































/* 

const articulos = [
  {id:1, nombre:'Intel i5 9400f', precio: 69959,},
  {id:2, nombre:'intel i7 9700k', precio: 129999,},
  {id:3, nombre:'intel i9 9900k', precio: 199899,}
]


const carrito = []

let comprar = prompt('Bienvenido a nuestra tienda, quiere procedes a comprar? [s/N]:')

comprar.toLowerCase

let reset = 0

while (reset == 0){

  if(comprar == 's'){

    let lista_de_articulos = articulos.map((articulo)=> `${articulo.nombre} $${articulo.precio}; id:${articulo.id}`)

    alert(`Esta es nuestra lista de productos: \n\n ${lista_de_articulos.join('\n\n')}\n\n`)

    let articuloElegido = Number(prompt('Ingresa el id del producto que quieres:'))

    total = 0

    if (articuloElegido == 1){

      let unidades = Number(prompt('Cuantas unidades?'))

      total += 69959 * unidades

    }else if (articuloElegido == 2){
      total += 129999 * unidades

    }else if (articuloElegido == 3){
      total += 199899 * unidades

    }

    alert(total)

    carrito.push = [{articuloElegido, total}]

    alert(carrito)
    break

  }else {
    alert('No hay problema!')
    break
  }
} */