// Muestra cada console.log también en el panel de la página.
const logOriginal = console.log.bind(console);
console.log = (...valores) => {
  logOriginal(...valores);
  const texto = valores.map((valor) => typeof valor === "object" && valor !== null ? JSON.stringify(valor) : String(valor)).join(" ");
  document.getElementById("output").textContent += texto + "\n";
};
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
      console.log(`Edad: ${edad1}`); // Mostramos edad1, que es la variable que estamos modificando.

      edad1 += 2; 
      console.log(`Después de += 2: ${edad1}`);

      edad1 -= 1; 
      console.log(`Después de -= 1: ${edad1}`);

      edad1 *= 2; 
      console.log(`Después de *= 2: ${edad1}`);

      edad1 /= 4; 
      console.log(`Después de /= 4: ${edad1}`);

      edad1 %= 3;
      console.log(`Después de %= 3: ${edad1}`);

      edad1 **= 2; // Equivale a edad1 = edad1 ** 2.
      console.log(`Después de **= 2: ${edad1}`);

// 4. STRING METHODS 
// Los strings no se modifican directamente: cada método devuelve un nuevo resultado.
const textoOriginal = "  JavaScript es interesante  ";
console.log(textoOriginal)

// trim quita espacios solo de los extremos; resulta útil al limpiar datos ingresados.
const textoLimpio = textoOriginal.trim();
console.log("trim():", textoLimpio);

// toUpperCase y toLowerCase cambian las mayúsculas/minúsculas del resultado.
const textoMayusculas = textoLimpio.toUpperCase();
const textoMinusculas = textoLimpio.toLowerCase();
console.log("toUpperCase():", textoMayusculas);
console.log("toLowerCase():", textoMinusculas);

// includes comprueba si existe un fragmento de texto y devuelve true o false.
const contieneJavaScript = textoLimpio.includes("JavaScript");
console.log("includes('JavaScript'):", contieneJavaScript);

// replace devuelve una copia donde se reemplaza la primera coincidencia indicada.
const textoReemplazado = textoLimpio.replace("interesante", "poderoso");
console.log("replace():", textoReemplazado);

// slice extrae una parte: incluye el índice inicial y excluye el índice final.
const fragmento = textoLimpio.slice(0, 10);
console.log("slice(0, 10):", fragmento);

// split separa un string y devuelve un array; aquí usamos el espacio como separador.
const palabras = textoLimpio.split(" ");
console.log("split(' '):", palabras);

// startsWith y endsWith verifican respectivamente el comienzo y el final del texto.
const empiezaConJava = textoLimpio.startsWith("Java");
const terminaConInteresante = textoLimpio.endsWith("interesante");
console.log("startsWith('Java'):", empiezaConJava);
console.log("endsWith('interesante'):", terminaConInteresante);

// 5. Conectamos nombres descriptivos con los valores que se usan en el array final.
// Así el array que ya estaba en el archivo utiliza variables declaradas y definidas.
const persona = lugar;
const edadProximoAno = proximoano;
const esMayorDeEdad = edad >= 18;
const edadesIguales = edad === edad1;
const puedeIngresar = esMayorDeEdad && esEstudiante;
console.log("Persona:", persona);
console.log("Edad el próximo año:", edadProximoAno);
console.log("¿Es mayor de edad?:", esMayorDeEdad);
console.log("¿Las edades son iguales?:", edadesIguales);
console.log("¿Puede ingresar? (mayor de edad y estudiante):", puedeIngresar);

// Crear el array 
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
console.log("Array de datos:", datos); // Muestra en consola todos los datos agrupados.









