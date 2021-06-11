import UrlParser from '../../router/url-parser';
import ItemDataSource from '../../datasource/item-datasource';
import {createDetailsWithMarket, createDetailsWithReview} from '../templates/template-creator';

const Details = {
  async render() {
    const main = document.querySelector('main');
    main.removeAttribute('class');
    main.classList.add('details');

    document.querySelector('header').classList.add('semi');
    document.querySelector('a.home').classList.remove('menu-active');
    document.querySelector('a.explore').classList.remove('menu-active');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    this._item = await ItemDataSource.getItem(url.resource, url.id);

    if (this._item) {
      document.title = `${this._item.name}  | JogjaPedia`;

      switch (url.resource) {
        case 'wisata':
        case 'pendidikan':
          return createDetailsWithReview(this._item);
        case 'kuliner':
        case 'kerajinan':
          return createDetailsWithMarket(this._item);
      };
    } else {
      return Error404.render();
    }
  },

  async afterRender() {},
};

export default Details;
