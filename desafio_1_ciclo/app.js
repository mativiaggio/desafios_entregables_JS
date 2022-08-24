/*

Codigo JavaScript de un mini BlackJack ejecutado por alerts en el navegador.

La funcion random (lineas 15 - 16 - 17) fue sacada de google con el proposito de generar numeros aleatorios en un rando determinado. Es la unica parte del codigo que no fue escrito a mano. El resto del codigo fue pensado y maquetado en papel para luego ser escrito a mano, sin hacer uso de ningun recurso online u offline.

Estoy bastante orgulloso de este mini juego ya que es el primero que hago :).

- Fecha de creacion: 21/08/2022
- Fecha de finalizacion: 24/08/2022

*/

//-----------↓ ↓ ↓ ↓ CODIGO COPIADO EN GOOGLE ↓ ↓ ↓ ↓--------------------------------------------------------
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
//-----------↑ ↑ ↑ ↑ CODIGO COPIADO EN GOOGLE ↑ ↑ ↑ ↑--------------------------------------------------------


/*---------------------------------------
Bienvenida y entrada de saldo para jugar
---------------------------------------*/

let bienvenida = 'Bienvenido a BlackJack ONLINE!'
    
alert(bienvenida)

let reset = true

let saldo = 0

let agregarSaldo = Number(prompt(`Cuentas con un saldo de ${saldo}. Cuanto dinero quieres agregar?`))

if (reset == true){

    saldo += agregarSaldo

}else {

}

/*----------------------------------------------------------------------------------
Resolucion del desafio, aqui es donde esta el ciclo a presentar como respuesta ↓ ↓ ↓
----------------------------------------------------------------------------------*/

while (saldo > 0) {
    
    let apuesta = Number(prompt(`Tienes un saldo de ${saldo}, por favor ingresa tu apuesta.`))
    
    if (apuesta <= saldo) {
    
        saldo -= apuesta
    
        let userHand_card1 = random(2, 11);
    
        let userHand_card2 = random(2, 11);
    
        let userHand = userHand_card1 + userHand_card2;
    
        alert(`Dealer: Tu primera carta es ${userHand_card1} y tu segunda carta es ${userHand_card2}`);
    
        let otraCarta = prompt(`Dealer: Tienes ${userHand}. Quieres otra carta? [S/N]`);
    
        if (otraCarta == 's') {
    
            let userHand_card3 = random(2,11);
    
            userHand += userHand_card3
    
            alert(`Tu mano es de ${userHand}`);
    
        } else {
    
            alert('Continuemos');
    
        }
    
        if (userHand > 21) {
    
            alert(`Lo siento, mas suerte la proxima. Tu saldo es de ${saldo}`)
    
            continue
    
        }else {             
    
        }
    
        let dealerHand_card1 = random(2, 11);
    
        let dealerHand_card2 = random(2, 11);
    
        let dealerHand = dealerHand_card1 + dealerHand_card2;
    
        alert(`Dealer: Mi primera carta es ${dealerHand_card1} y mi segunda carta es ${dealerHand_card2}, mi mano es de ${dealerHand}`);
        
        if (dealerHand < 17) {
        
            alert(`Como mi mano es menor a 17 debo pedir una carta mas.`)
        
            let dealerHand_card3 = random(2,11);
        
            dealerHand += dealerHand_card3
        
            alert(`Mi mano es de ${dealerHand}`);
        
        }
        
        if (userHand == dealerHand) {
        
            saldo += apuesta
        
            alert(`Empate! Tu saldo es ${saldo}`);


            
            let vaj = prompt('Quieres volver a jugar?: [S/N]')
            

            
            if (vaj != 's' && vaj != 'S') {
            
                alert('Hasta luego!')
            
                break

            } else {

                continue
            
            }
        
        }else if (userHand > dealerHand && userHand < 22) {
        
            saldo += apuesta * 2;
        
            alert(`Felicitaciones! ganaste ${apuesta*2}, ahora tienes ${saldo}`);
        
            let vaj = prompt('Quieres volver a jugar?: [S/N]')

            if (vaj != 's' && vaj != 'S') {
            
                alert('Hasta luego!')
            
                break

            } else {

                continue
            
            }
        
        }else if(dealerHand > userHand && dealerHand < 22) {
        
            alert(`Lo siento, mas suerte la proxima. Tu saldo es de ${saldo}`);

            let vaj = prompt('Quieres volver a jugar?: [S/N]')
            
            if (vaj != 's' && vaj != 'S') {
        
                alert('Hasta luego!')
        
                break

            } else {

                continue
        
            }
        
        }else {
        
            saldo += apuesta * 2
        
            alert(`Felicitaciones! ganaste ${apuesta*2}, ahora tienes ${saldo}`)
        
            let vaj = prompt('Quieres volver a jugar?: [S/N]')
            
            if (vaj != 's' && vaj != 'S') {
        
                alert('Hasta luego!')
        
                break

            } else {

                continue
            }
        }
    
    }else if (apuesta > saldo) {
    
        alert(`Tu saldo es de ${saldo}, no te alcanza!!`)
    
    }else {
    
        alert('Ingresaste un dato incorrecto!!')
    }
}



