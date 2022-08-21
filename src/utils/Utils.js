export default class Utils {
    isVisible = false
    static setPopUp(text, width = "auto", height = "auto") {
        let popUp = document.getElementById('pop-up-on-mouse')
        popUp.innerHTML = text;
        popUp.style.width = width;
        popUp.style.height = height;
        popUp.style.left = (screen.availWidth/2 - width/2 - popUp.offsetWidth / 2) + "px"
        window.setTimeout(function () {
            popUp.classList.add('pop-up2')
        }, 10)
        window.setTimeout(function () {
            popUp.classList.remove('pop-up2')
        }, 3000)
        window.onclick= () => {
            popUp.classList.remove('pop-up2')
        }
    }
}