/*
Variáveis:
    - Podem começar com letra, $ ou _
    - Não podem começar com números
    - É possível usar letras e números
    - É possível usar acentos e símbolos
    - Não podem conter espaços
    - Não podem ser palavras reservadas
    - São case-sensitive
*/

// São do tipo "number":
num1 = 2
console.log(typeof num1) 
num2 = 3.0
console.log(typeof num2)
num3 = NaN
console.log(typeof num3)
num4 = Infinity
console.log(typeof num4)

// São do tipo "string":
string1 = "a"
console.log(typeof string1)
string2 = 'a'
console.log(typeof string2) 
string3 = `a`
console.log(typeof string3)

// São do tipo "boolean":
flag1 = true
flag2 = false
console.log(typeof flag1)
console.log(typeof flag2)

// São do tipo "object":
object1 = null
console.log(typeof object1)
object2 = [] // array
console.log(typeof object2)
object3 = {}
console.log(typeof object3)
console.log(typeof null) // Sem alocar em uma variável

// É do tipo function
object4 = function(){}
console.log(typeof object4)

// É do tipo undefined
object5 = null
console.log(typeof objetct5) // Alocado em variável
object6 = undefined
console.log(typeof object6)
 