const path = require('path');

module.exports = {
    entry: './script.js', // Point d'entrée de votre code JavaScript
    output: {
        filename: 'bundle.js', // Nom du fichier bundle généré
        path: path.resolve(__dirname, 'public') // Répertoire de sortie
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // Charge les fichiers CSS
            },
        ],
    },
    mode: 'development', // Mode de développement
};
