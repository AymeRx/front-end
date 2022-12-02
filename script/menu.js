//au lancement de la page n'afficher que la section d'accueil
afficherSection("Accueil");



// afficher la section dont l'id est passé en paramètre
function afficherSection(id) {
    //selectionner toutes le sections de la page
    var sections = document.getElementsByTagName("section");
    //pour chaque section
    for (var i = 0; i < sections.length; i++) {
        //si l'id de la section est différent de l'id passé en paramètre
        if (sections[i].id != id) {
            //cacher la section
            sections[i].style.display = "none";
        } else {
            //afficher la section
            sections[i].style.display = "block";
        }
    }
}

document.getElementById("lienAfficherAccueil").onclick = function() {
    afficherSection("Accueil");
};

document.getElementById("lienAfficherActivite").onclick = function() {
    afficherSection("Activite");
};

document.getElementById("lienAfficherAnimaux").onclick = function() {
    afficherSection("Animaux");
};

document.getElementById("lienAfficherAudio").onclick = function() {
    afficherSection("Audio");
};

document.getElementById("lienAfficherVideo").onclick = function() {
    afficherSection("Video");
};

document.getElementById("lienAfficherContact").onclick = function() {
    afficherSection("Contact");
}
