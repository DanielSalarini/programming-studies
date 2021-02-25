function tipoTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado1 == lado3) {
        console.log('Equilátero')
    } else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log('Escaleno')
    } else {
        console.log('Isósceles')
    }
}

tipoTriangulo(12, 12, 12)
tipoTriangulo(10, 10, 11)
tipoTriangulo(1, 2, 3)