Katas - Ejercicios Simples

Abajo te dejamos katas para practicar. La idea es que las resuelvas en el orden que quieras, pero siempre enfocate en resolverlas practicando TDD y resolviendo de a una cosa a la vez.
Tips

    Cuando estés empezando una Kata, la primera vez no hace falta agregarle ningún requerimiento adicional. Cuando la hagas por segunda vez y cada vez después de esa, fijate si te animás a agregarle algún requerimiento adicional o simplemente probá hacerla diferente a antes.
    No solo te quedes con los requerimientos adicionales que proponemos acá. Inventá los tuyos propios! Agregá requerimientos que creas que pueden ser interesantes o que te ayuden a practicar algo que quieras aprender. Por ejemplo, si querés practicar un patrón de diseño, pensá en cómo podrías implementarlo en la kata.
    Pensá bien cuales son los casos bordes que tenés que cubrir. En muchos casos ayuda antes que nada pensar en los casos negativos en vez de los casos exitosos/positivos.
    Aprovechá las prácticas para acostumbrarte a usar funcionalidades del editor que no soles usar tanto. Investigá atajos de teclado, snippets, y cualquier otra cosa que te ayude a ser más productivo.
    Una vez que termines una Kata, descansá un rato y pasa a otra diferente. Cuando las termines todas, volvé a la primera, hacela desde cero y fijate si podes mejorarla. Pensá en qué tan bien la resolviste antes y si hay algo que podrías hacer diferente.
    No te olvides de hacer commit y push de cada kata que termines. Recordá usar los commits como 'partidas guardadas' del progreso de tu código. Si todos los tests están pasando es un buen momento para hacer commit. Si te quedas atascado, podes descartar todo y volver a un commit anterior, y continuar desde ahí.
    Cuando termines una Kata, publicá en el foro del discord el link al repositorio y comentá cómo la pensaste, desde dónde la empezaste, qué te costó más, y cualquier otra cosa que se te ocurra. La idea es que todos aprendamos de todos!
    ¿Cuantas veces se puede hacer una kata? ¡tantas como quieras!. Hay gente que hace una kata simple todas las mañanas para comenzar el día con una buena práctica.

Kata simple 01 - String Calculator
Requerimientos básicos

    Implementá una función simple llamada add, que toma un string como entrada y devuelve la suma de los números contenidos en él.

type Add = (numbers: string) => number

Un ejemplo de uso sería:

const result = add("1,2,3")
      //^ "6"

Sugerencias de requerimientos adicionales

    Agregá soporte para números negativos.
    Agregá soporte para números decimales.
    Agregá soporte para diferentes delimitadores.
    Agregá soporte para números en notación científica.

Kata 02 - FizzBuzz
Requerimientos básicos

    Implementá una función llamada fizzBuzz que tome un número como entrada y devuelva un string. La función debe devolver "Fizz" si el número es divisible por 3, "Buzz" si es divisible por 5 y "FizzBuzz" si es divisible por ambos.

type FizzBuzz = (number: number) => string

Un ejemplo de uso sería:

const result = fizzBuzz(15)
      //^ "FizzBuzz"

Requerimientos adicionales

    Agregá soporte para números negativos.
    Agregá soporte para números decimales.

Kata simple 03 - Roman Numerals
Requerimientos básicos

    Implementá una función llamada toRoman que tome un número entero como entrada y devuelva su representación en números romanos.

type ToRoman = (number: number) => string

Un ejemplo de uso sería:

const result = toRoman(1994)
      //^ "MCMXCIV"

Sugerencias de requerimientos adicionales

    ¿Qué sucede con números negativos, 0 y decimales?

Kata simple 04 - AST matemático
Requerimientos básicos

    Implementá una función llamada evaluate que tome un string como entrada y devuelva el árbol de sintaxis abstracta (AST) correspondiente. La expresión puede contener números, operadores (+, -, *, /) y paréntesis.

type Evaluate = (expression: string) => ASTNode

Un ejemplo de uso sería:

const result = evaluate("3 + 5 * (2 - 8)")
/*    ^(+)
       / \
      3   (*)
         / \
        5   (-)
            / \
           2   8
*/

Sugerencias de requerimientos adicionales

    Agregá soporte para funciones matemáticas (ej. sin, cos, tan, etc.).
    Agregá soporte para variables y constantes (ej. pi, e, etc.).
    Agregá soporte para la evaluación del AST, devolviendo el resultado de la expresión original.
    Agregá soporte para distintos tipos de notaciones además de la notación infija (ej. notación polaca, etc.).
