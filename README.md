Taller #2 de Pruebas Unitarias

Integrantes: 
Ledys Yurayny Torres Ramírez
David Felipe Sánchez Moreno

## Instalación

1. Clona el repositorio, mediante el enlace: https://github.com/Yura1205/TallerPruebasUnitarias2.git
2. Instala las dependencias de node modules mediante el comando: npm install
3. Realiza la configuración del archivo package.json, verificando que se encuentren las dependencies: "express": "^4.19.2", las devDependencies: "@types/jest": "^29.5.12",
    "jest": "^29.7.0", "ts-jest": "^29.1.2","typescript": "^5.4.5"
4. Configurar los scripts del archivo package.json a: "scripts": {"test": "jest" },
5. 

## Uso
Tomamos como ejemplo las funciones del archivo array.ts
```typescript
// Función para verificar si un valor está contenido en un arreglo
export function arrayContainsValue(arr: any[], value: any): boolean {
    return arr.includes(value);
}

// Función para verificar si un valor no está contenido en un arreglo
export function arrayNotContainsValue(arr: any[], value: any): boolean {
    return !arr.includes(value);
}

export const array = ["value1","value2", "value3"]; //Aquí exportamos el array al que le realizaremos las test
```
Procedemos a realizar las Pruebas Unitarias en el archivo array.test.ts
```typescript
import { arrayContainsValue, arrayNotContainsValue, array } from './array'; // realizamos las importaciones pertinentes

describe('arrayContainsValue', () => {
    it('should return true if the array contains the value', () => {
        const value = 'value1';
        const result = arrayContainsValue(array, value);
        expect(result).toBe(true);  //verifica que "value1" se encuentre en el array, debe retornar "true"
    });
    it('should return true if the array contains the value', () => {
        const value = 'value3';
        const result = arrayContainsValue(array, value);
        expect(result).toBe(true); //verifica que "value3" se encuentre en el array, debe retornar "true"
    });


});

describe('arrayNotContainsValue', () => {
    it('should return true if the array does not contain the value', () => {
        const value = 'UNAC';
        const result = arrayNotContainsValue(array, value);
        expect(result).toBe(true); //verifica que "UNAC" no se encuentre en el array, debe retornar "true" en caso de que no se encuentre el valor "UNAC" en el array
    });
});
```
A cada uno de los archivos con funciones a testear (array.ts, div.ts, multi.ts, string.ts y sum.ts) le corresponde su archivo de pruebas (array.test.ts, div.test.ts, 
multi.test.ts, string.test.ts, sum.test.ts), en donde se verifica cuidadosamente el buen funcionamiento de cada una de las funciones.

       
