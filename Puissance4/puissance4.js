// Définir les constantes pour la largeur et la hauteur du plateau
const largeurPlateau = 7;
const hauteurPlateau = 6;

// Créer le plateau de jeu comme un tableau à deux dimensions
const plateau = [];
for (let i = 0; i < hauteurPlateau; i++) {
    plateau[i] = [];
    for (let j = 0; j < largeurPlateau; j++) {
        plateau[i][j] = 0; // 0 représente une case vide
    }
}

// Afficher le plateau de jeu dans la console (à des fins de débogage)
console.log(plateau);
