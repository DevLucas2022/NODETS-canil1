import { Router } from 'express';
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController';

const routers = Router();

routers.get('/', pageController.home);

routers.get('/dogs', pageController.dogs);

routers.get('/cats', pageController.cats);

routers.get('/fishes', pageController.fishes);

routers.get('/search', searchController.search);

export default routers;