import UrlParser from '../../router/url-parser';
import Error404 from './error-404';
import ItemDataSource from '../../datasource/item-datasource';
import CategoryDataSource from '../../datasource/category-datasource';
import CategorySearchView from './category/category-search-view';
import CategoryShowPresenter from './category/category-show-presenter';
import CategorySearchPresenter from './category/category-search-presenter';

const view = new CategorySearchView();

const Category = {
  async render() {
    const main = document.querySelector('main');
    main.removeAttribute('class');
    main.classList.add('category');

    document.querySelector('header').classList.add('semi');
    document.querySelector('a.home').classList.remove('menu-active');
    document.querySelector('a.explore').classList.remove('menu-active');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    this._category = await CategoryDataSource.getCategory(url.id);

    if (this._category) {
      document.title = `${this._category.name}  | JogjaPedia`;
      return view.getTemplate(this._category.id, this._category.name);
    } else {
      return Error404.render();
    }
  },

  async afterRender() {
    if (this._category) {
      new CategoryShowPresenter({
        catId: this._category.id,
        view,
        itemDataSource: ItemDataSource,
      });
      new CategorySearchPresenter({
        catId: this._category.id,
        view,
        itemDataSource: ItemDataSource,
      });
    }
  },
};

export default Category;
