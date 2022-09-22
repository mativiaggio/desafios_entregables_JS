
<div align="center">

# desafios_entregables_JS
</div>

<div align="center">

## Desafio complementario I
</div>

    Codigo JavaScript de un mini BlackJack ejecutado por alerts en el navegador.

    La funcion random (lineas 15 - 16 - 17) fue sacada de google con el proposito de generar numeros aleatorios en un rango determinado. Es la unica parte del codigo que no fue escrito a mano. El resto del codigo fue pensado y maquetado en papel para luego ser escrito a mano, sin hacer uso de ningun recurso online u offline.

    Estoy bastante orgulloso de este mini juego ya que es el primero que hago :).

    - Fecha de creacion: 21/08/2022
    - Fecha de finalizacion: 24/08/2022

```
//-----------↓ ↓ ↓ ↓ CODIGO COPIADO EN GOOGLE ↓ ↓ ↓ ↓--------------------------------------------------------
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
//-----------↑ ↑ ↑ ↑ CODIGO COPIADO EN GOOGLE ↑ ↑ ↑ ↑--------------------------------------------------------
```

### • Concepto:

    En este minujuego se hace uso de un ciclo while, en donde el mismo siempre se ejecuta si el usuario dispone de fondos para apostar.

    En caso de que si disponga de saldo se restara ese monto de sus reservas. Acto seguido se generaran dos valores de cartas tanto para el usuario como para el dealer (haciendo uso de la funcion random).

    El jugador podra pedir una (1) sola carta mas si lo desea, mientras que el dealer debera pedir una (1) mas si su mano tiene un valor menor a 17.

    Luego de eso se hacen las distintas comprobaciones para verificar quien es el ganador.

    En caso de ser el usuario el ganador de la mano se le sumara su apuesta multiplicada por 2 (saldo + apuesta * 2).

    En caso de ser el dealer se notificara al usuario. No se le restara el monto de la apuesta ya que este fue restado al inicio del juego.

<div align="center">

## Desafio obligatorio I
</div>

    ** El nombre de la carpeta que lo contiene es 'desafio_obligatorio_1' **

    Codigo JavaScript simulador de operacion de compras ejecutado por alerts en el navegador.

    El codigo propone elegir entre tres items, los cuales se identifican por codigos numericos  [1,2,3].
    Al item elegido se lo somete a una funcion para calcular el iva y las cuotas para luego sumarlo al precio final. 
    Tambien se da la opcion de aplicar un codigo de descuento.

    - Fecha de creacion: 30/08/2022
    - Fecha de finalizacion: 30/08/2022

### • Concepto:
    En este codigo se simula una operacion de compra de un e-commerce, haciendo uso de funciones para simplificar el codigo.

    Se daran tres articulos con sus respectivos precios y se le pedira al usuario que ingrese el numero que representa al item.

    Se establecieron dos funciones por separado, una que contiene las operaciones que se le aplicara al monto del producto (como IVA y calculo de cuotas), y otra donde se haran todas las operaciones por parte del usuario, como elegir las cuotas.

<div align="center">

## Desafio complementario 2
### ADICIONAL
</div>

    ADICIONAL: Este codigo es igual al entregado en el desafio pasado, con la diferencia que se usan arrays con objetos dentro para almacenar productos y se     usa un array para simular un carrito de compras. 
    El carrito de compras, ademas de detallar el nombre del producto con su precio, muestra cual es el total a pagar hasta el momento de realizada la             operacion.
    
    ** El nombre de la carpeta que lo contiene es 'desafio_complementario_2' **

    Codigo JavaScript simulador de operacion de compras ejecutado por alerts en el navegador.

    El codigo propone elegir entre tres items, los cuales se identifican por codigos numericos  [1,2,3].
    Al item elegido se lo somete a una funcion para calcular el iva y las cuotas para luego sumarlo al precio final. 
    Tambien se da la opcion de aplicar un codigo de descuento.

    - Fecha de creacion: 05/09/2022
    - Fecha de finalizacion: 05/09/2022
    
### • Concepto:
    En este codigo se simula una operacion de compra de un e-commerce, haciendo uso de funciones para simplificar el codigo.

    Se daran tres articulos con sus respectivos precios y se le pedira al usuario que ingrese el numero que representa al item.

    Se establecieron dos funciones por separado, una que contiene las operaciones que se le aplicara al monto del producto (como IVA y calculo de cuotas), y otra donde se haran todas las operaciones por parte del usuario, como elegir las cuotas.

<div align="center">

## Primera entrega del proyecto final.
</div>

    Como se puede notar se ha usado el mismo codigo JavaScript que en la entrega de arrays. Sin embargo tiene una diferencia, se agrego la funcion de, en el alert que muestra el carrito, tambien muestra la cantidad de unidades elegidas por el usuario y se aclara el IVA% que se aplico al producto.

    Notese tambien que se ha cambiado el array de objetos, este array ahora muestra una serie de platos que se pueden pedir a comprar, ya que la tematica del proyecto es de un "ecommerce" de un restaurant de lujo el cual contiene un carrito de compras donde puede pedir y abonar productos para ser enviados por medio de un delivery.

    Ademas, la pagina contiene estilos CSS3 hechos con SCSS. Se tiene en cuenta y se sabe que los mismos no son necesarios en ninguna instancia de entrega, sin embargo decidi incluirlos ya que quiero, en un futuro, mostrar este proyecto como parte de mi portfolio.

    - Fecha de creacion: 06/09/2022
    - Fecha de finalizacion: 07/09/2022

<div align='center'>

_Este es el [figma](https://www.figma.com/file/OiNOwjUaVQjLIKOHWenNgC/JavaScript-Project-Design?node-id=34%3A686) donde voy a ir completando los diseños, en caso de despierte curiosidad._
</div>

<div align="center">

## Desafio complementario 3
</div>

    Como se puede notar se ha usado el mismo codigo JavaScript que en la primer entrega del proyecto final.

    Se aplico DOM de la siguiente manera:
    Se aplico una pequeña porcio  de codigo, desde la linea 135 a la linea 155 que lo que hace es, una vez pare el ciclo de compra (por medio de los alerts) se genere un div con el contenido del carrito visible en el html de la pagina. Este div fue colocado en el header para una facil visualizacion. Ademas de agrego un boton (no funcional por el momento) para realizar el pago. Ademas se dio un poco de estilo.

    - Fecha de creacion: 08/09/2022
    - Fecha de finalizacion: 09/09/2022

<div align="center">

## Desafio obligatorio 2
</div>

    Se implemento DOM y eventos en menu.html, creando un layout con todos los items dentro del array de objetos. 
    Para un mayor orden en el codigo, se hizo uso de import y export con el objetivo de almacenar el array de objetos y las funciones en archivos separados.    Decidi usar esto ya que mi array de objetos es muy grande, debido a toda la informacion que quiero mostrar en cada producto, y molestaba un poco a la hora de trabajar.


    Hay un error en el codigo, al sumar cantidades en el carrito la suma se hace de manera erronea, suma mas de lo que deberia, intente solucionarlo de mil y un formas pero no pude, esperaba que me pudieras dar una mano con eso. Igualmente voy a seguir intentado arreglarlo.


    - Fecha de creacion: 11/09/2022
    - Fecha de finalizacion: 15/09/2022

<div align="center">

## Segunda preentrega del proyecto final
</div>

    Se utilizo el codigo obtenido hasta la ultima entrega, añadiendo JSON local storage para almacenar los elementos del carrito en caso de que el usuario seleccionara alguno. Tambien se cambio el lugar donde aparece el carrito. El icono en la navbar de una bolsa lleva al html cart.html, en donde se encontraran todos los productos.

    - Fecha de creacion: 15/09/2022
    - Fecha de finalizacion: 22/09/2022

### DUDA
La unica forma en la que pude mover el carrito a otro html es dejando el codigo del carrito en el html de menu. Tuve que hacer un display none visibility hidden mediante css. No lo pude solucionar, si borro la porcion de codigo perteneciente al html de carrito en menu deja de andar en el html de carrito. Pero si lo dejo en ambos anda.
Esperaba que me pudieras ayudar con eso.

Dejo el link de la pagina hosteada ---> [LINK](https://mativiaggio.github.io/glum/pages/menu.html)