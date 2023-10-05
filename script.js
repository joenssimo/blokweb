console.log("hoi");

hamburgermenuknop = document.querySelector(".hamburgermenuknop")
hamburgermenusectie = document.querySelector(".hamburgermenusectie")

hamburgermenuknop.onclick = hamburgermenuuitklappen;
function hamburgermenuuitklappen(){
    hamburgermenusectie.classList.toggle("hamburger_uitgeklapt")
}