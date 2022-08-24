# desafios_entregables_JS

## Desafio complementario I
    Codigo JavaScript de un mini BlackJack ejecutado por alerts en el navegador.

    La funcion random (lineas 15 - 16 - 17) fue sacada de google con el proposito de generar numeros aleatorios en un rando determinado. Es la unica parte del codigo que no fue escrito a mano. El resto del codigo fue pensado y maquetado en papel para luego ser escrito a mano, sin hacer uso de ningun recurso online u offline.

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