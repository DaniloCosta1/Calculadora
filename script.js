function insert(num){
    let numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML += num;
}

function clean(){
    document.getElementById('tela').innerHTML="";
}

function backspc(){
    let tela = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1)
}

function calcular(){
    let tela = document.getElementById('tela').innerHTML;
    if (tela){
        document.getElementById('tela').innerHTML = eval(tela);
    } else {
        document.getElementById('tela').innerHTML = "ErroR"
    }
}