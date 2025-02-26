var idade = 23
if (idade < 16){
    console.log("Não vota.")
} else if (idade < 18 || idade >= 65){
    console.log("Voto optativo.")
} else {
    console.log("Voto obrigatório.")
}