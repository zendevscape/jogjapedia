import CategoryDataSource from '../../datasource/category-datasource';
import {createCategoryItem} from '../templates/template-creator';

const Explore = {
  async render() {
    const main = document.querySelector('main');
    main.removeAttribute('class');
    main.classList.add('explore');

    const header = document.querySelector('header');
    header.classList.add('transparent');
    header.classList.remove('semi');

    document.querySelector('a.home').classList.remove('menu-active');
    document.querySelector('a.explore').classList.add('menu-active');

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
      const categoryList = document.querySelector('.category__list');
      categoryData.forEach((category) => {
        categoryList.innerHTML += createCategoryItem(category);
      });
    } catch (error) {
      console.log(error.message);
    };
  },
};

export default Explore;
