function calculaSalario(num1,num2){
    let salario = 0
    if(num2 <= 1200){
        salario += num1 + (num2 * 0.03)
    }else{
        salario += num1 + (num2 * 0.03) + ((num2 - 1200) * 0.05)
    }
    return salario
}
//calculaSalario(1000,1000)

function cashMachine(num1, num2, num3){
    let resposta = "Notas sacadas: "
    let nota200 = 0
    let nota100 = 0
    let nota50 = 0
    let nota20= 0
    let nota10 = 0
    let nota5= 0
    let nota2 = 0
    let salario = calculaSalario(num2, num3)
    if(num1 > salario){
        return console.log("Saldo indisponivel.")
    }
    while(num1 >= 200){
        nota200 ++
        num1 -= 200
        salario -= 200
    }
    if(nota200 != 0){
        resposta += `${nota200} nota(s) de 200 reais, `
    }
    while(num1 >= 100){
        nota100 ++
        num1 -= 100
        salario -= 100
    }
    if(nota100 != 0){
        resposta += `${nota100} nota(s) de 100 reais, `
    }
    while(num1 >= 50){
        nota50 ++
        num1 -= 50
        salario -= 50
    }
    if(nota50 != 0){
        resposta += `${nota50} nota(s) de 50 reais, `
    }
    while(num1 >= 20){
        nota20 ++
        num1 -= 20
        salario -= 20
    }
    if(nota20 != 0){
        resposta += `${nota20} nota(s) de 20 reais, `
    }
    while(num1 >= 10){
        nota10 ++
        num1 -= 10
        salario -= 10
    }
    if(nota10 != 0){
        resposta += `${nota10} nota(s) de 10 reais, `
    }
    while(num1 >= 5){
        nota5 ++
        num1 -= 5
        salario -= 5
    }
    if(nota5 != 0){
        resposta += `${nota5} nota(s) de 5 reais, `
    }
    while(num1 >= 2){
        nota2 ++
        num1 -= 2
        salario -= 2
    }
    if(nota2 != 0){
        resposta += `${nota2} nota(s) de 2 reais, `
    }
    let saldo = salario - num1
    resposta += `Saldo atual: R$${saldo}.`
    console.log(resposta)
}
//cashMachine(1000, 1000, 1000)

function calculateStock(atual, max, min){
    let media = max / min
    if(atual >= media){
        return "Não efetuar compra"
    }else{
        return "Efetuar compra"
    }
}
//console.log(calculateStock(10, 15, 5))

function calculateAge(num1, num2){
    let anos = num2 - num1
    let meses = anos * 12
    let dias = meses * 30
    let semanas = meses * 4
    return console.log(`A idade em anos: ${anos}, idade em meses: ${meses}, idade em dias: ${dias}, idade em semanas: ${semanas}`)
}
//calculateAge(2000, 2022)
let array = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ]

function getDiagonal(matriz){
    let numeros = []
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            if( i === j){
                numeros.push(matriz[i][j])
            }
        }
    }
    return console.log(numeros)
}
//getDiagonal(array)