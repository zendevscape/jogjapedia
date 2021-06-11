import Home from '../views/pages/home';
import Explore from '../views/pages/explore';
import Category from '../views/pages/category';
import Details from '../views/pages/details';
import Error404 from '../views/pages/error-404';

const routes = (url) => {
  switch (url) {
    case '/':
      return Home;
    case '/home':
      return Home;
    case '/explore':
      return Explore;
    case '/category/:id':
      return Category;
    case '/wisata/:id':
    case '/kuliner/:id':
    case '/kerajinan/:id':
    case '/pendidikan/:id':
      return Details;
    default:
      return Error404;
  }
};

export default routes;
