import { Router } from '@uah/server/src/runtime/server/router.js';
import ('./app/examples/entities/api/index.js').then(m => {Router.set('examples/entities/:id',m.Entities.get);});
