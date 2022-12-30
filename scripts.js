function alertClick() {
    alert("O botão foi clicado com sucesso!");
}

function confirmClick() {
    confirm("O botão foi clicado com sucesso!");
}

function somarClick() {
    let x = prompt("Digite um número a ser somado: ");
    let y = prompt("Digite o próximo número a ser somado: ");
    let soma = parseFloat(x) + parseFloat(y);
    document.querySelector("#text-resultado").innerText = soma;
}

function subtrairClick() {
    let x = prompt("Digite um número a ser somado: ");
    let y = prompt("Digite o próximo número a ser somado: ");
    let subtracao = parseFloat(x) - parseFloat(y);
    document.querySelector("#text-resultado").innerText = subtracao;
}

function escolhaClick() {
    if (confirm("Qual operação deseja efetuar?\nOK → SOMA e CANCELAR → SUBTRAIR")) {
        let x = prompt("Digite um número a ser somado: ");
        let y = prompt("Digite o próximo número a ser somado: ");
        let soma = parseFloat(x) + parseFloat(y);
        document.querySelector("#text-resultado").innerText = soma;
    }else{
        let x = prompt("Digite um número a ser somado: ");
        let y = prompt("Digite o próximo número a ser somado: ");
        let subtracao = parseFloat(x) - parseFloat(y);
        document.querySelector("#text-resultado").innerText = subtracao;
    }
}

function escolhaInputClick() {
    if (confirm("Qual operação deseja efetuar?\nOK → SOMA e CANCELAR → SUBTRAIR")) {
        let x = document.querySelector("#textVal1").value;
        let y = document.querySelector("#textVal2").value;
        let soma = parseFloat(x) + parseFloat(y);
        document.querySelector("#text-resultado2").innerText = soma;
    }else{
        let x = document.querySelector("#textVal1").value;
        let y = document.querySelector("#textVal2").value;
        let subtracao = parseFloat(x) - parseFloat(y);
        document.querySelector("#text-resultado2").innerText = subtracao;
    }
} 

document.querySelector('#btn-alert').addEventListener("click", alertClick)
document.querySelector('#btn-confirm').addEventListener("click", confirmClick)
document.querySelector('#btn-somar').addEventListener("click", somarClick)
document.querySelector('#btn-subtrair').addEventListener("click", subtrairClick)
document.querySelector('#btn-escolha').addEventListener("click", escolhaClick)
document.querySelector('#btn-escolha-input').addEventListener("click", escolhaInputClick)