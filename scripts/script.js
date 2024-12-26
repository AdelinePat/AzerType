
// Creation d'une fonction qui renvoie le message avec le score final du joueur
function afficherScore(totalScore, nombreQuestions) {
    let spanScore = document.querySelector(".zoneScore span")
    spanScore.textContent = `${totalScore} / ${nombreQuestions}`
}

function afficherProposition(proposition) {
    let motPropose = document.querySelector(".zoneProposition")
    motPropose.innerText = proposition
}

function tourSuivantOuFinJeu (motPropose) {
    if (motPropose !== undefined) {
        afficherProposition(motPropose)
    } else {
        afficherProposition("Le jeu est terminé")
        btnValiderMot.disabled = true
        inputEcriture.disabled = true
    }      
}

function calculerScore(motPropose, score) {
    if (motPropose === inputEcriture.value) {
        score++
    } else {
    }
    return score
}
function gererFormulaire(score) {
    let inputNom = document.querySelector(".popupBackground input[type=text]")
    let nom = inputNom.value 

    let inputEmail = document.querySelector(".popupBackground input[type=email]")
    let email = inputEmail.value

    try {
        validerNom(nom)
        validerEmail(email)
        afficherMessageErreur("")
        afficherEmail(nom, email, score)
    } catch(erreur) {
        afficherMessageErreur(erreur.message)
    }
    // if (validerNom(nom) && validerEmail(email)) {
    //     console.log(`Mes deux conditions sont vraies :  J'affiche mon emailScore : ${score}`)
    //     afficherEmail(nom, email, score)
    // } else {
    //     console.log(`Non non, réécris ton nom ou le mail`)
    // }
}

function afficherEmail(nom, email, score) {
    let mailto= `mailto: ${email}+?subject=Partage du score Azertype&body=Bonjour ! ${nom} a obtenu un score de ${score} sur AzerType ! Acceptez-vous le défi ?`
    location.href = mailto
    console.log(mailto)
}

function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error("Le nom contient des caractères non-acceptés ou est trop court.")
    }
}

function validerEmail(email) {
    if (!emailRegExp.test(email)) {
        throw new Error("L'adresse mail n'est pas valide")
    }
}

function afficherMessageErreur(message) {
    let spanErreurMessage = document.getElementById("erreurMessage")

    if (!spanErreurMessage) {
        let popup = document.querySelector(".popup")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"
        popup.appendChild(spanErreurMessage)
    }

    spanErreurMessage.innerText = message
}
// function validerNom(nom) {
//     if (nomRegExp.test(nom)) {
//         return true
//     } else {
//         return false
//     }
// }

// function validerEmail(email) {
//     if (emailRegExp.test(email)) {
//         return true
//     } else {
//         return false
//     }
// }

// Fonction qui appelle toute les autres
function lancerJeu() {
    let score = 0
    let i = 0
    let listeBoutonsOption = document.querySelectorAll(".optionSource input")
    let listeProposition = listeMots
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    
    afficherProposition(listeProposition[i])
    
    for (let index = 0 ; index < listeBoutonsOption.length; index++) {
        listeBoutonsOption[index].addEventListener("change", (event) => {
            if(event.target.value === "1") {
                listeProposition = listeMots
            } else {
                listeProposition = listePhrases
            }
            tourSuivantOuFinJeu(listeProposition[i])
        })
    }
  
    // liaison du bouton valider et de la touche entrée dans l'input
    inputEcriture.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            document.getElementById("btnValiderMot").click()
        }
    })

    btnValiderMot.addEventListener("click", () => {
        score = calculerScore(listeProposition[i], score)
        i++
        afficherScore(score, i)
        tourSuivantOuFinJeu(listeProposition[i])
        inputEcriture.value = ""   
        })
    
    
    let form = document.querySelector(".popupBackground form")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let emailScore = `${score} / ${listeProposition.length}`
        gererFormulaire(emailScore)
    })     
    
}





