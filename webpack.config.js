const path = require('path');

module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'src', 'public')  // Debe apuntar a una ruta válida en tu proyecto
    }
}
