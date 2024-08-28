// Écrire un script qui demande à l’utilisateur 2 nombres, et d’afficher le résultat de la multiplication de ces 2 nombres
//  au clic sur le bouton “voir résultat exemple avec 4 et 5: "4 multiplié par 5 vaut 20"
let nombre =parseInt(prompt("Ecrire un nombre"))
let nombre1 =parseInt(prompt("Ecrire un  autre nombre"))
function multiplier(nbr1,nbr2){
   return (nbr1*nbr2)
      
}
let resultat = multiplier(nombre,nombre1)
alert(resultat)