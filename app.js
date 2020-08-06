/* importar as configurações do servido */

const app = require('./config/server');

/*parametrizar a porta de escuta */

const server = app.listen(80, function(){
    console.log('servidor online')
})

const io = require('socket.io').listen(server);

app.set('io', io);

/*criar a conexão por websocket */

io.on('connection', function(socket){
    console.log('Usuario conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou')
    })
});