//1.VARIABLES
const nombre = "Lucía"; //no se puede reasignar
let edad = 18;    //se puede reasignar
edad = 19; 
var año = 2026;   //var tambien se puede reasiganar solo que es una forma antigua de programar
año = 2027;
var ciudad = "Bogotá";
ciudad = "Cali"; 



console.log(nombre); // Lucía
console.log(edad);   // 19
console.log (año) ;
console.log(ciudad); 

//2,3.DATA TYPES Y OPERATORS
const nombre1 = "Jorge";
let edad1 = 8;
const esEstudiante = true;
const direccion = null;
let telefono = undefined ;
const lugar = {
  departamento: "Cundinamarca",
  municipio: "Soacha"
};

//aritmetica
const numeros = [1, 2, 3];

    // Operadores aritméticos
      //suma
      const proximoano = edad1 + 1;
      const sumaNumeros = numeros[0] + numeros[1];
      console.log (`Suma ${proximoano}, ${sumaNumeros}`)

      //resta
      const anoanterior = edad - 1;
      const restanumeros = numeros[2] - numeros [0]
      console.log (`Resta: ${anoanterior}, ${restanumeros}`)

      //multiplicacion
      const doble = edad * 3
      const multiplicar = numeros [1] * numeros [2]
      console.log(`Multiplicacion: ${doble}, ${multiplicar}`)
      
      //división
      const mitad = edad / 2;
      const divisionNumeros = numeros[2] / numeros[0];
      console.log(`División: ${mitad}, ${divisionNumeros}`);

      // Módulo: devuelve el residuo de una división
      const residuo = edad % 2;
      console.log(`Residuo al dividir la edad entre 2: ${residuo}`);

      // Exponente
      const edadAlCuadrado = edad ** 2;
      console.log(`Edad al cuadrado: ${edadAlCuadrado}`);
 
      // Operadores de comparación
      const edad2 = 19;

      console.log(`¿Es igual a 19? ${edad2 === 19}`);       // true
      console.log(`¿Es diferente de 18? ${edad2 !== 18}`);  // true
      console.log(`¿Es mayor que 18? ${edad2 > 18}`);       // true
      console.log(`¿Es menor que 21? ${edad2 < 21}`);       // true
      console.log(`¿Es mayor o igual a 19? ${edad2 >= 19}`); // true
      console.log(`¿Es menor o igual a 18? ${edad2 <= 18}`); // false


      // Operador de asignación
      edad1 = 20; 
      console.log(`Edad: ${edad}`);

      edad1 += 2; 
      console.log(`Después de += 2: ${edad}`);

      edad1 -= 1; 
      console.log(`Después de -= 1: ${edad}`);

      edad1 *= 2; 
      console.log(`Después de *= 2: ${edad}`);

      edad1 /= 4; 
      console.log(`Después de /= 4: ${edad}`);

      edad1 %= 3;
      console.log(`Después de %= 3: ${edad}`);

      edad1 **= 2; // Equivale a edad = edad ** 2
      console.log(`Después de **= 2: ${edad}`);
// Crear el array usando las variables
const datos = [
  nombre,
  edad,
  esEstudiante,
  direccion,
  telefono,
  persona,
  numeros,
  edadProximoAno,
  sumaNumeros,
  esMayorDeEdad,
  edadesIguales,
  puedeIngresar
];


