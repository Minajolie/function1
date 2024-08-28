// Écrire un script permettant à l’utilisateur de saisir le nombre de notes et les notes d'élèves d’une classe. 
// Une fois la saisie terminée, calculer:
//  1 La moyenne  de la classe

//  2 le nombre d’élèves qui ont une note supérieure à la moyenne de la classe.
let notes = parseInt(prompt("Saisie le nombre de notes d'eleves"))
let note1 = parseInt(prompt("Saisie la note1"))
let note2 = parseInt(prompt("Saisie la note2"))
let note3 = parseInt(prompt("Saisie la note3"))
let note4 = parseInt(prompt("Saisie la note4"))
let note5 = parseInt(prompt("Saisie la note5"))
let total = note1+note2+note3+note4+note5
function moyenne(a,b){
 return (a/b)
}
let resultat = moyenne(total,notes)
alert(resultat)
let tableau = [note1,note2,note3,note4,note5]
let note = tableau.filter(supmoyenne)
function supmoyenne(a){
    return a>resultat
}
document.write(note)