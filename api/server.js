/* eslint-disable @typescript-eslint/no-var-requires */
import pkg from 'json-server';
import path from 'path';
const { bodyParser, create, defaults, router,rewriter } = pkg;


const server = create();

// eslint-disable-next-line no-undef
const myRouter = router(path.resolve('./api/db.json'));

server.use(defaults({}));
server.use(bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи



server.use(myRouter);
server.use(rewriter({
    '/api/*': '/$1',
    
}))
// запуск сервера
server.listen(3000, () => {
    console.log('server is running on 8000 port');
});
export default server