let menu = document.getElementById("menu");
let sdbar_sctn = document.getElementById("sdbar_sctn");

menu.addEventListener("click", () => {
    let v =  sdbar_sctn.classList.toggle('activebar')
    console.log(v);
    if(v){
        sdbar_sctn.style.height = '100vh'
    }
    else{
        sdbar_sctn.style.height = '6.3vh'
    }
});
