function afficherPopup(popupBackground) {
    popupBackground.classList.add("active")
}

function cacherPopup(popupBackground) {
    popupBackground.classList.remove("active")
}

function initAddEventListenerPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    let btnZonePartage = document.querySelector(".zonePartage button")

    btnZonePartage.addEventListener("click", () => {
        afficherPopup(popupBackground)
    })

    popupBackground.addEventListener("click", (event) => {
        if (event.target === popupBackground) {
            cacherPopup(popupBackground)
        }
    })
}




// let btnEnvoyerMail = document.getElementById("btnEnvoyerMail")
