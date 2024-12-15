function contar() {
let ini = document.getElementById('texti');
let fim = document.getElementById('textf');
let passo = document.getElementById('txtp');
let res = document.getElementById('res');

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert (`[ERRO] Faltam dados!`);
} else {
    res.innerHTML = 'Contando: '
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (i < f){
        for (let contador = i; contador <= f; contador += p) {
            res.innerHTML += ` ${contador} \u{1F449}	`
        }
    } else {
        for(let contador = i; contador >= f; contador -= p) {
            res.innerHTML += ` ${contador} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}

}