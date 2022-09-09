/*

Desafio complementario 3.

Como se puede notar se ha usado el mismo codigo JavaScript que en la primer entrega del proyecto final.

Se aplico DOM de la siguiente manera:
Se aplico una pequeña porcio  de codigo, desde la linea 135 a la linea 155 que lo que hace es, una vez pare el ciclo de compra (por medio de los alerts) se genere un div con el contenido del carrito visible en el html de la pagina. Este div fue colocado en el header para una facil visualizacion. Ademas de agrego un boton (no funcional por el momento) para realizar el pago. Ademas se dio un poco de estilo.

- Fecha de creacion: 08/09/2022
- Fecha de finalizacion: 09/09/2022

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

function eleccionProductoSimplificada(productoAComprar){

  let unidades = Number(prompt('Cuantas unidades?'))

  let unidadesElegidas = unidades

  let nombre = menu[productoAComprar].nombre

  let precio = menu[productoAComprar].precio

  compraCalc(precio, unidades, nombre, unidadesElegidas)
}

function eleccionProducto(){

  let productoAComprar = Number(prompt('\n Si desea comprar la Entrada fría ingrese 0 \n\n Si desea comprar el Corn deluxe ingrese 1 \n\n Si desea comprar las Rabas ingrese 2 \n\n Si desea comprar la Tabla de quesos ingrese 3 \n\n Si desea comprar la Premium salad ingrese 4 \n\n Si desea comprar la Fresh salad ingrese 5\n\n'))

  eleccionProductoSimplificada(productoAComprar)

  return carrito

}


/* 

Variables iniciales ↓ ↓ ↓

*/

let carrito = []


let cuotasIniciales = 0

let seguirComprando = 0

/* 

Objectos por cada plato disponible ↓ ↓ ↓

*/

const menu = [
  {id:0, nombre:'Entrada fría', precio: 4300},
  {id:1, nombre:'Corn deluxe', precio: 2200},
  {id:2, nombre:'Rabas', precio: 3100},
  {id:3, nombre:'Tabla de quesos', precio: 2999},
  {id:4, nombre:'Premium salad', precio: 3350},
  {id:5, nombre:'Fresh salad', precio: 2100},
]

/*
Varibale y alert donde muestra el menu al usuario ↓ ↓ ↓
*/
let nuestroMenu = menu.map((nuestroMenu_c)=> `${nuestroMenu_c.id}: ${nuestroMenu_c.nombre} $${nuestroMenu_c.precio}`)
alert(`Nuestro menu:\n\n${nuestroMenu.join('\n\n')}\n\n`)


/* 
Ciclo que se ejecutara cuando el usuario quiera comprar ↓ ↓ ↓
*/


while (seguirComprando === 0) {

  eleccionProducto()

  let carrito_list = carrito.map((carrito_completo)=> `${carrito_completo.articulo} $${carrito_completo.precio} (${carrito_completo.unidadesTotales})`)

  const total = carrito.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);




  
  
  
  
  
  alert(`Tu carrito: \n\n ${carrito_list.join('\n\n')}\n\n Total a pagar: $${total}`)
  
  let seguir = prompt('Seguir comprando? [s/N]')
  
  if (seguir.toLowerCase() == 'n') {
    
    alert(`Usted abonara un total es de $${Math.floor(total)}.\n\nAhora Puede disfrutar de nuestra pagina!`)
    

    /*

    Mostrar en carrito ↓ ↓ ↓

    */

    const carritoId = document.querySelector('.card');

    let divCard = document.createElement('div');

    divCard.innerHTML = `
    <div class="card-body" id="cart-card">
      ${carrito_list.join('<br>')}
      
      <br><br>
      
      <span id="iva">*Se ha sumado 10% de IVA*</span>
      
      <br><br>
  
      <p class='total-a-pagar'>Total a pagar: $${total}</p>
  
      <a href="#"><button type="button" class="btn btn-success">PAGAR</button></a>
    </div>`;


    carritoId.appendChild(divCard);

    seguirComprando += 1
    break

  }else {
    continue
  }
}



/* 

Codigo del entregable: 

*/























































