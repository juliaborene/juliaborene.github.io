



function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(()=> elemento.innerHTML += letra , 85 * i)
    });
}

const titulo = document.querySelector('.type')
typeWrite(titulo)



window.revelar = ScrollReveal({reset:true})

revelar.reveal('.scroll-reveal-img',{
    duration: 2000,
    distance:'90px'
})



