/*

Codigo JavaScript simulador de operacion de compras ejecutado por alerts en el navegador.

El codigo propone elegir entre tres items, los cuales se identifican por codigos numericos  [1,2,3].
Al item elegido se lo somete a una funcion para calcular el iva y las cuotas para luego sumarlo al precio final. 

- Fecha de creacion: 30/08/2022
- Fecha de finalizacion: 30/08/2022

*/


alert('Catalogo: \n\nIntel i5 9400f ($69959) \n\nIntel i7 9700k ($129999) \n\nIntel i9 9900k ($199899)\n\n')

/*

Funciones del programa ↓ ↓ ↓

*/
function cuotas(a){

  let cuotasElegidas = Number(prompt('Puede pagar en cuotas sin interes, en cuantas cuotas va a pagar? [1, 3, 6, 12]'))
  
  cuotasIniciales += cuotasElegidas

  let iva = a + ( a* 0.21)/cuotasElegidas
  
  let resultado = iva
  
  return resultado 

}

function compraCalc (a) {

  let unidades = Number(prompt('Cuantas unidades?: '))

  let totalBruto = a * unidades

  let totalNeto = cuotas(totalBruto)

  carrito += totalNeto
}

function eleccionProducto(start){

  let productoAComprar = Number(prompt('\n Si desea comprar Intel i5 9400f ingrese 1 \n\n Si desea comprar intel i7 9700k ingrese 2 \n\n Si desea comprar intel i9 9900k ingrese 3\n\n'))

  let resultado = start

  if (productoAComprar == 1) {

      resultado += Intel_i5_9400f

  }else if (productoAComprar == 2){
      
      resultado += intel_i7_9700k

  }else if (productoAComprar == 3){

      resultado += intel_i9_9900k
  
  }

  return resultado

}

/* 

Variables iniciales ↓ ↓ ↓

*/
let carrito = 0

let Intel_i5_9400f = 69959

let intel_i7_9700k = 129999

let intel_i9_9900k = 199899

let cuotasIniciales = 0

let seguirComprando = 0

while (seguirComprando == 0) {

  let productoSeleccionado = eleccionProducto(0)

  compraCalc(productoSeleccionado)

  let seguir = prompt('Seguir comprando? [s/N]')

  if (seguir == 'N') {
      
      alert(`Usted abonara un total es de ${Math.floor(carrito)} cada mes durante en un periodo de ${cuotasIniciales} meses`)

      seguirComprando += 1

  }else {
      alert(`Tu carrito tiene un valor de ${Math.floor(carrito)}`)
      continue
  }
}