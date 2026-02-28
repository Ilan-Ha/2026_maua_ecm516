// Ctrl k Ctrl c -> coloca //
// Ctrl k Ctrl u -> tira //
// rodar -> node (nome.js)
//declarando constantes
    /// em javaScript
        // variável -> ponteiro (variavel de referência, não tem tipo)
// const nome = 'josé' 
// console.log(nome)
// nome = 'José Silva' //(erro, mudando constante)

// const idade = 17
// console.log(typeof(idade)) // o tipo da valor que a variavel aponta

        // Declarando Variaveis
//  let a = 2
//  console.log(a)
//  let passouDeAno = true
//  console.log(passouDeAno)
//  a = 3
//  console.log(a)
//  let b
//  console.log(b)
//  b = 1.5
//  console.log(b)
//  console.log(typeof(b))
//  b = "abc"
//  console.log(b)
//  console.log(typeof(b))

    // var
// var c = 2
// c = 3
// var e antigo em relacao a let e const

     // porque nao e bom usar var mais
// var linguagem = 'javascript'
// console.log('Aprendendo '+ linguagem)
// var linguagem = 'java'
// console.log(`Aprendendo ${linguagem}`) /// (crase -> operador de interpolacao, colocar entre)
/// linguagem teve que ser re declarada (var adimite isso so porque pode)

// var idade = 18
// console.log(`oi, ${nome}`)
// if(idade >= 18)
// {
//     var nome = 'João'
//     console.log("Parabéns, " + nome + ". Você pode dirigir")
// }
// console.log('Até, '+ nome)
/// variavel declarada depois consegue ser usada antes, codigo funciona mesmo que "nome" ainda não tenha sido declarada
    /// Ordem de declaração: var idade
    /// Ordem de execução: idade = 18, console.log(''),, if(){}
/// Funciona porque primeiro passa processano só as declarações -> criando a tabela de simbolos (estrutura de dados, tudo inicia undifined)
/// Depois faz uma segunda passagem fazendo as ordens de execução

    /// em java
// String nome = "José"; -> linguagem estaticamente tipada (feita pelo compilador)

//console.log('Hello, Word')


// let a = 2
// console.log(a)
// console.log(typeof(a))
// a = "abc"
// console.log(a)
// console.log(typeof(a))
/// Variavel vive na stack -> ponteiro sem tipo
/// Objetos fican no heap e tem tipo (2, number) ("abc", String)

/// coerção implicita e explicita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// console.log(typeof(n3))
// /// implicitamente converte em string (não foi dito para fazer isso)
// const n4 = n1 + Number(n2)
// console.log(n4)
// /// coerção explicita

/// javascript: 
    /// null: variavel existe na stack e não aponta para ninguem (variavel esta definida)
    /// undifined: variavel não aponta e tambem não não aponta (variavel esta indefinida)

/// operadores de comparacao por igualdade
    ///: == e === (triplo originou para corrigir um problema do duplo)
        ///: == é instável (varia de versão em versão)
// console.log(1 == 1) /// true
// console.log(1 === 1) /// true
// console.log(1 == '1') /// true (faz coerção implicita)
// console.log(1 === '1') /// false
// console.log(true == 1) /// true
// console.log(true === 1) /// false
// console.log(1 == [1]) /// true (1 é igual a uma lista com 1 na primeira posição?)
// console.log(1 === [1]) /// false
// console.log(null == undefined) /// true
// console.log(null === undefined) /// false
// console.log([] == false) /// true
// console.log([] === false) /// false
// console.log([] == []) /// false
// console.log([] === []) /// false
    /// === -> 2 comparações:
        /// tipo igual?
        /// valor igual?

/// coleções    
/// variavel aponta para lista, lista aponta para os objetos
/// a lista e dinamica
// v1 = [] /// List <Objects> v1 = new ArrayList <>();
// console.log(v1.length)
// v1[0] = 2
// console.log(v1.length)
// v1[1] = "abc"
// console.log(v1.length)
// v2 =[10] /// lista de tamho 1, na posição 0 tem o 10
// v1[10] = "João" /// comprimento 11
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i <v1.length; i++){
//     console.log(v1[i])
// }

/// funções
    /// function (verbosa) e arrow function
// function hello(){
//     console.log('Oi')
// }
// hello()
//     /// sobrecarga
//         /// em java
//         /**
//          * class calculadora{
//          *  int somar(int a, int b){
//          *      return a + b
//          *      }
//          * String somar(String a, String b){
//          *      return a + b
//          *      }
//          * }
//          */
// function hello(nome){
//     console.log(`Oi, ${nome}`)
// }
// hello('Maria')
// /// por causa da dupla passagem do javascript, não existe sobrecarga de função, a função só é redefinida
//     /// o mesmo que hello(undefined)

// function soma(a, b){
//     return a + b
// }
// const resultado = soma(2,3)
// console.log(resultado)

// /// função anonima (não tem nome)
// /// constante aponta para uma função
// const dobro = function (n){
//     return 2*n
// }
// console.log(dobro(6))

/// valores padrões para os parâmetros

// const triplo = function ( n = 5){
//     return 3 * n
// }

// console.log(triplo()) /// 5 * 3
// console.log(triplo(undefined)) /// 5 * 3
// console.log(triplo(1)) /// 1 * 3

    /// arrow functions : () => {} Objeto do tipo arrow function
        /// vem da calculo lambida
// const falarOi = () => {console.log('oi')}
// falarOi()

// const falarOi = (nome) => {console.log(`Oi, ${nome}`)}
// const falarOi_2 = nome => {console.log(`Oi, ${nome}`)} // só um argumento -> pode omitir ()
// const falarOi_3 = nome => console.log(`Oi, ${nome}`) // só uma instrução -> pode omitir {}

// falarOi('Maria')
// falarOi_2('Maria')
// falarOi_3('Maria')

// const somar = (a, b) => {return a + b}
// const somar_2 = (a, b) => a + b /// so uma instrução, omitindo chaves e return -> return fica implicito
// const somar_3 = (a, b) => {a + b} /// calcula e não retorna nada

// console.log(somar(2,3))
// console.log(somar_2(2,3))
// console.log(somar_3(2,3))

