# desafios_entregables_JS

## Desafio complementario I
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
<<<<<<< HEAD

## Desafio obligatorio I
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


## Desafio complementario 2
    ** El nombre de la carpeta que lo contiene es 'desafio_obligatorio_1' **

    Codigo JavaScript simulador de operacion de compras ejecutado por alerts en el navegador.

    El codigo propone elegir entre tres items, los cuales se identifican por codigos numericos  [1,2,3].
    Al item elegido se lo somete a una funcion para calcular el iva y las cuotas para luego sumarlo al precio final. 
    Tambien se da la opcion de aplicar un codigo de descuento.
    
    
    ADICIONAL: Este codigo es igual al entregado en el desafio pasado, con la diferencia que se usan arrays con objetos dentro para almacenar productos y se     usa un array para simular un carrito de compras. 
    El carrito de compras, ademas de detallar el nombre del producto con su precio, muestra cual es el total a pagar hasta el momento de realizada la             operacion.

    - Fecha de creacion: 05/09/2022
    - Fecha de finalizacion: 05/09/2022
    
    ### • Concepto:
    En este codigo se simula una operacion de compra de un e-commerce, haciendo uso de funciones para simplificar el codigo.

    Se daran tres articulos con sus respectivos precios y se le pedira al usuario que ingrese el numero que representa al item.

    Se establecieron dos funciones por separado, una que contiene las operaciones que se le aplicara al monto del producto (como IVA y calculo de cuotas), y otra donde se haran todas las operaciones por parte del usuario, como elegir las cuotas.
