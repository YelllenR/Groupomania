require('dotenv').config();
const http = require('http')

const application = require('./application');

const port = process.env.PORT || process.env.other_port; 
application.set('port', port);

const errorServer = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
};

const server = http.createServer(application);
server.on("error", errorServer);
server.on('listening', () => {
    const address = server.address();
    const binding = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;

    console.log('Listening on ' + binding);
});

server.listen(port);