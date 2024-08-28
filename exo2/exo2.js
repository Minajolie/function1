// Écrire un script qui demande à l’utilisateur d’ajouter un nombre n. Calculer  le modulo de ce nombre par 4 
// et afficher le résultat dans une phrase comme suit:"Si l'on divise 21 par 4 , le reste est de 1"
let nombre = parseInt(prompt("Ajoute un nombre"))
function modulo(a,b){
    return (a%b)
}
let resultat = modulo(nombre,4)
document.write("Si l'on divise "+nombre+" par 4,le reste est de "+resultat)