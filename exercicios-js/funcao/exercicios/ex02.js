function definirClasseTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3) {
        console.log('O triangulo eh Equilatero')
    } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log('O triangulo eh Isosceles')
    } else {console.log('O triangulo eh Escaleno')}
}

definirClasseTriangulo(2,2,2)
definirClasseTriangulo(2,2,3)
definirClasseTriangulo(2,4,3)
definirClasseTriangulo(1,2,2)
