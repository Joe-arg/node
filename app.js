const http = require('http');

http.createServer((request, response) => {
    // console.log(request);
    const person = {
        id: 1,
        name: 'Luis'
    };
    response.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    response.writeHead(200, {'Content-Type': 'application/csv'});
    response.write('id, name\n');
    response.write('1, Jose\n');
    response.write('2, Luis\n');
    response.write('3, Mary\n');
    response.write('4, John\n');
    response.write('5, Cris\n');
    response.end();
}).listen(8080);

console.log('Listening to port', 8080);