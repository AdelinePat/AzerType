
// Creation des listes de jeu
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson", "J'en ai marre"]



const nomRegExp = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ- ]{2,}$")
// À-ÖØ-öø-ÿ => permet d'inclure les caractères spéciaux (accents)

const emailRegExp = new RegExp("^[A-Za-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]{2,}$")