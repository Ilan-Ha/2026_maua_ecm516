/// executar node --watch (nome do arquivo)
    /// ctrl + c finaliza

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

    /// listas / vetores / arrays / arranjos
// v1 = []
// console.log(v1.length)
// v1[0] = 'abc'
// console.log(v1.length)
// v1[10] = 2.5
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i<v1.length; i++){
//     console.log(v1[i])
// }

    /// funções -> cidadãos de primeira classe

// const f1 = () => {}
// const f2 = function(){}

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Cristina', 'Alex']
    /// filter -> higher order function (função que recebe função como parâmetro)
// const apenasComA = nomes.filter((nome) => {return nome.startsWith('A')}) /// se começa com A retorna true, e o filter usa isso para adicionar ou não
// /// const apenasComA = nomes.filter(function(nome){return nome.startsWith('A')}) /// igual
// /// const apenasComA = nomes.filter(nome => {return nome.startsWith('A')}) /// igual
// /// const apenasComA = nomes.filter(nome => nome.startsWith('A')) /// igual
// console.log(apenasComA)

/// [A, A, R, C, A ]
// const iniciais = nomes.map(nome => nome.charAt(0))
// console.log(iniciais)

// const res = nomes.every(n => n.startsWith('A')) /// é verdade que todo nome começa com A ?
// const res = nomes.some(n => n.startsWith('A')) /// é verdade que algum nome começa com A ?
// console.log(res)


// const numeros = [1,2,3,4]
// const res = numeros.reduce((ac, v) => ac + v)
    /// ac -> acumulador, v -> proximo valor
    /// ac = 1, v = 2 numeros[1] -> ac = 1 + 2, v = 3 numeros[2] -> ac = 1 + 2 + 3, v = 4 numeros[3] -> ac = 1 + 2 + 3 + 4, v => reduce finaliza
    /// reduce compacta a coleção em um único valor
// console.log(res)

// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
// }

// umaFuncao()

// function f(funcao){
//     funcao()
// }

// f(umaFuncao)
/// f(umaFuncao()) === undefined() /// uma funcao nao retorna nada entao nada e passado como parametro

// function f2(funcao){
//     console.log(funcao())
// }

// let outraFuncao = function(){
//     console.log('Fui armazenada em uma variável')
//     return () => 'oi'
// }

// f2(outraFuncao)


// function f (funcao){
//     funcao
// }

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         return () => "A"
//     }
//     return outraFuncao()
//     /// return outraFuncao() -> retorna o retorno da função ao invés da função
// }
/// g() é uma função
/// g()() chama g e o retorno de g
/// g()()( chama g, o retorno de g e o retorno do retorno de g)
//console.log(g()())

/// f(g) -> não aparece nada
/// f(g)() -> chamando a função que f devolve
// /// f(g()) -> chama o que g devolve
// const res = g()
// f(res)
// console.log(res()) /// só assim para devolver o A

    /// clojure
// function f(idade) {
//     let nome = 'João'
//     function g(){
//         console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
//     }
//     return g
// }

// const res = f(17)
// res() /// res utiliza uma copia de uma variavel (nome) que deixou de existir, porque g() tinha direito de utilizar (por causa do clojure formado entre f(), g() e idade)
    
// const eAgora = () => {
//     let cont = 1
//     const f1 = () => console.log(cont)
//     cont++
//     const f2 = () => console.log(cont)
//     cont++
//     return {f1, f2} /// retorna 1 objeto, que tem as 2 funções dentro
// }

// const res = eAgora()
// res.f1()
// res.f2()
/// clojure é montado no final (quando a variavel morre [f1 e f2 usam cont = 3])

/// JSON: JavaScript Object Notation
/// Uma pessoa que se chama João e tem 17 anos
//{} /// objeto JavaScript -> par chave: valor
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }
// console.log(pessoa.nome)
// console.log(pessoa['idade'])

/// uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 50
// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 50
//     }
// }
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa['endereco'].logradouro)
// console.log(pessoa.endereco['numero'])
// console.log(pessoa.endereco) /// mostra tudo do endereço
// console.log(pessoa) /// mostra tudo da pessoas


//// Uma concessionaria tem nome, CNPJ e endereço (logradouro, numero e bairro). Elea também tem seu estoque de veículos. A quantidade de veículos é arbritária. A qualquer intante, ela pode ter 2 ou 5 ou 17 veículos. Cada veículo modelo, marca e placa.

// const veiculo = {
//             modelo: 'Ka',
//             marca: 'Ford',
//             palca: 'ABC-1234'
//         }

// const estoque = veiculo[3]

// const concessionaria = {
//     nome: 'nome',
//     CNPJ: '000000000000000/0001-12',
//     endereco: {
//         logradouro: 'Rua A',
//         numero: '2',
//         bairo: {
//             nome: 'Vija J'
//         }
//     },
//     estoque: [
//         {
//             modelo: 'Ka',
//             marca: 'Ford',
//             palca: 'ABC-1234'
//         },
//         {
//             modelo: 'Fusca',
//             marca: 'VW',
//             palca: 'ADD-4455'
//         }
//     ]
// }
// /// estoque é uma lista/vetor 

// console.log(concessionaria.estoque[0].modelo)
// console.log(concessionaria['estoque'][1]['modelo'])

/// Uma calculadora realiza as quatro operações fundamentais
    /// soma é representada por uma arrow function que faz return
    /// subtração: representa por uma arrow function sem return
    /// multiplicação: function regular
    /// divisão: voce escolhe
    /// todas elas operam com 2 operandos

// const soma = (x, y) => {return x + y}
// const subtracao = (x, y) => x - y
// function multiplicacao(x,y){return x*y}
// const divisao = function(x,y){return x/y}

// const calculadora = {
//     operacoes:{
//         soma: soma,
//         subtracao: subtracao,
//         multiplicacao: multiplicacao,
//         divisao: divisao
//     }
// }

// console.log(calculadora.operacoes.soma(1,2))
// console.log(calculadora.operacoes.divisao(10,5))
// console.log(calculadora['operacoes']['subtracao'](10,2))
// console.log(calculadora['operacoes']['multiplicacao'](5,3))

// /// ou

// const calculadora2 = {
//     operacoes:{
//         soma: (x, y) => {return x + y},
//         subtracao: (x, y) => x - y,
//         multiplicacao: function (x,y){return x*y},
//         divisao: (a,b) => a/b
//     }
// }

///////////////////////////////////////

// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log('Sempre serei a última...')
/// processamento bloquenate --> sincrono
    /// (eu primeiro) começa, bloqueia e so quando termina passa para a próxima linha

// const a = 5 + 6
// const b = 9 * 4
// console.log(a + b)  /// depende de a e b para funcionar (sincrono -> primeiro a termina, depois b termina, então executa)


/// simulando função demorada (ruim quando ela é bloqueante)

    // function demorada(){
    //     const dataAtualMais2Segundos = new Date().getTime() + 2000
    //     while(new Date().getTime() <= dataAtualMais2Segundos);   /// espera ocupada -> corpo do while é o ;
    //     const d = 8 + 2 * 6
    //     return d
    // }

    // const a = 2 + 3
    // const b = 6 * 1
    // const d = demorada()
    // const e = a + b * 2 
    // console.log(e)  /// dica esperando e que espera d, que não influencia em e


/// processamento assincorno

    // const a = 2 + 3
    // const b = 6 * 1
    // setTimeout(() => {
    //     const d = demorada()
    //     console.log(`d: ${d}`)
    // },500)
    // const e = a + b * 2 
    // console.log(`e: ${e}`)

///

// setTimeout(() => {
//     console.log("Agendada pela setTimeout")
// },0)
// const dataAtualMais5Segundos = new Date().getDate() + 5000
// while(new Date().getTime() <= dataAtualMais5Segundos);
// console.log("Terminando o script principal..")

// function demorada(tempo){
//         const dataAtualMais2Segundos = new Date().getTime() + tempo
//         while(new Date().getTime() <= dataAtualMais2Segundos);   /// espera ocupada -> corpo do while é o ;
//         const d = 8 + 2 * 6
//         console.log(`Demorada com tempo: ${tempo}`)
//         return d
//     }

// setTimeout(() => {
//     demorada(5000)
// },0) /// entra na fila de imediato

// setTimeout(() => {
//     demorada(1000)
// },0) /// entra na fila de imediato

// console.log('Fim do script principal')

// setTimeout(() => {
//     demorada(5000)
// },5000) /// entra na fila depois de 5 segundos

// setTimeout(() => {
//     demorada(1000)
// },1000) /// entra na fila depois de 1 segundo

// console.log('Fim do script principal')


/// CPU Bound: predominantemente caracterizada por ciclos de cpu (ocorre em sequencia)
/// IO Bound: predominantemente caracterizada por operações de entrada e saida (ocorre em paralelo, gerenciada pelo node)

    //// callback hell -> processamento não sequencial

// const fs = require('fs')    /// file system
// const nomeArquivo = 'arquivo.txt'
// /// função callback (define mas nunca chama)
// const exibirConteudo = (erro, conteudo) => {
//     console.log("A")
//     /// se existir erro é definido, se não é undifined
//     if(erro){
//         console.log(`Deu erro: ${erro}`)
//     }
//     else{
//         console.log(`Conteudo: ${conteudo}`)
//         const dobro = Number(conteudo.toString()) * 2
//         /// mais uma função callback
//         const finalizar = erro => {
//             console.log(erro? `Deu erro ao escrever o dobro\nerro: ${erro}` : "Ok, escreveu o dobro")
//             console.log('C')
//             const exibirDobro = (erro, conteudo) => {
//                 console.log("E")
//                 console.log(erro? `Deu erro ao lendo o dobro\nerro: ${erro}` : `Dobro: ${conteudo.toString()}`)
//             }
//             fs.readFile('dobro.txt',exibirDobro)
//             console.log("F")
//         }
//         fs.writeFile('dobro.txt',dobro.toString(),finalizar)
//         console.log("D")
//     }
// }
// fs.readFile(nomeArquivo,exibirConteudo)
// console.log("B")

    /// promises ( permite processamento assincrono mais organizado) -> computação demorada associada
        /// estados
            /// Pending (ainda vai terminar)
            /// Fullfield ( termina com sucesso)
            /// Rejected (termina com erro)

const calculoDemorado = (n) => {
    let cont = 0
    for(let i = 1; i <= n; i++)
        cont += i
    return cont
}
const res = calculoDemorado(1000)
console.log(res)