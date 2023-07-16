import { Router } from '@uah/server/src/runtime/server/router.js';
await Promise.all([import ('./app/examples/entities/api/index.js').then(m => {Router.set('examples/entities/:id',m.default.get);Router.set('examples/entities',m.default.post);}),
]);