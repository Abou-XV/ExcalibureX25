document.addEventListener('DOMContentLoaded', function() {
    // Définition des constantes
    const largeurPlateau = 7;
    const hauteurPlateau = 6;
    const joueurRouge = 1;
    const joueurJaune = 2;

    // Création du plateau de jeu
    const plateau = [];
    for (let i = 0; i < hauteurPlateau; i++) {
        plateau[i] = [];
        for (let j = 0; j < largeurPlateau; j++) {
            plateau[i][j] = 0; // 0 représente une case vide
        }
    }

    // Fonction pour créer la grille de jeu dans le HTML
    function creerGrille() {
        const gameBoard = document.getElementById('game-board');
        for (let row = 0; row < hauteurPlateau; row++) {
            for (let col = 0; col < largeurPlateau; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = row;
                cell.dataset.col = col;
                gameBoard.appendChild(cell);
            }
        }
    }

    // Fonction pour afficher les jetons dans la grille
    function afficherJetons() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            const joueur = plateau[row][col];
            cell.innerHTML = '';
            if (joueur === joueurRouge) {
                const token = document.createElement('div');
                token.classList.add('token', 'red-token');
                cell.appendChild(token);
            } else if (joueur === joueurJaune) {
                const token = document.createElement('div');
                token.classList.add('token', 'yellow-token');
                cell.appendChild(token);
            }
        });
    }

    // Fonction pour placer un jeton dans une colonne
    function placerJeton(col, joueur) {
        for (let row = hauteurPlateau - 1; row >= 0; row--) {
            if (plateau[row][col] === 0) {
                plateau[row][col] = joueur;
                return true;
            }
        }
        return false; // La colonne est pleine
    }

    // Événement pour placer un jeton lorsqu'on clique sur une colonne
    document.getElementById('game-board').addEventListener('click', function(event) {
        const cell = event.target.closest('.cell');
        if (cell) {
            const col = parseInt(cell.dataset.col);
            if (placerJeton(col, joueurRouge)) {
                afficherJetons();
                
                // Ici, tu peux ajouter la logique pour vérifier s'il y a un gagnant ou si le jeu est terminé
                // Ensuite, tu peux implémenter le tour du joueur jaune et la logique de jeu complète
            } else {
                console.log('La colonne est pleine.');
            }
        }
    });

    // Appel de la fonction pour créer la grille au chargement de la page
    creerGrille();
});
