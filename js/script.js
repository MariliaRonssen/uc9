// function mostrarPopup(){
//     window.alert("BEM-VINDOS!");
// }

$(document).ready(function(){
    $("#barras").click(function(){
        if($("#menu").hasClass("#menu-ativo")){
            $("menu").removeClass("menu.ativo")
        }else{
            $("#menu").addClass("menu-ativo")    
        }
    })
})
$(document).ready(function(){
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()

})
setInterval(slide,1500)
function slide(){
    

    if($(".banner-ativo").next().length){
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    }
}   



let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

let listaNoticias = [
    {
        titulo:"Happy Monday",
        descricao:"Promoções exclusivas nas segundas-feiras.",
        imagem:"img/awesomecyber.svg",
    },
    {
        titulo: "Como melhorar o seu desempenho",
        descricao:"Conquiste mais pontos com essas dicas.",   
        imagem: "img/melhorardesempenho.svg",    
    },
   
    {
        titulo:"Happy Monday",
        descricao:"Jogue mais por menos nas segundas-feiras.",
        imagem:"img/cybermonday.svg",
    },
]
function renderizarNoticias(){
    let espaco = document.getElementById("espaco-noticia")

    let template ="";
    for (let index = 0; index < listaNoticias.length; index++) {
        const noticias = listaNoticias[index];

        template +=`<div class="cardnews">
        <img src= ${noticias.imagem}>
        <h3>${noticias.titulo}</h3>
        <p>${noticias.descricao}</p>`
    }
    espaco.innerHTML = template;
}
