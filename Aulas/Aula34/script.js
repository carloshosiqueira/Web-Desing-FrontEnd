var form = document.getElementById('loginForm').addEventListener('submit', function (event){
    event.preventDefault();
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    if(username === 'admin' && password === 'admin'){
        document.getElementById('message').textContent = 'Login efetuado com sucesso!';
        window.location.href = 'login.html';
    }else{
        document.getElementById('message').textContent = 'Credênciais inválidas';
        document.getElementById('message').style.color = 'red';
        
    }
})

// function pegarDados(){
//     let form = document.getElementById('loginForm');

//     let usuario = document.getElementById('username').value;
//     let senha = document.getElementById('password').value;
//     console.log(usuario,senha)
//     if(usuario === 'admin' && senha === 'password'){
//         document.getElementById('message') = 'Login efetuado com sucesso!';
//         window.location.href = 'index.html';
//     }else{
//         alert('Usuário ou senha incorreto');
//     }
//     if(senha != 'password'){
//       let botao = document.getElementById('botao');
//       $('botao').rotate({
//         angle: 360,
//         duration: 1000,
//         easing: 'linear',
//         direction: 'clockwise'
//       })
// }
//
