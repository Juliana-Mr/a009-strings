const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

//a
const minhaStringnew = minhaString.trim()

//b
console.log(minhaString.length)
console.log(minhaStringnew.length)

//c
const stringTrocada = minhaStringnew.replaceAll('________', 'sticioso')
console.log(stringTrocada)

