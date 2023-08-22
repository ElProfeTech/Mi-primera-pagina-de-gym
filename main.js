const menu=document.querySelector(".menu-hamb");

const lista_menu=document.querySelector(".menu ul");

const enlaces=document.querySelectorAll("ul li a");







menu.addEventListener("click",()=>{

lista_menu.classList.toggle("activado");



});


for(var i=0; i<enlaces.length; i++)
{
    enlaces[i].addEventListener("click",()=>{

      lista_menu.classList.remove("activado");
      
      
    })
    
}

