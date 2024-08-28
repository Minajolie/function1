// Écrire un script qui demande un nombre de départ, et qui calcule sa factorielle.
let nombre = parseInt(prompt("Donne un nombre"))
function factoriel(a){
    let f = 1
    for(let i=1;i<=a;i++){
      f=f*i
    }
    return f
}
let resultat =factoriel(nombre)
alert(resultat)