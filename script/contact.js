document.getElementById('Contact').innerHTML = 
    // '<h1>Contact</h1>'
    // +'<main>'
    // +'<form>'
    // +'<p>'
    // +'<label for="t1">Quel est votre Nom ?<abbr title="Ce champ est obligatoire">*</abbr></label>'
    // +'<input type="text" id="t1" name="Nom" required>'
    // +' </p>'
    // +'<p>'
    // +'<label for="t2">Quelle est votre adresse électronique ?</label>'
    // +'<input type="email" id="t2" name="email">'
    // +' </p>'
    // +' <p>'
    // +'<label for="t3">Quelle est votre numéro de téléphone ?</label>'
    // +'<input type="tel" id="t3" name="tel" pattern="[0-9]{10}">'
    // +'</p>'
    // +' <p>'
    // +' <label for="t4">Laissez un court message</label>'
    // +'<textarea id="t4" name="msg" maxlength="140" rows="5" required></textarea>'
    // +'</p>'
    // +'<p>'
    // +' <button>Envoyer</button>'
    // +' </p>'
    // +'</form>'
    // +'</main>'


    '<div class="container"> ' +
    '         <h1>Formulaires</h1>  ' +
    '         <form>    ' +
    '           <fieldset>  ' +
    '             <legend>Contact</legend>  ' +

    '             <div class="form-group"> ' +
    '               <label for="nom">Entrez votre nom</label>   ' +
    '               <input type="text" class="form-control" id="nom" placeholder="Aymeric SURRE" required>   ' +
    '             </div>    ' +
                 
    '             <div class="form-group"> ' +
    '               <label for="email">Entrez votre mail</label>    ' +
    '               <input type="email" class="form-control" id="email" placeholder="prenom.nom@mail.com">  ' +
    '             </div>   ' +

    '                <div class="form-group"> ' +
    '               <label for="email">Entrez votre numéro de téléphone</label>    ' +
    '               <input <input class="form-control" type="tel" id="tel" pattern="[0-9]{10}" placeholder="06 XX XX XX XX" required> ' +
    '             </div>   ' +
                  
                 
    '             <div class="form-group">  ' +
    '               <label for="bio">Message</label> ' +
    '               <textarea class="form-control" id="bio" rows="3"></textarea>    ' +
    '             </div>    ' +
    '           </fieldset>  ' +
    '           <button type="submit" class="btn btn-primary">Envoyer</button>  ' +
    '         </form>   ' +
    '     </div>    ' 