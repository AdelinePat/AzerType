// Tant que le joueur n'a pas entré correctement une des deux options, donc tant que listeJeu n'est pas égale à "mots" ou "phrases" : on redemande au joueur de choisir
function choisirPhrasesOuMots() {
    // Laisser le joueur choisir son mode de jeu entre écrire des mots ou des phrases
    
    let choix = prompt("Veuillez choisir entre mots ou phrases")

    while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez choisir entre mots ou phrases")
    }

    return choix
}

// Creation d'une fonction qui renvoie le message avec le score final du joueur
function afficherScore(totalScore, nombreQuestions) {
    let spanScore = document.querySelector(".zoneScore span")
    spanScore.textContent = `${totalScore} / ${nombreQuestions}`
    
    console.log("Votre score est de " + totalScore + " sur " + nombreQuestions)
}


// Fonction contenant la boucle de jeu, retourne le score
function lancerBoucleDeJeu(choix) {
    let score = 0
    // Boucle de jeu for de 0 à la taille du tableau correspondant au mode de jeu
    for (let compteur = 0; compteur < choix.length; compteur++) {
        let motUtilisateur = prompt("Entrez : " + choix[compteur])
        if (motUtilisateur === choix[compteur]) {
            score ++
            // afficherResultat(score, compteur+1)
            console.log("Bravo, votre score est de " + score + ".")
        } else {
            // afficherResultat(score, compteur+1)
            console.log("Vous avez fait une erreur de frappe. Votre score reste à " + score + ".")
        }

    }
    return score
}


// Fonction qui appelle toute les autres
function lancerJeu() {
    // Appel de la fonction choisirPhrasesOuMots, permet de savoir quel tableau utiliser
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nombreQuestions = 0

    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nombreQuestions = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nombreQuestions = listePhrases.length
    }
    
    afficherScore(score, nombreQuestions)
}
