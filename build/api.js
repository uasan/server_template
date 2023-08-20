import { Router } from '@uah/server/src/runtime/server/router.js';
await Promise.all([import ('./app/examples/entities/api/db.js').then(m => {Router.set('examples/entities/db/:id',m.default.get);}),
import ('./app/examples/entities/api/index.js').then(m => {Router.set('examples/entities/:id',m.Entity.get);Router.set('examples/entities',m.Entity.post);}),
]);