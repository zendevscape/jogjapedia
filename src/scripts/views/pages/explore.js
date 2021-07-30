import $ from 'jquery';
import CategoryDataSource from '../../datasource/category-datasource';
import { createCategoryItem } from '../templates/template-creator';

const Explore = {
  async render() {
    $('main').removeAttr('class');
    $('main').addClass('explore');

    $('header').addClass('transparent');
    $('header').removeClass('cancel-transparent');

    $('a.home').removeClass('menu-active');
    $('a.explore').addClass('menu-active');

    document.title = 'Jelajahi | JogjaPedia';
    return `
      <section class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Jelajahi</h1>
          <p class="hero__tagline">Temukan berbagai hal menarik di Yogyakarta</p>
          <p class="hero__copyright">© Vendi Rizki K / CC BY-SA 4.0</p>
        </div>
      </section>
      <section class="category">
        <div class="category__list">
        </div>
      </section>`;
  },

  async afterRender() {
    try {
      const categoryData = await CategoryDataSource.getAllCategories();
      const categoryList = $('.category__list');
      categoryData.forEach((category) => {
        categoryList.append(createCategoryItem(category));
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default Explore;
