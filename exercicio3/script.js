//"Jorge tem uma casa verde e com portão azul, com os dizeres:" 
//"BOAS VINDAS, mas não deixe o gato sair"


//a
const fraseAspas = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"."
console.log(fraseAspas)

//b
const fraseTrocada = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\".".replaceAll('verde','rosa').replaceAll('azul','laranja')

//c)
console.log(fraseTrocada)

//EXTRA
const frase1 = "Jorge tem uma casa verde e com portão azul, com os dizeres:"
const frase2 = "\"BOAS VINDAS, mas não deixe o gato sair\".".toUpperCase()

console.log(frase1,frase2)