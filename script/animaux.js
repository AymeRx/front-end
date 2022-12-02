let text = '{ "animaux" : [' +
    '{ "nom":"Chat" , "image":"chat", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni velit a tenetur accusamus esse cum tempora, natus eaque, in repudiandae quo, dicta perspiciatis veritatis. Aliquid vel saepe voluptatibus laboriosam!" },' +
    '{ "nom":"Chien" , "image":"chien", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni velit a tenetur accusamus esse cum tempora, natus eaque, in repudiandae quo, dicta perspiciatis veritatis. Aliquid vel saepe voluptatibus laboriosam!" },' +
    '{ "nom":"Poisson" , "image":"kobudai", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni velit a tenetur accusamus esse cum tempora, natus eaque, in repudiandae quo, dicta perspiciatis veritatis. Aliquid vel saepe voluptatibus laboriosam!" },' +
    '{ "nom":"Chat" , "image":"chat", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni velit a tenetur accusamus esse cum tempora, natus eaque, in repudiandae quo, dicta perspiciatis veritatis. Aliquid vel saepe voluptatibus laboriosam!" },' +
    '{ "nom":"Chien" , "image":"chien", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni velit a tenetur accusamus esse cum tempora, natus eaque, in repudiandae quo, dicta perspiciatis veritatis. Aliquid vel saepe voluptatibus laboriosam!" },' +
    '{ "nom":"Poisson" , "image":"kobudai", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni velit a tenetur accusamus esse cum tempora, natus eaque, in repudiandae quo, dicta perspiciatis veritatis. Aliquid vel saepe voluptatibus laboriosam!" }] }';

const obj = JSON.parse(text);

//     affiche les animaux dans des divs
document.getElementById('Animaux').innerHTML +=
    '<main id="main_animaux">' +
    '    <h2>Animaux</h2>' +
    '    <div class="album py-5 bg-light">' +
    '       <div class="container"> ' +
    '           <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="container">'

for (let i = 0; i < obj.animaux.length; i++) {
    document.getElementById('container').innerHTML +=
                '<div class="col">' +
                '  <div class="card shadow-sm">' +
                '<h4 class="card-title"> '+ obj.animaux[i].nom +' </h4> ' +
                '   <img class="card-img-top" src="images/' + obj.animaux[i].image + '.jpg" alt="' + obj.animaux[i].image + '">' +
                '    <div class="card-body"> ' +
                '      <p class="card-text"> '+ obj.animaux[i].description +' </p> ' +
                '      <div class="d-flex justify-content-between align-items-center"> ' +
                '        <div class="btn-group"> ' +
                '          <button oncclick="viewAnimal(this)" type="button" class="btn btn-sm btn-outline-secondary">View</button> ' +
                '          <button onclick="editAnimal(this)" type="button" class="btn btn-sm btn-outline-secondary">Edit</button> ' +
                '        </div> '
                '      </div> ' +
                '    </div> ' +
                '  </div> ' +
                '</div> '
};










    