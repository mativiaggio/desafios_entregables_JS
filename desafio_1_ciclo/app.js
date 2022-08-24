// let adivinanza = 'pera';

// for (let i = 0; i < 3; i++) {

//     let respuestaUsuario = prompt('Adivinanza: Blanca por dentro, verde por fuera. Si no sabes que es, espera');
//     if (adivinanza === respuestaUsuario){
//         alert('Respuesta correcta');
//         break;
//     } else{
//         alert('Te quedan ' + (2-i) + ' intentos');
//     } if (i == 2) {
//         alert('Llegaste al maximo de respuestas incorrectas')   
//     }
// }




function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


let saldo = 500;

while (saldo > 0) {
    let bienvenida = 'Bienvenido a BlackJack ONLINE!'
    alert(bienvenida)
    let apuesta = Number(prompt(`Tienes un saldo de ${saldo}, por favor ingresa tu apuesta.`))
    if (apuesta <= saldo) {
        
        saldo -= apuesta
        
        let userHand_card1 = random(2, 11);
        let userHand_card2 = random(2, 11);
        let userHand = userHand_card1 + userHand_card2;
        alert(`Dealer: Tu primera carta es ${userHand_card1} y tu segunda carta es ${userHand_card2}, la mano es de ${userHand}`);

        let dealerHand_card1 = random(2, 11);
        let dealerHand_card2 = random(2, 11);
        let dealerHand = dealerHand_card1 + dealerHand_card2;
        alert(`Dealer: Mi primera carta es ${dealerHand_card1} y mi segunda carta es ${dealerHand_card2}, mi mano es de ${dealerHand}`);

        if (userHand > dealerHand && userHand < 22) {
            saldo += apuesta * 2;
            alert(`Felicitaciones! ganaste ${apuesta*2}, ahora tienes ${saldo}`);
            let vaj = prompt('Quieres volver a jugar?: [S/N]')

            if (vaj != 's' && vaj != 'S') {
                break
            } else {
                continue
            }
            

        } else if (userHand < dealerHand && dealerHand < 22) {
            alert(`Lo siento, mas suerte la proxima. Tu saldo es de ${saldo}`);

            let vaj = prompt('Quieres volver a jugar?: [S/N]')
            
            if (vaj != 's' && vaj != 'S') {
                break
            } else {
                continue
            }
        }else {
            saldo += saldo
            alert(`Empate! Tu saldo es ${saldo}`);

            let vaj = prompt('Quieres volver a jugar?: [S/N]')
            
            if (vaj != 's' && vaj != 'S') {
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



