var objetos = {numero:[1], texto:["abc"]}
function adicionar(){
    var inputTexto = document.getElementById("texto");
    if(inputTexto.value != ""){
        objetos.numero.push(objetos.numero.length+1);
        objetos.texto.push(inputTexto.value)

        var linha = document.createElement("tr");

        var colunaId = document.createElement("td");
        colunaId.innerText = objetos.numero.length+1;
        linha.appendChild(colunaId);

        var colunaTexto = document.createElement("td");
        colunaTexto.innerText = inputTexto.value;
        linha.appendChild(colunaTexto);

        var colunaAcao = document.createElement("td");
        var linkA = document.createElement('a');
        linkA.setAttribute("onclick","excluir("+(objetos.numero.length+1)+")");
        linkA.innerText = "x";
        linkA.className = "excluir";
        colunaAcao.appendChild(linkA);
        
        linha.appendChild(colunaAcao);

        document.getElementById("tabela").appendChild(linha);

        document.getElementById("texto").value="";
    }else{
        alert("Preencha o input")
    }
   
}

function excluir(id){
    alert(id)
}