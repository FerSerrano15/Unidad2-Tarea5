class Pila {
    constructor() {
        this.elementos = [];
    }

    agregar(dato) {
        this.elementos.push(dato);
    }

    eliminar() {
        return this.elementos.pop();
    }

    primer() {
        return this.elementos[this.elementos.length - 1];
    }

    estaVacia() {
        return this.elementos.length === 0;
    }

    tamaño() {
        return this.elementos.length;
    }

    imprimir() {
        return this.elementos.join(' <- ');
    }
}

class Cola {
    constructor() {
        this.elementos = [];
    }

    agregar(dato) {
        this.elementos.push(dato);
    }

    eliminar() {
        return this.elementos.shift();
    }

    primer() {
        return this.elementos[0];
    }

    estaVacia() {
        return this.elementos.length === 0;
    }

    tamaño() {
        return this.elementos.length;
    }

    imprimir() {
        return this.elementos.join(' -> ');
    }
}

const cola = new Cola();
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach(num => cola.agregar(num));

console.log(cola.imprimir());
console.log('Primer valor:', cola.primer());
console.log('Elimina el primer valor:', cola.eliminar());
console.log('Tamaño de la cola:', cola.tamaño());
console.log('Muestra si está vacía:', cola.estaVacia());

const pila = new Pila();
const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
NUMEROS.forEach(num => pila.agregar(num));

console.log(pila.imprimir());
console.log('Primer valor:', pila.primer());
console.log('Elimina el primer valor:', pila.eliminar());
console.log('Tamaño de la pila:', pila.tamaño());
console.log('Muestra si está vacía:', pila.estaVacia());
