const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

//a
const minhaStringnew = minhaString.trim()

//b
console.log(minhaString.length)
console.log(minhaStringnew.length)

//c
console.log(minhaStringnew.replaceAll('________', 'sticioso'))