const botao = document.querySelector("#adicionar-aluno");

botao.addEventListener("click", function(){
    event.preventDefault();

    let $dadosform = document.querySelector("#form-aluno");
    let $dadosAluno = novoAluno($dadosform);
    
    console.log($dadosAluno.vNome);
    console.log($dadosAluno.vN1);
    console.log($dadosAluno.vN2);
    console.log($dadosAluno.vN3);
    console.log($dadosAluno.media);
});

function novoAluno(formulario){
    if(formulario.querySelector("#nome").value == ""){
        alert("Obrigatório informar o campo nome");
        formulario.querySelector("#nome").focus();
    }
    else if(formulario.querySelector("#nome").value.lenght < 8){
        alert("Obrigatório informar o nome completo do aluno.");
        formulario.querySelector("#nome").focus();
    }
    else if(formulario.querySelector("#n1").value == ""){
        alert("Obrigatório informar a primeira nota do aluno.");
        formulario.querySelector("#n1").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n1").value))){
        alert("Inserir apenas valores númericos no campo nota 1.");
        formulario.querySelector("#n1").value == "";
        formulario.querySelector("#n1").focus();
    }
    else if(formulario.querySelector("#n2").value == ""){
        alert("Obrigatório informar a segunda nota do aluno.");
        formulario.querySelector("#n2").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n2").value))){
        alert("Inserir apenas valores númericos no campo nota 2.");
        formulario.querySelector("#n2").value == "";
        formulario.querySelector("#n2").focus();
    }
    else if(formulario.querySelector("#n3").value == ""){
        alert("Obrigatório informar a terceira nota do aluno.");
        formulario.querySelector("#n3").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n3").value))){
        alert("Inserir apenas valores númericos no campo nota 3.");
        formulario.querySelector("#n3").value == "";
        formulario.querySelector("#n3").focus();
    }
    else{
        let $vetorAluno = {
            vNome:formulario.querySelector("#nome").value,
            vN1:formulario.querySelector("#n1").value.replace(",",","),
            vN2:formulario.querySelector("#n2").value.replace(",",","),
            vN3:formulario.querySelector("#n3").value.replace(",",","),

            media:$calcularMedia(formulario.querySelector("#n1").value.replace(",",","),formulario.querySelector("#n2").value.replace(",",","),formulario.querySelector("#n3").value.replace(",",","))
        }
        return $vetorAluno;
    }
};
