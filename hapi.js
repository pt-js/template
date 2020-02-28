'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            // console.log(Object.keys(request))
            console.log(Object.keys(h))
            h.state('session', { account: "shmily" }); // need have key in <*cookie policy*>

            // return 'Hello World!';
            // return new Promise((res) => res('Hello World'))
            return h.response('Hello World!')
        }
    });


    // <*cookie policy*>
    server.state('session', {
        ttl: 10*1000,     // One day
        isSecure: true,
        path: '/',
        encoding: 'base64json'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
