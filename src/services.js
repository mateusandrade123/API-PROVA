export function semaforo(cor) {
    let msg = " ";
    if (cor == "verde") {
        msg = "pode passar meu chapa";
    }
    else if (cor == "vermelho") {
        msg = "Aguarde";
    }
    else {
        msg = "inválido";
    }
    return msg;
}

export function diaSemana(dia) {
    let msg = "";

    if (dia > 6) {
        msg = "dia invalido";
    }

    if (dia == 0) {
        msg = "domingo";
    }

    else if (dia == 1) {
        msg = "segunda";
    }
    else if (dia == 2) {
        msg = "terça";
    }
    else if (dia == 3) {
        msg = "quarta";
    }
    else if (dia == 4) {
        msg = "quinta";
    }
    else if (dia == 5) {
        msg = "sextou";
    }
    else if (dia == 6) {
        msg = "sabadou";
    }
    return msg;
}

export function sequencia(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 0) {
            console.log(i);
        }
    }
    return (i);
}

export function calculo(num) {
    let soma = 3;
    for (let i = soma; i >= 1; i--) {
        soma *= i; 
    }
    return soma;
}