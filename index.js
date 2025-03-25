// let menu_iconn = document.querySelector(".menu-iconn");
// let box = document.querySelector(".box");
// menu_iconn.onclick = function () {
//     box.classList.toggle("active");
//     menu_iconn.classList.toggle("active");
    
    
// }
// document.onclick = function(e){
//     if (!menu_iconn.contains(e.target) && !box.contains(e.target)) {
//         menu_iconn.classList.remove("active");
//         box.classList.remove("active");

        
//     }
// }
// document.getElementById('formulaire-commentaire').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const nom = document.getElementById('nom').value;
//     const commentaire = document.getElementById('commentaire').value;
//     const nouveauCommentaire = document.createElement('div');
//     nouveauCommentaire.innerHTML = `<p><strong>${nom}</strong>: ${commentaire}</p>`;
//     document.getElementById('commentaires').appendChild(nouveauCommentaire);
//     document.getElementById('nom').value = '';
//     document.getElementById('commentaire').value = '';
// });

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Ici, vous pouvez ajouter votre logique pour envoyer les données du formulaire
    // Par exemple, utiliser fetch() pour envoyer les données à un serveur

    // Afficher le message de confirmation
    document.getElementById('messageConfirmation').style.display = 'block';

    // Réinitialiser le formulaire après l'envoi
    document.getElementById('contactForm').reset();
});