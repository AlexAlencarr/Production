const usuarios = [
    {
        login: 'alex',
        senha: 'alex'
    },
    {
        login: 'maria',
        senha: 'maria'
    },
    {
        login: 'joao',
        senha: 'joao'
    },
    {
        login: 'pedro',
        senha: 'pedro'
    }
]

const logar = () => {
   var login = document.getElementById("login").value;
   var password = document.getElementById("password").value;

    let flag;

    for(let i in usuarios){
        if(usuarios[i].login == login && usuarios[i].senha == password){
            flag = true;
            break;
        }else{
            flag = false;
        }
    }

    if(flag == true){
        window.location.href = "prod.html";
    }else{
        alert("Login ou senha incorretos");
    }

}