import $ from 'jquery';
import {createItem} from '../../templates/template-creator';

class CategorySearchView {
  getTemplate(id, name) {
    return `
      <section class="search">
        <div>
          <div class="search__category-name">
            <img data-src="/assets/img/icons/${id}.png"
              width="100px"
              height="100px"
              class="lazyload"
              alt="${name}">
            <h1>${name}</h1>
          </div>
          <div class="search__input">
            <input class="search-query" type="text" placeholder="Cari">
          </div>
        </div>
      </section>
      <div class="content-wrapper">
        <section class="item">
          <div class="item__list">
          </div>
        </section>
      </div>`;
  }

  runWhenUserIsSearching(callback) {
    $('.search-query').on('change', (event) => {
      callback(event.target.value);
    });
  }

  showItems(catId, items) {
    let html = '';

    if (items.length > 0) {
      items.map((item) => {
        html += createItem(catId, item);
      });
    } else {
      html = this._getEmptyItemTemplate();
    }

    $('.item__list').empty().append(html);
    $('.item__list').trigger('items:updated');
  }

  _getEmptyItemTemplate() {
    return `
      <div class="item__not-found">
        <p>Tidak ada <em>item</em> yang ditemukan.</p>
      </div>`;
  }
}

export default CategorySearchView;
