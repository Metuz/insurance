export function getYear(year) {
   return new Date().getFullYear() - year;
}

export function getBrand(modelo) {
    let incremento;
    switch (modelo) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

export function getPlan(plan) {
    return (plan === 'basic') ? 1.20 : 1.50;
}

export function primeraMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
