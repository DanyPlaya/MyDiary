/* eslint-disable @typescript-eslint/no-var-requires */
import pkg from 'json-server';
import path from 'path';

const { create, defaults, router, rewriter } = pkg;

const server = create();
const myRouter = router(path.resolve('./api/db.json'));

// Middleware для автоматического присвоения id
server.use((req, res, next) => {
  if (req.method === 'POST') {
    const data = req.body || {}; // Initialize as an empty object if undefined
    const lastNote = myRouter.db.get('notes').value().slice(-1)[0];
    const newId = lastNote ? lastNote.id + 1 : 1;
    data.id = newId;
    req.body = data; // Update the req.body with the modified data
  }
  next();
});

server.use(defaults({}));
server.use(rewriter({
  '/api/*': '/$1',
  '/blog/:resource/:id/show': '/:resource/:id',
}));
server.use(myRouter);

// запуск сервера
server.listen(3000, () => {
  console.log('server is running on 8000 port');
});

export default server;
