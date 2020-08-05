/* importar as configurações do servido */

const app = require('./config/server');

/*parametrizar a porta de escuta */

app.listen(80, function(){
    console.log('servidor online')
})