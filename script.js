const logo = document.getElementById("logo");
const logoImg = document.getElementById("logo-img");

logo.onmouseover = () => {
    logoImg.src = "/img/logo-light.png"
}

logo.onmouseleave = () => {
    logoImg.src = "/img/logo.png"
}