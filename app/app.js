const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname;

    switch (pathname) {
        case '/':
            console.log('reached "/" route');
            handleBaseRoute(response);
            break;
        case '/json':
            console.log('reached "/json" route');
            handleJsonRoute(response);
            break;
        default:
            console.log(`unknown route "${pathname}"`);
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/plain');
            response.write('404 Not Found');
            break;
    }

    response.end();
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server listen on port 3000 ...');
});

function handleBaseRoute(response) {
    const html = require('./html');
    const s = html.create('Welcome');

    response.setHeader('Content-Type', 'text/html');
    response.write(s);
}

function handleJsonRoute(response) {
    const data = {
        version: '1.0',
        meaning: 'A list of persons.',
        persons: [{
            name: 'Marcy',
            age: 41
        }, {
            name: 'Darcy',
            age: 42
        }]
    };

    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(data));
}