/*importar o módulo do framework express */

const express = require('express');

/*importar o módulo do consign */

const consign = require('consign');

/*importar o body-parser */

const bodyParser = require('body-parser');

/*importar o módulo do expree-validator */

const expressValidator = require('express-validator');

/*iniciar o objeto do express */
const app = express();

/* setar as variáveis 'view engine ' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*consfigurar o middleware express.static */
app.use(express.static('./app/public'));

/*configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended:true}));

/*configurar o middleware express-validator */
app.use(expressValidator());


/*efetua  o autoload das rotas, dos models e dos controllers para o objeto app*/
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app; /*exporar o objeto app */