document.getElementById("seta").addEventListener('click', function(){
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    })
})

document.getElementById('Projetos-link').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('Projetos').scrollIntoView({behavior: 'smooth'})
})

const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')
const botao = document.getElementById('botao')


botao.addEventListener('click', function(){ 
    const emailValue = localStorage.setItem("email", email.value);
    const telefoneValue = localStorage.setItem("telefone", telefone.value)
    const mensagemValue = localStorage.setItem("mensagem", mensagem.value)
    
    const emailItem = localStorage.getItem("email");
    const telefoneItem = localStorage.getItem("telefone")
    const mensagemItem = localStorage.getItem("mensagem")
    console.log(emailItem, telefoneItem, mensagemItem)
    email.value = '';
    telefone.value = ''
    mensagem.value = ''
})

const cardProjetos = document.querySelectorAll('.card_projeto');

cardProjetos.forEach((item, index) => {
    setTimeout(() => {
       
        item.classList.remove('hidden')
        item.classList.add('flex')
    }, index * 1500)
})
