const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nomeusuarioValidate();
    nameValidate(); 
    cpfvalidate();
    emailValidate();
    telefoneValidate();
    enderecoValidate();
    mainSenhaValidate();
    compareSenha();
    palavraChaveValidate();
});

function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
    


}

function nomeusuarioValidate(){
    if(campos[0].value.length == 0){
        setError(0);
    }
    else{
       removeError(0);
    }

    }

function nameValidate(){
    if(campos[1].value.length == 0){
        setError(1);
    }
    else{
       removeError(1);
    }
}

function cpfvalidate(){
    if(!cpfRegex.test(campos[2].value)){
        setError(2);
    }
    else{
        removeError(2);
    }
}


function emailValidate(){
    if(!emailRegex.test(campos[3].value)){
        setError(3);
    }
    else{
        removeError(3);
    }
}

function telefoneValidate(){
    if(!telefoneRegex.test(campos[4].value)){
        setError(4);
    }
    else{
        removeError(4);
    }
}

function enderecoValidate(){
    if(campos[5].value.length == 0){
        setError(5);
    }
    else{
        removeError(5);
    }
}

function mainSenhaValidate(){
    if(campos[6].value.length < 8){
        setError(6);

    }
    else{
        removeError(6);
        compareSenha();
    }
}

function compareSenha(){
    if(campos[6].value === campos[7].value && campos[7].value.length >= 8){
        removeError(7);

    }
    else{
        setError(7);
    }
}

function palavraChaveValidate(){
    if (campos[8].value.length == 0){
        setError(8);
    }

    else{
        removeError(8);
    }
}
