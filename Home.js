let users = [
    {
        nome: "Sou o Primeiro User", idade: 123, id: 1
    }
]

function confirmar() {
    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)
    let res = document.getElementById("result")
    let res2 = document.getElementById("res2")
    let res3 = document.getElementById("res3")
    let res4 = document.getElementById("res4")

    if (nome && idade >= 18 && idade <= 60) {
        res.innerHTML = `${nome} seu dados foram confirmados , já pode continuar !`
    } else if (!nome || !idade) {
        alert("Coloque seu dados COMPLETOS por favor!")
    } else if (idade < 18) {
        res.innerHTML = `Olá ${nome}!, seus dados foram confirmados.`
    }
    users.push({

        nome: nome,
        idade: idade,
        id: users.length + 1

    })

    res2.innerHTML = `
  Nome: ${nome}
  `

    res3.innerHTML = `
  Idade: ${idade}
  `
    res4.innerHTML = `
  Id: ${users.length}
  `


}