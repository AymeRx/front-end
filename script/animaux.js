let text = '{ "animaux" : [' +
    '{ "nom":"Chat" , "image":"chat", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni velit a tenetur accusamus esse cum tempora, natus eaque, in repudiandae quo, dicta perspiciatis veritatis. Aliquid vel saepe voluptatibus laboriosam!" },' +
    '{ "nom":"Chien" , "image":"chien", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni velit a tenetur accusamus esse cum tempora, natus eaque, in repudiandae quo, dicta perspiciatis veritatis. Aliquid vel saepe voluptatibus laboriosam!" },' +
    '{ "nom":"Poisson" , "image":"kobudai", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni velit a tenetur accusamus esse cum tempora, natus eaque, in repudiandae quo, dicta perspiciatis veritatis. Aliquid vel saepe voluptatibus laboriosam!" }] }';

const obj = JSON.parse(text);

// document.getElementById('Animaux').innerHTML +=
//     '<main id="main_animaux">' +
//     '<table>' +
//     '    <thead>' +
//     '        <tr>' +
//     '            <th>Animal</th>' +
//     '            <th>Image</th>' +
//     '            <th>Description</th>' +
//     '            <th>Edition</th>' +
//     '            <th>Action</th>' +
//     '        </tr>' +
//     '    </thead>' +
//     '    <tbody id="tb">'+
//     '        <tr class="premiereligne">' +
//     '            <td></td>' +
//     '            <td></td>' +
//     '            <td></td>' +
//     '            <td><button onclick="functionAfficherChamps()">Ajouter animaux</button></td>' +
//     '            <td></td>' +
//     '        </tr>'

// for (let i = 0; i < obj.animaux.length; i++) {
//     document.getElementById('tb').innerHTML +=
//         '        <tr>' +
//         '            <td>' + obj.animaux[i].nom + '</td>' +
//         '            <td><img src="images/' + obj.animaux[i].image + '.jpg" alt="' + obj.animaux[i].image + '"></td>' +
//         '            <td>' + obj.animaux[i].description + '</td>' +
//         '            <td><button onclick="modifierLigne(this)">Modifier</button></td>' +
//         '            <td><button onclick="supprimerLigne(this)">Supprimer</button></td>' +
//         '        </tr>'
// };

// document.getElementById('main_animaux').innerHTML +=
// '<button id="boutonhaut"><a href="#">Revenir en haut</a></button>'

//     // supprimer une ligne de l'élement cliqué
//     function supprimerLigne(element) {
//         element.parentNode.parentNode.remove();
//     }

//     //remplace premiereligne par des champs input
//     function functionAfficherChamps() {
//         document.getElementsByClassName('premiereligne')[0].innerHTML =
//             '<td><input type="text" id="nom" placeholder="Nom"></td>' +
//             '<td><input type="text" id="image" placeholder="Image"></td>' +
//             '<td><input type="text" id="description" placeholder="Description"></td>' +
//             '<td><button onclick="functionAjouterLigne()">Ajouter</button></td>' +
//             '<td></td>'
//     }
    


//     //validation des champs pour ajouter un animal
//     function functionAjouterLigne() {
//         //cache les champs input

//         let nom = document.getElementById('nom').value;
//         let image = document.getElementById('image').value;
//         let description = document.getElementById('description').value;

//         if (nom == "" || image == "" || description == "") {
//             alert("Veuillez remplir tous les champs");
//         } else {
//             document.getElementById('tb').innerHTML +=
//                 '        <tr>' +
//                 '            <td>' + nom + '</td>' +
//                 '            <td><img src="images/' + image + '.jpg" alt="' + image + '"></td>' +
//                 '            <td>' + description + '</td>' +
//                 '            <td><button onclick="modifierLigne(this)">Modifier</button></td>' +
//                 '            <td><button onclick="supprimerLigne(this)">Supprimer</button></td>' +
//                 '        </tr>'
//         }

//     }


//     //remplace les champs input par les valeurs de la ligne
//     function modifierLigne(element) {
//         console.log(element.parentNode.parentNode);
//         let nom = element.parentNode.parentNode.cells[0].innerHTML;
//         let image = element.parentNode.parentNode.cells[1].innerHTML;
//         let description = element.parentNode.parentNode.cells[2].innerHTML;

//         element.parentNode.parentNode.innerHTML =
//             '<td><input type="text" id="nom" value="' + nom + '"></td>' +
//             //prend juste le nom de l'image et non pas <src=images/ devant
//             '<td><input type="text" id="image" value="' + image.substring(image.indexOf('alt="') + 5, image.indexOf('">')) + '"></td>' +
//             //description est un textarea
//             '<td><textarea id="description">' + description + '</textarea></td>' +
//             '<td><button onclick="functionModifierLigne(this)">Modifier</button></td>' +
//             '<td><button onclick="supprimerLigne(this)">Supprimer</button></td>'
//     }

//     //remplace les valeurs de la ligne par les champs input
//     function functionModifierLigne(element) {
//         let nom = document.getElementById('nom').value;
//         let image = document.getElementById('image').value;
//         let description = document.getElementById('description').value;

//         element.parentNode.parentNode.innerHTML =
//             '<td>' + nom + '</td>' +
//             '<td><img src="images/' + image + '.jpg" alt="' + image + '"></td>' +
//             '<td>' + description + '</td>' +
//             '<td><button onclick="modifierLigne(this)">Modifier</button></td>' +
//             '<td><button onclick="supprimerLigne(this)">Supprimer</button></td>'
//     }

//     affiche les animaux dans des divs
document.getElementById('Animaux').innerHTML +=
    '<main id="main_animaux">' +
    '    <h2>Animaux</h2>' +
    '    <div id="container">'

for (let i = 0; i < obj.animaux.length; i++) {
    document.getElementById('container').innerHTML +=
        '        <div class="box">' +
        '            <div class="nom">' +
        '            <h3>' + obj.animaux[i].nom + '</h3>' +
        '            </div>' +
        '            <div class="imgBox">' +
        '            <img src="images/' + obj.animaux[i].image + '.jpg" alt="' + obj.animaux[i].image + '">' +
        '            </div>' +
        '            <div class="details">' +
        '            <p>' + obj.animaux[i].description + '</p>' +
        '            </div>' +
        '        </div>'
};




    